<template>
  <div class="grid grid-cols-3 gap-3 h-screen">
    <div class="col-span-1 flex items-center justify-center bg-[#F8F8E1]">
      <img class="w-70 h-70" :src="loginimage" alt="image" />
    </div>
    <div class="p-10 grid col-span-2 bg-[#F8F8E1]">
      <form class="w-[50%] m-auto" @submit.prevent="handleLogin">
        <h1 class="text-3xl font-bold text-center mb-2">
          Welcome <span class="text-pink-500">LMS!</span>
        </h1>
        <p class="text-center mb-6">Please login before using the system!</p>

        <div>
          <label for="username" class="block text-lg font-bold text-gray-700 mb-2">Username:</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="border-2 border-pink-400 rounded px-3 py-2 w-full mb-4"
            placeholder="Enter your username"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-lg font-bold text-gray-700 mb-2">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="border-2 border-pink-400 rounded px-3 py-2 w-full mb-4"
            placeholder="Enter your password"
            required
          />
        </div>

        <div class="flex items-center mb-4 gap-2">
          <input type="checkbox" id="myCheckbox" v-model="isChecked" />
          <label for="myCheckbox"> Remember Me</label>
        </div>

        <button
          type="submit"
          class="bg-pink-500 py-2 px-4 rounded text-white hover:bg-pink-600 w-full font-bold"
        >
          Login
        </button>

        <p v-if="errorMessage" class="text-red-500 text-center mt-2">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import loginimage from "../assets/login-image.png";

const username = ref("");
const password = ref("");
const isChecked = ref(false);
const errorMessage = ref("");

const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await axios.post("http://localhost:3000/api/auth/login", {
      username: username.value,
      password: password.value,
    });

    // Optional: save token or user info if returned
    // localStorage.setItem("token", response.data.token);

    router.push("/home");
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage.value = error.response.data.message;
    } else {
      errorMessage.value = "Login failed. Please try again.";
    }
  }
};
</script>
