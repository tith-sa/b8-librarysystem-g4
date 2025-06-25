<script setup>
import { ref, computed, watch, onMounted } from "vue";
import layoutdashboard from "../components/layoutdashboard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = ref(10);

const totalPages = ref(0);
const totalStudents = ref(0);
const filteredStudents = ref([]);
const paginatedStudents = ref([]);

// Define the token
const token = localStorage.getItem("token");

const fetchStudents = async () => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/students?page=${currentPage.value}&limit=${itemsPerPage.value}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    totalPages.value = data.totalPages;
    totalStudents.value = data.totalStudents;
    filteredStudents.value = data.students;
    paginatedStudents.value = data.students;
  } catch (error) {
    console.error("Failed to fetch students:", error);
    alert("Failed to load students. Please check your token or API endpoint.");
  }
};

// Search functionality with debounce
let debounceTimeout = null;
watch(searchQuery, (val) => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    const query = val.toLowerCase();
    paginatedStudents.value = filteredStudents.value.filter(
      (s) =>
        s.full_name.toLowerCase().includes(query) ||
        s.id_card.toLowerCase().includes(query) ||
        s.class.toLowerCase().includes(query)
    );
    currentPage.value = 1;
  }, 300);
});

// Delete student function
const handleDelete = async (student) => {
  const confirmed = confirm(`Are you sure you want to delete ${student.full_name}?`);
  if (!confirmed) return;

  try {
    const res = await fetch(`http://localhost:3000/api/students/${student.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to delete student");
    }

    alert("Student deleted successfully.");
    fetchStudents(); // refresh
  } catch (error) {
    console.error("Error deleting student:", error);
    alert("Error deleting student.");
  }
};

// Edit handler (example using Vue Router)
const handleEdit = (student) => {
  router.push(`/edit-student/${student.id}`);
};

// Fetch students on mount
onMounted(() => {
  fetchStudents();
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchStudents();
  }
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchStudents();
  }
};
</script>

<template>
  <layoutdashboard />
  <div class="h-26"></div>
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
        placeholder="Search by Name, ID Card, Class..."
        class="px-4 py-2 w-72 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
      />
    </div>

    <div class="bg-white shadow-lg rounded-xl overflow-hidden">
      <table class="min-w-full text-left">
        <thead class="bg-pink-100 text-gray-700 text-md">
          <tr>
            <th class="px-6 py-4">Student ID</th>
            <th class="px-6 py-4">Full Name</th>
            <th class="px-6 py-4">ID Card</th>
            <th class="px-6 py-4">Class</th>
            <th class="px-6 py-4">Actions</th>
          </tr>
        </thead>
        <tbody class="text-gray-700 text-sm">
          <tr
            v-for="student in paginatedStudents"
            :key="student.id"
            class="border-t hover:bg-pink-50 transition"
          >
            <td class="px-6 py-4 font-medium">{{ student.id }}</td>
            <td class="px-6 py-4">{{ student.full_name }}</td>
            <td class="px-6 py-4">{{ student.id_card }}</td>
            <td class="px-6 py-4">{{ student.class }}</td>
            <td class="px-6 py-4 flex gap-2">
              <button
                @click="handleEdit(student)"
                class="bg-yellow-300 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                @click="handleDelete(student)"
                class="bg-red-400 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr v-if="paginatedStudents.length === 0">
            <td colspan="5" class="text-center text-gray-500 py-6">No students found.</td>
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
