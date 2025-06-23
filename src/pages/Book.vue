<script setup>
import { ref, computed, watch } from "vue";
import layoutdashboard from "../components/layoutdashboard.vue";

const books = [
  { id: "22527-1", title: "Grumpy Darling", count: 50 },
  { id: "21076-4", title: "The Eye of the World", count: 20 },
  { id: "22288-1", title: "Das Auge der Welt", count: 15 },
  { id: "17601-2", title: "L'oeil du monde", count: 1 },
  { id: "12345-6", title: "The Silent Patient", count: 34 },
  { id: "54321-7", title: "Atomic Habits", count: 25 },
  { id: "22334-9", title: "Rich Dad Poor Dad", count: 12 },
  { id: "33445-2", title: "The Hobbit", count: 8 },
  { id: "99887-6", title: "The Alchemist", count: 17 },
  { id: "66778-5", title: "To Kill a Mockingbird", count: 5 },
  { id: "55667-4", title: "1984", count: 10 },
  { id: "44556-3", title: "The Great Gatsby", count: 21 },
  { id: "77889-1", title: "Pride and Prejudice", count: 6 },
  { id: "88990-2", title: "The Catcher in the Rye", count: 14 },
  { id: "11223-3", title: "The Book Thief", count: 3 },
  { id: "99881-9", title: "Moby Dick", count: 4 },
  { id: "77665-2", title: "Thinking, Fast and Slow", count: 13 },
  { id: "33447-8", title: "Sapiens: A Brief History of Humankind", count: 19 },
  { id: "99882-0", title: "Harry Potter and the Sorcerer's Stone", count: 45 },
  { id: "11224-4", title: "The Lord of the Rings", count: 28 },
];


const searchQuery = ref("");
const sortOption = ref("count");
const currentPage = ref(1);
const itemsPerPage = 10;

let debounceTimeout = null;


const filteredBooks = ref([...books]);

watch(searchQuery, (newVal) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const query = newVal.toLowerCase();
    filteredBooks.value = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.id.toLowerCase().includes(query)
    );
    currentPage.value = 1; 
  }, 300);
});

const sortedBooks = computed(() => {
  const sorted = [...filteredBooks.value];
  return sorted.sort((a, b) => a.count - b.count);
});

const paginatedBooks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return sortedBooks.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() => Math.ceil(sortedBooks.value.length / itemsPerPage));

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

  <div class="bg-[#F8F8E1] rounded-2xl shadow  ms-70 p-10">
    <div class="max-w-5xl mx-auto">

      <div class="mb-6">
        <h1 class="text-4xl font-extrabold text-gray-800 indent-8">
          Welcome, <span class="text-pink-500">Internet</span>
        </h1>
        <p class="indent-8 text-sm text-gray-500">June 11, 2025 | Wednesday, 8:00 AM</p>
      </div>

      <div class="flex flex-wrap justify-between items-center mb-6 gap-3">

        <router-link to="/Add-book">
          <button
            class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md transition hover:shadow-xl cursor-pointer"
          >
             Add New Book
          </button>
        </router-link>

        <!-- Search -->
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by title or ID..."
          class="px-4 py-2 w-72 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
      </div>

      <!-- Book Table -->
      <div class="bg-white shadow-lg rounded-xl overflow-hidden">
        <table class="min-w-full text-left">
          <thead class="bg-pink-100 text-gray-700 text-md">
            <tr>
              <th class="px-6 py-4"> Book ID</th>
              <th class="px-6 py-4"> Title</th>
              <th class="px-6 py-4"> Incoming</th>
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

      <!-- Pagination Controls -->
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
