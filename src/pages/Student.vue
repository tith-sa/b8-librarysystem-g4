<script setup>
import layoutdashboard from "../components/layoutdashboard.vue";
const students = [
  {
    id: "22527-1",
    name: "Chantha Makara",
    books: 50,
    department: "Technology",
  },
  {
    id: "21076-4",
    name: "Phorn Sreypheak",
    books: 20,
    department: "Technology",
  },
  { id: "22288-1", name: "Rith Sophea", books: 15, department: "Technology" },
  { id: "17601-2", name: "Tith Sa", books: "01", department: "Technology" },
];
</script>

<template>
  <layoutdashboard />
  <div class="bg-[#F8F8E1] rounded-2xl shadow -mt-120 ms-70">
    <div class="w-[63rem] h-auto">
      <div class="w-[90%] mx-auto mt-5 py-5">
        <h1 class="text-4xl font-bold">Welcome to Students page</h1>
        <p class="text-2xl">jun 11 , 2025 | Wednesday, 8:00 am</p>
      </div>
    </div>
    <table class="divide-y divide-gray-200 w-[90%] mx-auto mt-5">
      <thead class="bg-white">
        <tr>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            Student ID
          </th>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            Student Name
          </th>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            Book issued
          </th>
          <th class="px-6 py-3 text-left text-sm font-semibold text-gray-900">
            Department
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="student in students" :key="student.id">
          <td class="px-6 py-4 text-sm text-gray-700">{{ student.id }}</td>
          <td class="px-6 py-4 text-sm text-gray-700">{{ student.name }}</td>
          <td class="px-6 py-4 text-sm text-gray-700">{{ student.books }}</td>
          <td class="px-6 py-4 text-sm text-gray-700">
            {{ student.department }}
          </td>
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
</template>
