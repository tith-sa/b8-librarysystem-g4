<script setup>
import { reactive } from "vue";
import layoutdashboard from "../components/layoutdashboard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Form data
const form = reactive({
  bookId: "",
  studentId: "",
  author: "",
  borrowDate: "",
  returnDate: "",
});

// Save form data to localStorage
const handleSubmit = () => {
  const existing = JSON.parse(localStorage.getItem("borrows") || "[]");
  existing.push({ ...form });
  localStorage.setItem("borrows", JSON.stringify(existing));

  alert(`✅ Borrow entry saved for student "${form.studentId}"`);
  router.push("/borrow");
};
</script>

<template>
  <layoutdashboard />
  <div class="h-20"></div>

  <div class="bg-[#F8F8E1] rounded-2xl shadow ms-72 p-10 max-w-5xl mx-auto">
    <div class="mb-8 flex justify-between items-center">
      <router-link
        to="/borrow"
        class="text-lg font-semibold text-pink-600 hover:underline"
      >
        ← Back to Borrow List
      </router-link>
      <h1 class="text-3xl font-bold text-gray-800">
        Add <span class="text-pink-500">Borrow Record</span>
      </h1>
    </div>

    <form @submit.prevent="handleSubmit" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
        <label class="block text-lg font-semibold mb-1">Book ID</label>
        <input
          v-model="form.bookId"
          type="text"
          placeholder="Enter book ID..."
          class="w-full p-3 border border-pink-300 rounded-xl focus:outline-pink-400"
          required
        />
      </div>

      <div>
        <label class="block text-lg font-semibold mb-1">Student ID</label>
        <input
          v-model="form.studentId"
          type="text"
          placeholder="Enter student ID..."
          class="w-full p-3 border border-pink-300 rounded-xl focus:outline-pink-400"
          required
        />
      </div>

      <div>
        <label class="block text-lg font-semibold mb-1">Author</label>
        <input
          v-model="form.author"
          type="text"
          placeholder="Enter author name..."
          class="w-full p-3 border border-pink-300 rounded-xl focus:outline-pink-400"
          required
        />
      </div>

      <div>
        <label class="block text-lg font-semibold mb-1">Borrow Date</label>
        <input
          v-model="form.borrowDate"
          type="date"
          class="w-full p-3 border border-pink-300 rounded-xl focus:outline-pink-400"
          required
        />
      </div>

      <div>
        <label class="block text-lg font-semibold mb-1">Return Date</label>
        <input
          v-model="form.returnDate"
          type="date"
          class="w-full p-3 border border-pink-300 rounded-xl focus:outline-pink-400"
          required
        />
      </div>

      <div class="sm:col-span-2 flex justify-end mt-4">
        <button
          type="submit"
          class="cursor-pointer bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-xl shadow hover:shadow-xl transition"
        >
          Save 
        </button>
      </div>
    </form>
  </div>
</template>
