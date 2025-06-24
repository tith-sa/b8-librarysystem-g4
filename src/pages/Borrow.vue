<script setup>
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";
import layoutdashboard from "../components/layoutdashboard.vue";

// Your token as a string (wrapped in quotes!)
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6ImxpYmVyaWFuIiwiaWF0IjoxNzUwNzM1MzEzfQ._aPCMT_iEq_Izy6s5q9CZv7BrwANN0cb1idQYwIz8-8";

const allBorrows = ref([]);
const filteredBorrows = ref([]);
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;
const totalPages = ref(1);
let debounceTimeout = null;

const formatDateTime = (dateString) => {
  const date = new Date(dateString);
  return `${date.toISOString().slice(0, 10)} ${date.toTimeString().slice(0, 5)}`; // YYYY-MM-DD HH:mm
};

const fetchBorrows = async () => {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/borrows?page=${currentPage.value}&limit=${itemsPerPage}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    allBorrows.value = res.data.borrows.map((item) => ({
      studentId: item.id_card,
      bookId: item.book_id || item.title,
      author: item.full_name,
      borrowDate: formatDateTime(item.borrow_date),
      returnDate: formatDateTime(item.return_date),
    }));

    filteredBorrows.value = [...allBorrows.value];
    totalPages.value = res.data.totalPages;
  } catch (error) {
    console.error("Error fetching borrows:", error);
    alert("⚠️ Unauthorized or fetch error. Please check your token and API.");
  }
};

onMounted(fetchBorrows);

// Search functionality
watch(searchQuery, (val) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const query = val.toLowerCase();
    filteredBorrows.value = allBorrows.value.filter(
      (item) =>
        item.studentId.toLowerCase().includes(query) ||
        item.bookId.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query)
    );
    currentPage.value = 1;
  }, 300);
});

const paginatedBorrows = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredBorrows.value.slice(start, start + itemsPerPage);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchBorrows();
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchBorrows();
  }
};

const handleEdit = (borrow) => {
  alert(`📝 Edit borrow for ${borrow.studentId}`);
};

const handleDelete = (borrow) => {
  if (confirm(`❌ Delete borrow record for ${borrow.studentId}?`)) {
    alert(`Deleted! (You can now implement DELETE API here)`);
  }
};
</script>

<template>
  <layoutdashboard />
  <div class="h-26"></div>
  <div class="bg-[#F8F8E1] rounded-2xl shadow ms-72 p-10 max-w-6xl mx-auto">
    <div class="mb-10">
      <h1 class="text-4xl font-extrabold text-gray-800">Borrow</h1>
      <h1 class="text-4xl font-extrabold text-pink-500 -mt-9.5 ms-36">Books Page</h1>
      <p class="text-gray-600 text-sm mt-2">June 23, 2025 | Monday, 8:00 AM</p>
    </div>

    <div class="flex flex-wrap justify-between items-center mb-6 gap-3">
      <router-link to="/add-borrow">
        <button
          class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
        >
          Add New Student
        </button>
      </router-link>

      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by Student ID, Book ID, or Author..."
        class="px-4 py-2 w-72 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
    </div>

    <div class="bg-white shadow-lg rounded-xl overflow-hidden">
      <table class="min-w-full text-left">
        <thead class="bg-pink-100 text-gray-700 text-md">
          <tr>
            <th class="px-6 py-4">Student ID</th>
            <th class="px-6 py-4">Book ID</th>
            <th class="px-6 py-4">Author</th>
            <th class="px-6 py-4">Borrow Date</th>
            <th class="px-6 py-4">Return Date</th>
            <th class="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-sm">
          <tr
            v-for="borrow in paginatedBorrows"
            :key="borrow.studentId + borrow.bookId"
            class="border-t hover:bg-pink-50 transition"
          >
            <td class="px-6 py-4 font-medium">{{ borrow.studentId }}</td>
            <td class="px-6 py-4">{{ borrow.bookId }}</td>
            <td class="px-6 py-4">{{ borrow.author }}</td>
            <td class="px-6 py-4">{{ borrow.borrowDate }}</td>
            <td class="px-6 py-4">{{ borrow.returnDate }}</td>
            <td class="px-6 py-4 flex gap-2">
              <button @click="handleEdit(borrow)" class="bg-yellow-300 text-white px-3 py-1 rounded">Edit</button>
              <button @click="handleDelete(borrow)" class="bg-red-400 text-white px-3 py-1 rounded">Delete</button>
            </td>
          </tr>
          <tr v-if="paginatedBorrows.length === 0">
            <td colspan="6" class="text-center text-gray-500 py-6">No results found.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-between items-center mt-6 text-sm text-gray-600 max-w-5xl mx-auto">
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
</template>
