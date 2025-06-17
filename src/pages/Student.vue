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
  <div class="bg-[#F8F8E1] rounded-2xl shadow -mt-115 ms-70 p-3">
    <div class="w-[63rem] h-auto">
      <div class="w-[90%] mx-auto py-5">
        <h1 class="text-4xl font-bold">Welcome to </h1>
        <h1 class="text-4xl font-bold text-pink-500 ms-56 -mt-10">Students page</h1>
        <p class="text-2xl">jun 11 , 2025 | Wednesday, 8:00 am</p>
      </div>
    </div>
    <router-link to="/add-student"
      class=" hover:bg-pink-800 hover:shadow-2xl"
    >
      <p class="bg-pink-500 rounded-xl w-[20%] px-4 py-2 ms-[750px] font-bold text-center text-white cursor-pointer">+ Add New Student</p>
    </router-link>
    <table class="divide-gray-200 w-[90%] mx-auto mt-5">
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

    <div class="text-right w-[90%] mx-auto bg-white">
      <a
        href="#"
        class="text-pink-400 hover:text-pink-600 text-sm font-semibold mr-2"
        >See All</a
      >
    </div>
  </div>
</template>
