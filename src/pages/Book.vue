<script setup>
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";
import layoutdashboard from "../components/layoutdashboard.vue";

const books = ref([]);
const filteredBooks = ref([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;
let debounceTimeout = null;

async function fetchBooks() {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token found. Please login.");

    const res = await axios.get("http://localhost:3000/api/books", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("API response:", res.data);
    books.value = res.data.books;
    filteredBooks.value = [...books.value];
  } catch (err) {
    console.error("Failed to fetch books:", err.message);
  }
}

onMounted(fetchBooks);

watch(searchQuery, (newVal) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const query = newVal.toLowerCase();
    filteredBooks.value = books.value.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.id.toLowerCase().includes(query)
    );
    currentPage.value = 1;
  }, 300);
});

const sortedBooks = computed(() => {
  return [...filteredBooks.value].sort((a, b) => a.count - b.count);
});

const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return sortedBooks.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() =>
  Math.ceil(sortedBooks.value.length / itemsPerPage)
);

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}
</script>

<template>
  <layoutdashboard />
  <div class="h-26"></div>

  <div class="bg-[#F8F8E1] rounded-2xl shadow ms-70 p-10">
    <div class="max-w-5xl mx-auto">
      <div class="mb-6">
        <h1 class="text-4xl font-extrabold text-gray-800 indent-8">
          Welcome, <span class="text-pink-500">Internet</span>
        </h1>
        <p class="indent-8 text-sm text-gray-500">
          June 11, 2025 | Wednesday, 8:00 AM
        </p>
      </div>

      <div class="flex flex-wrap justify-between items-center mb-6 gap-3">
        <router-link to="/Add-book">
          <button
            class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition hover:shadow-xl cursor-pointer"
          >
            Add New Book
          </button>
        </router-link>

        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by title or ID..."
          class="px-4 py-2 w-72 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
      </div>

      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <table class="min-w-full text-left">
          <thead class="bg-pink-100 text-gray-700 text-md">
            <tr>
              <th class="px-6 py-4">Book ID</th>
              <th class="px-6 py-4">Title</th>
              <th class="px-6 py-4">Incoming</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr
              v-for="book in paginatedBooks"
              :key="book.id"
              class="border-t hover:bg-pink-50 transition"
            >
              <td class="px-6 py-4 font-medium">{{ book.id }}</td>
              <td class="px-6 py-4">{{ book.title }}</td>
              <td class="px-6 py-4">{{ book.count }}</td>
            </tr>

            <tr v-if="paginatedBooks.length === 0">
              <td colspan="3" class="text-center text-gray-500 py-6">
                No books found.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="flex justify-between items-center mt-4 max-w-5xl mx-auto text-gray-600 text-sm"
      >
        <button
          @click="prevPage"
          :disabled="currentPage === 1"
          class="px-4 py-2 rounded-lg bg-pink-100 hover:bg-pink-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          ← Prev
        </button>

        <span>Page {{ currentPage }} of {{ totalPages }}</span>

        <button
          @click="nextPage"
          :disabled="currentPage === totalPages"
          class="px-4 py-2 rounded-lg bg-pink-100 hover:bg-pink-200 disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          Next →
        </button>
      </div>
    </div>
  </div>
</template>
