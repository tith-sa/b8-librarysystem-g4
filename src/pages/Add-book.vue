<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import layoutdashboard from "../components/layoutdashboard.vue";

const router = useRouter();

// Form fields
const bookId = ref("");
const title = ref("");
const selectedAuthorId = ref("");
const selectedCategoryId = ref("");  // Use category ID now
const quantity = ref(1);
const description = ref("");

// Dropdown data
const categories = ref([]);
const authors = ref([]);

// Fetch categories with auth token
async function fetchCategories() {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:3000/api/categories", {
      headers: { Authorization: `Bearer ${token}` },
    });
    categories.value = res.data;
  } catch (err) {
    console.error("Failed to fetch categories:", err);
    alert("Error fetching categories.");
  }
}

// Fetch authors with auth token
async function fetchAuthors() {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.get("http://localhost:3000/api/authors", {
      headers: { Authorization: `Bearer ${token}` },
    });
    authors.value = res.data;
  } catch (err) {
    console.error("Failed to fetch authors:", err);
    alert("Error fetching authors.");
  }
}

onMounted(() => {
  fetchCategories();
  fetchAuthors();
});

async function submitForm(e) {
  e.preventDefault();

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Please log in first.");
    return;
  }

  // Validation - check required fields carefully
  if (
    !bookId.value ||
    !title.value.trim() ||
    !selectedAuthorId.value ||
    !selectedCategoryId.value ||
    !quantity.value
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Convert values properly
  const idNum = Number(bookId.value);
  const authorIdNum = Number(selectedAuthorId.value);
  const categoryIdNum = Number(selectedCategoryId.value);
  const quantityNum = Number(quantity.value);

  // Validate numbers are positive
  if (idNum <= 0) {
    alert("Book ID must be a positive number.");
    return;
  }
  if (authorIdNum <= 0) {
    alert("Please select a valid author.");
    return;
  }
  if (categoryIdNum <= 0) {
    alert("Please select a valid category.");
    return;
  }
  if (quantityNum <= 0) {
    alert("Quantity must be at least 1.");
    return;
  }

  const payload = {
    id: idNum,
    title: title.value.trim(),
    author_id: authorIdNum,
    category_id: categoryIdNum,
    quantity: quantityNum,
    description: description.value.trim() || null,
  };

  console.log("Submitting payload:", payload);

  try {
    await axios.post("http://localhost:3000/api/books", payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Book added successfully!");
    router.push("/book");
  } catch (err) {
    console.error("Failed to add book:", err.response?.data || err);
    alert(
      "Failed to add book. " +
        (err.response?.data?.message || "Please check your input.")
    );
  }
}
</script>

<template>
  <layoutdashboard />
  <div class="h-26"></div>

  <div class="bg-[#F8F8E1] rounded-2xl shadow ms-70 p-10 max-w-5xl mx-auto">
    <div class="mb-12">
      <router-link
        to="/book"
        class="inline-flex items-center gap-2 px-6 py-2 font-semibold bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition cursor-pointer"
      >
        <i class="pi pi-arrow-left"></i>
        Back
      </router-link>
    </div>

    <div class="flex justify-center mb-12 space-x-2">
      <h1 class="font-extrabold text-4xl text-gray-900">Add New</h1>
      <h1 class="font-extrabold text-4xl text-pink-500">Book</h1>
    </div>

    <form class="space-y-8" @submit.prevent="submitForm">
      <div>
        <label for="bookId" class="block text-2xl font-bold text-gray-800 mb-3">
          Book ID:
        </label>
        <input
          id="bookId"
          v-model="bookId"
          type="number"
          placeholder="Enter Book ID"
          required
          min="1"
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3"
        />
      </div>

      <div>
        <label for="title" class="block text-2xl font-bold text-gray-800 mb-3">
          Title:
        </label>
        <input
          id="title"
          v-model="title"
          type="text"
          placeholder="Enter Book Title"
          required
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3"
        />
      </div>

      <div>
        <label for="author" class="block text-2xl font-bold text-gray-800 mb-3">
          Author:
        </label>
        <select
          id="author"
          v-model="selectedAuthorId"
          required
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3"
        >
          <option value="">-- Select Author --</option>
          <option v-for="author in authors" :key="author.id" :value="author.id">
            {{ author.full_name }}
          </option>
        </select>
      </div>

      <div>
        <label for="category" class="block text-2xl font-bold text-gray-800 mb-3">
          Category:
        </label>
        <select
          id="category"
          v-model="selectedCategoryId"
          required
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3"
        >
          <option value="">-- Select Category --</option>
          <option v-for="cat in categories" :key="cat.id" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </div>

      <div>
        <label for="quantity" class="block text-2xl font-bold text-gray-800 mb-3">
          Quantity:
        </label>
        <input
          id="quantity"
          v-model="quantity"
          type="number"
          min="1"
          placeholder="Enter Book Quantity"
          required
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3"
        />
      </div>

      <div>
        <label for="description" class="block text-2xl font-bold text-gray-800 mb-3">
          Description:
        </label>
        <textarea
          id="description"
          v-model="description"
          rows="6"
          placeholder="Enter Book Description"
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3 resize-none"
        ></textarea>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="bg-pink-500 text-white font-bold px-10 py-3 rounded-lg hover:bg-pink-600 transition"
        >
          Add Book
        </button>
      </div>
    </form>
  </div>
</template>
