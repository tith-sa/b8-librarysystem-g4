<template>
  <div class="bg-[#F8F8E1] min-h-screen p-10">
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow p-8">
      <h1 class="text-3xl font-bold mb-6 text-center text-pink-500">Edit Student</h1>

      <form @submit.prevent="updateStudent">
        <div class="mb-4">
          <label class="block mb-1 font-semibold">Full Name</label>
          <input
            v-model="student.full_name"
            type="text"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div class="mb-4">
          <label class="block mb-1 font-semibold">ID Card</label>
          <input
            v-model="student.id_card"
            type="text"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div class="mb-6">
          <label class="block mb-1 font-semibold">Class</label>
          <input
            v-model="student.class"
            type="text"
            class="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
            required
          />
        </div>

        <div class="flex justify-between">
          <button
            type="submit"
            class="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded shadow"
          >
            Update
          </button>
          <router-link
            to="/student"
            class="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded shadow"
          >
            Cancel
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const token = localStorage.getItem("token");

const studentId = route.params.id;
const student = ref({
  full_name: "",
  id_card: "",
  class: "",
});

const fetchStudent = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${studentId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) throw new Error("Failed to fetch student");
    const data = await res.json();
    student.value = data;
  } catch (error) {
    console.error(error);
    alert("Failed to load student data.");
  }
};

const updateStudent = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/students/${studentId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student.value),
    });

    const responseText = await res.text();
    console.log("Server response:", responseText);

    if (!res.ok) throw new Error("Update failed");

    alert("Student updated successfully!");
    router.push("/students");
  } catch (error) {
    console.error(error);
    alert("Error updating student.");
  }
};

onMounted(fetchStudent);
</script>
