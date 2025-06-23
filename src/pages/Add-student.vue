<script setup>
import { reactive } from "vue";
import layoutdashboard from "../components/layoutdashboard.vue";

const form = reactive({
  name: "",
  id: "",
  class: "",
  email: "",
});

const handleSubmit = () => {
  alert(`Student "${form.name}" added successfully!`);
};
</script>

<template>
  <layoutdashboard />

  <div class="bg-[#F8F8E1] rounded-2xl shadow -mt-120 ms-69">
    <div class="w-[63rem] h-auto">
      <div class="w-[90%] mx-auto mt-5 py-5">
        <!-- Back button -->
        <span class="text-xl mr-1 border text-pink-500">←</span>

        <router-link
          to="/student"
          class="inline-block mb-4 text-black hover:text-pink-800 font-semibold text-[24px]"
          >Back
        </router-link>

        <!-- Heading -->
        <h1 class="text-4xl font-bold mb-8 text-center">
          New, <span class="text-pink-500">Student!</span>
        </h1>

        <!-- Centered form -->
        <form @submit.prevent="handleSubmit" class="max-w-sm space-y-4 mx-auto">
          <div>
            <label class="block mb-1 font-semibold">Name</label>
            <input
              v-model="form.name"
              type="text"
              placeholder="name..."
              class="w-full border border-pink-300 rounded-md p-2 focus:outline-pink-400"
            />
          </div>

          <div>
            <label class="block mb-1 font-semibold">ID</label>
            <input
              v-model="form.id"
              type="text"
              placeholder="id..."
              class="w-full border border-pink-300 rounded-md p-2 focus:outline-pink-400"
            />
          </div>

          <div>
            <label class="block mb-1 font-semibold">Class</label>
            <input
              v-model="form.class"
              type="text"
              placeholder="class..."
              class="w-full border border-pink-300 rounded-md p-2 focus:outline-pink-400"
            />
          </div>

          <div>
            <label class="block mb-1 font-semibold">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="email..."
              class="w-full border border-pink-300 rounded-md p-2 focus:outline-pink-400"
            />
          </div>

          <router-link to="/add-student">
            <button
              type="submit"
              class="w-full bg-pink-400 hover:bg-pink-500 text-white font-semibold py-2 rounded-md mt-4"
            >
              Add Student
            </button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>
