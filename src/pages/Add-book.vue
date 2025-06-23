<script setup>
import layoutdashboard from "../components/layoutdashboard.vue";
import "primeicons/primeicons.css";
</script>

<template>
  <layoutdashboard />
  <div class="bg-[#F8F8E1] rounded-2xl shadow -mt-120 ms-70">
    <div class="w-[63rem] h-140">
      <div class="w-[90%] mx-auto mt-5 py-5 px-30">
        <div class="mb-20">
          <router-link
            to="/book"
            class="px-8 py-2 font-bold bg-pink-500 text-white rounded-sm"
          >
            <i class="pi pi-arrow-left"></i>
            Back
          </router-link>
        </div>

        <div class="flex justify-center mb-10">
          <h1 class="font-bold text-4xl">Add New</h1>
          <h1 class="font-bold text-4xl text-pink-500 ms-2">Book</h1>
        </div>

        <div class="">
          <form action="">
            <div>
              <label for="" class="font-bold text-2xl">Id Book :</label> <br />
              <input
                type="text"
                class="mt-4 border-pink-500 border py-2 px-8 rounded-xl"
                placeholder="Ender Book Id"
              />
            </div>

            <div class="ms-100 -mt-23">
              <label for="" class="font-bold text-2xl">Title :</label> <br />
              <input
                type="text"
                class="mt-4 border-pink-500 border py-2 px-8 rounded-xl"
                placeholder="Ender Book Title"
              />
            </div>

            <div class="mt-6">
              <label for="" class="font-bold text-2xl">Decription :</label>
              <br />
              <textarea
                name=""
                id=""
                class="mt-4 border-pink-500 border py-2 px-8 rounded-xl h-40"
              >
              </textarea>
            </div>

            <div class="ms-100 -mt-53">
              <label for="" class="font-bold text-2xl">Author :</label> <br />
              <input
                type="text"
                class="mt-4 border-pink-500 border py-2 px-8 rounded-xl"
                placeholder="Ender Book Author"
              />
            </div>
          </form>

          <div class="ms-100 text-white mt-6">
            <button class="font-bold px-6 py-2 bg-pink-500 rounded-sm">
              <h1 class="cursor-pointer shadow-2xl">Add book</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
