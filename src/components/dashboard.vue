<script setup>
    import home1 from '../assets/home(1).png'
    import student1 from '../assets/student.png'
    import book from '../assets/book.png'
</script>

<template>

    <div class=" w-1/3 h-[30rem] bg-[#F8F8E1] rounded-b-2xl shadow ">
        <div class="flex justify-center">
             <h1 class="text-5xl font-bold mt-4">LMS</h1>
        </div>
        <div class="flex justify-between gap-16">         
            <nav class="space-x-4 mb-6 ">
            <router-link to="/home" class="w-96 px-3.5 py-2 relative rounded-xl inline-flex justify-start items-center gap-2.5 hover:bg-[#CFCECE]">
                <img class="w-10 h-10" :src="home1" />
                <div class="w-64 h-12 left-0 top-3.5 absolute text-center justify-center text-black text-3xl font-medium">Home</div>
            </router-link>
            <router-link to="/student" class="w-96 px-3.5 py-2 relative rounded-xl inline-flex justify-start items-center gap-2.5 hover:bg-[#CFCECE]">
                <img class="w-10 h-10" :src="student1" />
                <div class="w-64 h-12 left-4 top-3.5 absolute text-center justify-center text-black text-3xl font-medium">Student</div>
            </router-link>
            <router-link to="/book" class="w-96 px-3.5 py-2 relative rounded-xl inline-flex justify-start items-center gap-2.5 hover:bg-[#CFCECE]">
                <img class="w-10 h-10" :src="book" />
                <div class="w-64 h-12 left-0 top-3.5 absolute text-center justify-center text-black text-3xl font-medium">book</div>
            </router-link>
            </nav>
            <router-view />
        </div>
   </div>
   
</template>
