<template>
  <div class="grid grid-cols-3 gap-3 h-screen">
    <div class="col-span-1 flex items-center justify-center bg-[#F8F8E1]">
      <img class="w-70 h-70" :src="loginimage" alt="image" />
    </div>
    <div class="p-10 grid col-span-2 bg-[#F8F8E1]">
      <form class="w-[50%] m-auto">
        <h1 class="text-3xl font-bold text-center mb-2">
          Welcome <span class="text-pink-500">LMS!</span>
        </h1>
        <p class="text-center mb-6">Please login before you using system!</p>
        <div class="">
          <label for="email" class="block text-lg font-bold text-gray-700 mb-2"
            >Email :</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="border-2 border-pink-400 rounded px-3 py-2 w-full mb-4"
            placeholder="Enter your email"
          />
        </div>
        <div class="">
          <label
            for="password"
            class="block text-lg font-bold text-gray-700 mb-2"
            >Passowrd :</label
          >
          <input
            type="password"
            id="password"
            name="password"
            class="border-2 border-pink-400 rounded px-3 py-2 w-full mb-4"
            placeholder="Enter your password"
          />
        </div>
        <div class="flex items-center mb-4 gap-2">
          <input type="checkbox" id="myCheckbox" v-model="isChecked" />
          <label for="myCheckbox"> Remember Me</label>
        </div>
        <router-link to="/home"
          ><Button
            type="submit"
            class="bg-pink-500 py-2 px-4 rounded text-white hover:bg-pink-600 w-full font-bold"
            >Login</Button
          ></router-link
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import "primeicons/primeicons.css";

const isChecked = ref(false);
import loginimage from "../assets/login-image.png";
</script>
