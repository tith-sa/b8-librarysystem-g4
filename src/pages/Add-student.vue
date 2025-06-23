<script setup>
import { reactive } from "vue";
import layoutdashboard from "../components/layoutdashboard.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const form = reactive({
  name: "",
  id: "",
  class: "",
  email: "",
});

const handleSubmit = () => {
  alert(` Student "${form.name}" added successfully!`);
  router.push("/student"); 
};
</script>

<template>
  <layoutdashboard />
  <div class="h-26"></div>

  <div class=" bg-[#F8F8E1] rounded-2xl shadow ms-72 p-10 max-w-5xl mx-auto">

    <div class="mb-6">
      <router-link
        to="/student"
        class="inline-flex items-center text-pink-500 hover:text-pink-700 font-semibold text-lg"
      >
        <span class="text-2xl mr-2">←</span> Back
      </router-link>
    </div>

    <div class="text-center mb-10">
      <h1 class="text-4xl font-extrabold text-gray-800">Add New</h1>
      <h2 class="text-4xl font-extrabold text-pink-500 -mt-1">Student</h2>
      <p class="text-sm text-gray-600 mt-2">Please fill in the form below</p>
    </div>

    <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-6 sm:grid-cols-2 px-4">
      <div>
        <label class="block mb-1 font-semibold text-gray-700">Name</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="e.g., Chantha Makara"
          class="w-full border border-pink-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-semibold text-gray-700">Student ID</label>
        <input
          v-model="form.id"
          type="text"
          placeholder="e.g., 12345"
          class="w-full border border-pink-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-semibold text-gray-700">Class</label>
        <input
          v-model="form.class"
          type="text"
          placeholder="e.g., 12A"
          class="w-full border border-pink-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-semibold text-gray-700">Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="e.g., student@email.com"
          class="w-full border border-pink-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>

      <div class="col-span-1 sm:col-span-2">
        <button
          type="submit"
          class="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-xl shadow-lg transition cursor-pointer"
        >
           Add Student
        </button>
      </div>
    </form>
  </div>
</template>
