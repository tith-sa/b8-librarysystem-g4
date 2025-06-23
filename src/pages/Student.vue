<script setup>
import { ref, computed, watch } from "vue";
import layoutdashboard from "../components/layoutdashboard.vue";

const allStudents = [
  { id: "22527-1", name: "Chantha Makara", books: 50, department: "Technology" },
  { id: "21076-4", name: "Phorn Sreypheak", books: 20, department: "Technology" },
  { id: "22288-1", name: "Rith Sophea", books: 15, department: "Technology" },
  { id: "17601-2", name: "Tith Sa", books: 1, department: "Technology" },
  { id: "99181-3", name: "Ly Mey", books: 10, department: "Engineering" },
  { id: "76182-2", name: "Pov Dara", books: 7, department: "Science" },
  { id: "34218-9", name: "Sok Nina", books: 5, department: "Literature" },
  { id: "88123-7", name: "Kim Sovan", books: 18, department: "Law" },
  { id: "55811-1", name: "Van Nita", books: 12, department: "Art" },
  { id: "67121-3", name: "Sreyneang Chum", books: 22, department: "Mathematics" },
  { id: "13121-8", name: "Mak Sitha", books: 4, department: "Business" },
  { id: "50192-4", name: "Long Phalla", books: 2, department: "Physics" },
  { id: "41892-0", name: "Chea Veasna", books: 9, department: "Technology" },
  { id: "80112-7", name: "Touch Vuthy", books: 17, department: "Biology" },
  { id: "38191-9", name: "Nget Darith", books: 6, department: "Chemistry" },
];

const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 10;
const filteredStudents = ref([...allStudents]);


let debounceTimeout = null;
watch(searchQuery, (val) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const query = val.toLowerCase();
    filteredStudents.value = allStudents.filter(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        s.id.toLowerCase().includes(query) ||
        s.department.toLowerCase().includes(query)
    );
    currentPage.value = 1;
  }, 300);
});

const paginatedStudents = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredStudents.value.slice(start, start + itemsPerPage);
});

const totalPages = computed(() =>
  Math.ceil(filteredStudents.value.length / itemsPerPage)
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
  <div class="h-20"></div>
  <div class="bg-[#F8F8E1] rounded-2xl shadow ms-72 p-10 max-w-6xl mx-auto">

    <div class="mb-10">
      <h1 class="text-4xl font-extrabold text-gray-800">Welcome to</h1>
      <h1 class="text-4xl font-extrabold text-pink-500 -mt-9.5 ms-56">Students Page</h1>
      <p class="text-gray-600 text-sm mt-2">June 11, 2025 | Wednesday, 8:00 AM</p>
    </div>

    <div class="flex flex-wrap justify-between items-center mb-6 gap-3">
      <router-link to="/add-student">
        <button
          class="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer"
        >
          Add New Student
        </button>
      </router-link>

      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by ID, Name, Department..."
        class="px-4 py-2 w-72 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
    </div>

    <div class="bg-white shadow-lg rounded-xl overflow-hidden">
      <table class="min-w-full text-left">
        <thead class="bg-pink-100 text-gray-700 text-md">
          <tr>
            <th class="px-6 py-4">Student ID</th>
            <th class="px-6 py-4">Name</th>
            <th class="px-6 py-4">Book Issued</th>
            <th class="px-6 py-4">Department</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-sm">
          <tr
            v-for="student in paginatedStudents"
            :key="student.id"
            class="border-t hover:bg-pink-50 transition"
          >
            <td class="px-6 py-4 font-medium">{{ student.id }}</td>
            <td class="px-6 py-4">{{ student.name }}</td>
            <td class="px-6 py-4">{{ student.books }}</td>
            <td class="px-6 py-4">{{ student.department }}</td>
          </tr>
          <tr v-if="paginatedStudents.length === 0">
            <td colspan="4" class="text-center text-gray-500 py-6">
              No students found.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-between items-center mt-4 max-w-5xl mx-auto text-gray-600 text-sm">
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
