<script setup>
import layoutdashboard from '../components/layoutdashboard.vue';
</script>

<template>
  <layoutdashboard />
  <div class="h-26"></div>
  <div class="bg-[#F8F8E1] rounded-2xl shadow ms-70 p-10 max-w-5xl mx-auto">
    <div class="mb-12">
      <router-link
        to="/book"
        class="inline-flex items-center gap-2 px-6 py-2 font-semibold bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition cursor-pointer"
      >
        <i class="pi pi-arrow-left"></i>
        Back
      </router-link>
    </div>

    <div class="flex justify-center mb-12 space-x-2">
      <h1 class="font-extrabold text-4xl text-gray-900">Add New</h1>
      <h1 class="font-extrabold text-4xl text-pink-500">Book</h1>
    </div>

    <form class="space-y-8">

      <div>
        <label for="bookId" class="block text-2xl font-bold text-gray-800 mb-3">
          Book ID:
        </label>
        <input
          id="bookId"
          type="text"
          placeholder="Enter Book ID"
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
      </div>

      <div>
        <label for="title" class="block text-2xl font-bold text-gray-800 mb-3">
          Title:
        </label>
        <input
          id="title"
          type="text"
          placeholder="Enter Book Title"
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
      </div>

      <div>
        <label for="author" class="block text-2xl font-bold text-gray-800 mb-3">
          Author:
        </label>
        <input
          id="author"
          type="text"
          placeholder="Enter Book Author"
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
      </div>

      <div>
        <label for="description" class="block text-2xl font-bold text-gray-800 mb-3">
          Description:
        </label>
        <textarea
          id="description"
          rows="6"
          placeholder="Enter Book Description"
          class="w-full border-2 border-pink-500 rounded-xl px-6 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        ></textarea>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="bg-pink-500 text-white font-bold px-10 py-3 rounded-lg shadow-md hover:bg-pink-600 transition cursor-pointer"
        >
          Add Book
        </button>
      </div>
    </form>
  </div>
</template>
