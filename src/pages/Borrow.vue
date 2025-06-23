<script setup>
import { ref, computed, watch } from "vue";
import layoutdashboard from "../components/layoutdashboard.vue";

const allBorrows = ref([
  { studentId: "22527-1", bookId: "B1001", author: "George Orwell", borrowDate: "2025-06-10", returnDate: "2025-06-20" },
  { studentId: "21076-4", bookId: "B1002", author: "J.K. Rowling", borrowDate: "2025-06-11", returnDate: "2025-06-25" },
  { studentId: "22288-1", bookId: "B1003", author: "Dan Brown", borrowDate: "2025-06-12", returnDate: "2025-06-26" },
  { studentId: "17601-2", bookId: "B1004", author: "Jane Austen", borrowDate: "2025-06-13", returnDate: "2025-06-23" },
  { studentId: "99181-3", bookId: "B1005", author: "Mark Twain", borrowDate: "2025-06-14", returnDate: "2025-06-24" },
  { studentId: "55811-1", bookId: "B1006", author: "Leo Tolstoy", borrowDate: "2025-06-15", returnDate: "2025-06-30" },
  { studentId: "34218-9", bookId: "B1007", author: "Agatha Christie", borrowDate: "2025-06-16", returnDate: "2025-07-01" },
  { studentId: "88123-7", bookId: "B1008", author: "Charles Dickens", borrowDate: "2025-06-17", returnDate: "2025-07-03" },
  { studentId: "67121-3", bookId: "B1009", author: "Stephen King", borrowDate: "2025-06-18", returnDate: "2025-07-04" },
  { studentId: "80112-7", bookId: "B1010", author: "Ernest Hemingway", borrowDate: "2025-06-19", returnDate: "2025-07-05" },
  { studentId: "13121-8", bookId: "B1011", author: "F. Scott Fitzgerald", borrowDate: "2025-06-20", returnDate: "2025-07-10" },
  { studentId: "50192-4", bookId: "B1012", author: "Emily Brontë", borrowDate: "2025-06-21", returnDate: "2025-07-11" },
  { studentId: "41892-0", bookId: "B1013", author: "Toni Morrison", borrowDate: "2025-06-22", returnDate: "2025-07-12" },
  { studentId: "38191-9", bookId: "B1014", author: "H.G. Wells", borrowDate: "2025-06-23", returnDate: "2025-07-15" },
  { studentId: "10001-1", bookId: "B1015", author: "Isaac Asimov", borrowDate: "2025-06-24", returnDate: "2025-07-16" },
  { studentId: "10002-2", bookId: "B1016", author: "Arthur C. Clarke", borrowDate: "2025-06-25", returnDate: "2025-07-18" },
  { studentId: "10003-3", bookId: "B1017", author: "Aldous Huxley", borrowDate: "2025-06-26", returnDate: "2025-07-19" },
  { studentId: "10004-4", bookId: "B1018", author: "Ray Bradbury", borrowDate: "2025-06-27", returnDate: "2025-07-20" },
  { studentId: "10005-5", bookId: "B1019", author: "Jules Verne", borrowDate: "2025-06-28", returnDate: "2025-07-21" },
  { studentId: "10006-6", bookId: "B1020", author: "Franz Kafka", borrowDate: "2025-06-29", returnDate: "2025-07-22" },
]);

const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;
const filteredBorrows = ref([...allBorrows.value]);

let debounceTimeout = null;
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

const totalPages = computed(() =>
  Math.ceil(filteredBorrows.value.length / itemsPerPage)
);

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
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
        placeholder="Search by Student ID, Book ID, Author..."
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
          </tr>
          <tr v-if="paginatedBorrows.length === 0">
            <td colspan="5" class="text-center text-gray-500 py-6">No results found.</td>
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
