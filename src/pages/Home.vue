<script setup>
import layoutdashboard from '../components/layoutdashboard.vue';
import BarChart from '../components/chart.vue'
import people from '../assets/people.png'
import borrow from '../assets/borrow.png'
import overdue from '../assets/overdue.png'
import adduser from '../assets/add-user.png'
</script>

<template>
  <layoutdashboard />
  <div class="h-26"></div>
  <div class="bg-[#F8F8E1] rounded-2xl shadow  ms-72 p-8">
    <div class="max-w-[1000px] mx-auto">
      <h1 class="text-4xl font-extrabold text-gray-800 mb-2 indent-8">
        Welcome, <span class="text-[#FF90BB]">Home page</span>
      </h1>
      <p class="indent-8 text-gray-600 mb-6">June 11, 2025 | Wednesday, 8:00 AM</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-center">

        <div class="bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-2xl shadow-lg p-6 flex justify-between items-center transition hover:shadow-2xl">
          <div>
            <div class="text-4xl font-bold mb-2">1234</div>
            <div class="text-xl">Total Visitors</div>
          </div>
          <div class="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <img :src="people" class="w-10 h-10" />
          </div>
        </div>

        <div class="bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-2xl shadow-lg p-6 flex justify-between items-center transition hover:shadow-2xl">
          <div>
            <div class="text-4xl font-bold mb-2">168</div>
            <div class="text-xl">Borrowed Books</div>
          </div>
          <div class="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <img :src="borrow" class="w-10 h-10" />
          </div>
        </div>

        <div class="bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-2xl shadow-lg p-6 flex justify-between items-center transition hover:shadow-2xl">
          <div>
            <div class="text-4xl font-bold mb-2">5</div>
            <div class="text-xl">Overdue Books</div>
          </div>
          <div class="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <img :src="overdue" class="w-10 h-10" />
          </div>
        </div>

        <div class="bg-gradient-to-r from-pink-400 to-pink-300 text-white rounded-2xl shadow-lg p-6 flex justify-between items-center transition hover:shadow-2xl">
          <div>
            <div class="text-4xl font-bold mb-2">600</div>
            <div class="text-xl">New Members</div>
          </div>
          <div class="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
            <img :src="adduser" class="w-10 h-10" />
          </div>
        </div>

      </div>

      <!-- Chart Section -->
      <div class="mt-12 bg-white rounded-2xl shadow-lg p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Library Overview Chart</h2>
        <BarChart />
      </div>

    </div>
  </div>
</template>
