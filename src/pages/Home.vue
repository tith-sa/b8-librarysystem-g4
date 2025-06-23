<script setup>
import layoutdashboard from '../components/layoutdashboard.vue';
import people from '../assets/people.png'
import borrow from '../assets/borrow.png'
import overdue from '../assets/overdue.png'
import adduser from '../assets/add-user.png'


</script>

<template>
  <layoutdashboard />
  <div class="bg-[#F8F8E1] rounded-2xl shadow -mt-120 ms-70">
    <div class="w-[63rem] h-auto">
      <p class="text-[40px] font-bold indent-8 mt-4">
        Welcome,
        <a class="text-[#FF90BB]">Home page</a>
      </p>
      <p class="indent-8">jun 11 , 2025 I Wednesday, 8:00 am</p>

      <div class="w-full mx-auto mt-5 flex justify-center gap-20 flex-wrap">

        <div class="w-96 h-36 px-5 py-2.5 bg-pink-400 rounded-xl shadow-2xl inline-flex justify-start items-start gap-24">
            <div class="w-44 h-28 inline-flex flex-col justify-start items-start gap-12">
                <div class=" text-white justify-center text-4xl font-medium leading-10">1234</div>
                <div class=" text-white justify-center text-2xl font-medium ">Total Visitors</div>
            </div>
            <div class="w-14 h-14 relative overflow-hidden">
                <img class="w-14 h-14 left-0 top-0 absolute" :src="people" />
            </div>
        </div>

        <div class="w-96 h-36 px-5 py-2.5 bg-pink-400 rounded-xl shadow-2xl inline-flex justify-start items-start gap-24">
            <div class="w-44 h-28 inline-flex flex-col justify-start items-start gap-12">
                <div class=" text-white justify-center text-4xl font-medium leading-10">168</div>
                <div class=" text-white justify-center text-2xl font-medium ">Borrowed Book</div>
            </div>
            <div class="w-14 h-14 relative overflow-hidden">
                <img class="w-14 h-14 left-0 top-0 absolute" :src="borrow" />
            </div>
        </div>

        <div class="w-96 h-36 px-5 py-2.5 bg-pink-400 rounded-xl shadow-2xl inline-flex justify-start items-start gap-24">
            <div class="w-44 h-28 inline-flex flex-col justify-start items-start gap-12">
                <div class=" text-white justify-center text-4xl font-medium leading-10">5</div>
                <div class=" text-white justify-center text-2xl font-medium ">Overdue Book</div>
            </div>
            <div class="w-14 h-14 relative overflow-hidden">
                <img class="w-14 h-14 left-0 top-0 absolute" :src="overdue" />
            </div>
        </div>

        <div class="w-96 h-36 px-5 py-2.5 bg-pink-400 rounded-xl shadow-2xl inline-flex justify-start items-start gap-24">
            <div class="w-44 h-28 inline-flex flex-col justify-start items-start gap-12">
                <div class=" text-white justify-center text-4xl font-medium leading-10">600</div>
                <div class=" text-white justify-center text-2xl font-medium ">New Members</div>
            </div>
            <div class="w-14 h-14 relative overflow-hidden">
                <img class="w-14 h-14 left-0 top-0 absolute" :src="adduser" />
            </div>
        </div>

      </div>




    </div>
  </div>
</template>

