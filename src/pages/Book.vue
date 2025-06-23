<script setup>
import layoutdashboard from "../components/layoutdashboard.vue";
const books = [
  { id: "22527-1", title: "Grumpy Darling", count: 50 },
  { id: "21076-4", title: "The Eye of the World", count: 20 },
  { id: "22288-1", title: "Das Auge der Welt", count: 15 },
  { id: "17601-2", title: "L'oeil du monde", count: 1 },
];
</script>

<template>
  <layoutdashboard />
  <div class="bg-[#F8F8E1] rounded-2xl shadow -mt-120 ms-70">
    <div class="w-[63rem] h-auto">
      <div class="w-[90%] mx-auto py-5">
        <h1 class="text-4xl font-bold">Welcome to</h1>
        <h1 class="text-4xl font-bold text-pink-500 ms-56 -mt-10">Book page</h1>
        <p class="text-2xl">jun 11 , 2025 | Wednesday, 8:00 am</p>
      </div>
      <!-- Button aligned to the right -->
      <router-link to="/Add-book" class="hover:bg-pink-800 hover:shadow-2xl">
        <p
          class="bg-pink-500 rounded-xl w-[20%] px-4 py-2 ms-[750px] font-bold text-center text-white cursor-pointer"
        >
          + Add New Book
        </p>
      </router-link>

      <!-- Table container filling full width of parent -->

      <table class="divide-y divide-gray-200 w-[90%] mx-auto mt-5">
        <thead class="bg-white">
          <tr>
            <th class="px-6 py-3 text-sm font-semibold text-gray-900">
              Book ID
            </th>
            <th class="px-6 py-3 text-sm font-semibold text-gray-900">
              Book Title
            </th>
            <th class="px-6 py-3 text-sm font-semibold text-gray-900">
              Incoming Books
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="book in books" :key="book.id" class="text-center bg-white">
            <td class="px-6 py-4 text-sm text-gray-700">{{ book.id }}</td>
            <td class="px-6 py-4 text-sm text-gray-700">{{ book.title }}</td>
            <td class="px-6 py-4 text-sm text-gray-700">{{ book.count }}</td>
          </tr>
        </tbody>
      </table>
      <div class="text-right mt-4 w-[90%] mx-auto">
        <a
          href="#"
          class="text-pink-400 hover:text-pink-600 text-sm font-semibold"
          >See All</a
        >
      </div>
    </div>
  </div>
</template>
