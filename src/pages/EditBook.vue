<template>
  <div class="bg-[#F8F8E1] min-h-screen p-10">
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
      <h1 class="text-3xl font-bold mb-6 text-center text-pink-500">Edit Book</h1>

      <form @submit.prevent="updateBook">
        <div class="mb-4">
          <label class="block mb-1 font-semibold">Title</label>
          <input
            v-model="book.title"
            type="text"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-semibold">Author Name</label>
          <input
            v-model="book.author_name"
            type="text"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-semibold">Category</label>
          <input
            v-model="book.category"
            type="text"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div class="mb-6">
          <label class="block mb-1 font-semibold">Quantity</label>
          <input
            v-model.number="book.quantity"
            type="number"
            min="0"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div class="flex justify-between">
          <button
            type="submit"
            class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded shadow"
          >
            Update Book
          </button>
          <router-link
            to="/book"
            class="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded shadow"
          >
            Cancel
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const token = localStorage.getItem("token");
const bookId = route.params.id;

const book = ref({
  title: "",
  author_name: "",
  category: "",
  quantity: 0,
});

const fetchBook = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw new Error("Failed to fetch book data");

    const data = await res.json();
    book.value = data;
  } catch (error) {
    console.error(error);
    alert("Failed to load book data.");
  }
};

const updateBook = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/books/${bookId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book.value),
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Update failed: ${text}`);
    }

    alert("Book updated successfully!");
    router.push("/book");
  } catch (error) {
    console.error(error);
    alert("Error updating book.");
  }
};

onMounted(fetchBook);
</script>
