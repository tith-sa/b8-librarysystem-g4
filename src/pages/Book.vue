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
        <button class="bg-[#FF90BB] text-white font-bold py-2 px-4 rounded">
          Add New Book
        </button>
      </div>

      <!-- Table container filling full width of parent -->
      <div class="w-full mt-5 p-4 bg-white rounded-2xl">
        <table class="w-full text-left border-collapse text-lg">
          <thead class="bg-gray-100 font-bold border-b text-center p-4">
            <tr>
              <th class="py-3 px-4 w-1/3">Book ID</th>
              <th class="px-3 w-1/3">Book Title</th>
              <th class="px-3 w-1/3">Incoming Books</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="book in books"
              :key="book.id"
              class="border-b text-center"
            >
              <td class="py-2 px-4">{{ book.id }}</td>
              <td class="px-4">{{ book.title }}</td>
              <td class="px-4">{{ book.count }}</td>
            </tr>
          </tbody>
        </table>
        <p class="text-[#FF90BB] text-right mt-2">See all</p>
      </div>
    </div>
  </div>
</template>
