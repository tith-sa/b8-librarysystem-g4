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
      <p class="text-[40px] font-bold indent-8 mt-4">
        Welcome,
        <a class="text-[#FF90BB]">internet</a>
      </p>
      <p class="indent-8">jun 11 , 2025 I Wednesday, 8:00 am</p>
      <!-- Button aligned to the right -->
      <div class="flex justify-end pr-8 mt-10">
        <button
          class="hover:bg-[#FF90BB] bg-pink-600 hover:shadow-2xl text-white font-bold py-2 px-4 rounded"
        >
          Add New Book
        </button>
      </div>

      <!-- Table container filling full width of parent -->

      <table class="divide-y divide-gray-200 w-[90%] mx-auto mt-5">
        <thead class="bg-white">
          <tr>
            <th class="py-3 px-4 w-1/3">Book ID</th>
            <th class="px-3 w-1/3">Book Title</th>
            <th class="px-3 w-1/3">Incoming Books</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="book in books" :key="book.id" class="text-center bg-white">
            <td class="py-2 px-4">{{ book.id }}</td>
            <td class="px-4">{{ book.title }}</td>
            <td class="px-4">{{ book.count }}</td>
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
