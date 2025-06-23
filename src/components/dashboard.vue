<script setup>
import home1 from '../assets/home(1).png'
import student1 from '../assets/student.png'
import book from '../assets/book.png'
</script>

<template>
  <div class="w-1/5 min-h-screen bg-[#F8F8E1] rounded-b-2xl shadow-xl py-6 px-3 fixed mt-20">

    <div class="flex justify-center mb-10">
      <h1 class="text-3xl font-extrabold text-gray-800"> LMS</h1>
    </div>


    <nav class="flex flex-col gap-4">

      <router-link
        to="/home"
        class="flex items-center gap-4 px-4 py-3 rounded-xl transition duration-200 hover:bg-pink-100 hover:text-pink-600 font-medium text-gray-700"
        :class="{ 'bg-pink-200 text-pink-700': $route.path === '/home' }"
      >
        <img class="w-6 h-6" :src="home1" />
        <span class="text-lg">Home</span>
      </router-link>


      <router-link
        to="/student"
        class="flex items-center gap-4 px-4 py-3 rounded-xl transition duration-200 hover:bg-pink-100 hover:text-pink-600 font-medium text-gray-700"
        :class="{ 'bg-pink-200 text-pink-700': $route.path === '/student' }"
      >
        <img class="w-6 h-6" :src="student1" />
        <span class="text-lg">Student</span>
      </router-link>


      <router-link
        to="/book"
        class="flex items-center gap-4 px-4 py-3 rounded-xl transition duration-200 hover:bg-pink-100 hover:text-pink-600 font-medium text-gray-700"
        :class="{ 'bg-pink-200 text-pink-700': $route.path === '/book' }"
      >
        <img class="w-6 h-6" :src="book" />
        <span class="text-lg">Book</span>
      </router-link>
    </nav>
  </div>
</template>
