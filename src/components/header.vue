<template>
  <header class="bg-[#F8F8E1]">
    <div class="flex justify-between px-4">
      <div class="w-40 h-20">
        <img class="w-full h-full" :src="logo" alt="Image" />
      </div>

      <div class="w-90 h-20 flex justify-between">
        <div class="w-40 ms-4 mt-2">
          <h1 class="text-lg font-bold">Chantha Makara</h1>
          <p class="text-sm ml-0 text-gray-500">Librarian</p>
        </div>
        <div class="rounded-full mt-2">
          <img
            class="w-20 h-[95%] shadow-xl rounded-full"
            :src="makara"
            alt="Image"
          />
        </div>
        <div>
          <router-link to="/login" class="rounded-xl text-white">
            <div
              class="rounded-xl px-4 py-2 ms-4 bg-pink-500 mt-5 hover:bg-pink-800 hover:shadow-2xl"
            >
              <p class="font-bold">Logout</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import logo from "../assets/logo.png";
import makara from "../assets/makara.png";
</script>
