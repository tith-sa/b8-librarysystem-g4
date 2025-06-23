<template>
  <header class="w-full bg-[#F8F8E1] shadow-md py-3 px-6 fixed">
    <div class="flex justify-between items-center max-w-[1200px] mx-auto">

      <div class="flex items-center gap-4">
        <img class="w-16 h-16 object-contain" :src="logo" alt="Logo" />
        <h1 class="text-xl font-bold text-gray-800">Library System</h1>
      </div>


      <div class="relative flex items-center gap-4">

        <div class="text-right">
          <h2 class="text-md font-semibold text-gray-800">Chantha Makara</h2>
          <p class="text-sm text-gray-500">Librarian</p>
        </div>

  
        <div class="relative">
          <img
            :src="makara"
            alt="User Avatar"
            class="w-14 h-14 rounded-full shadow-lg border-2 border-pink-400 object-cover cursor-pointer"
            @click="toggleDropdown"
          />


          <transition name="fade">
            <div
              v-if="dropdownOpen"
              ref="dropdown"
              class="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg z-50"
            >
              <ul class="py-2 text-sm text-gray-700">
    
                <li>
                  <button
                    @click="logout"
                    class="w-full text-left px-4 py-2 hover:bg-gray-100 transition text-red-500 cursor-pointer"
                  >
                     Logout
                  </button>
                </li>

              </ul>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo.png'
import makara from '../assets/makara.png'

const router = useRouter()
const dropdownOpen = ref(false)
const dropdown = ref(null)

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const logout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}


const handleClickOutside = (event) => {
  if (dropdown.value && !dropdown.value.contains(event.target)) {
    dropdownOpen.value = false
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
