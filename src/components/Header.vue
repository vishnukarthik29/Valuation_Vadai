<template>
  <header class="bg-red-600 border-b border-white/10 sticky top-0 z-50 transition-all duration-300">
    <div class="max-w-screen-xxl px-2 py-2">
      <div class="flex justify-between items-center px-2 py-4 sm:px-0">
        <!-- Logo Section -->
        <div class="flex items-center gap-2 sm:gap-1">
          <router-link to="/">
            <img src="/images/headerlogo.jpg" alt="Logo" class="h-12 sm:h-10" />
          </router-link>
        </div>
        <div class="flex"></div>
        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex gap-8 list-none items-center">
            <li>
              <router-link
                to="/About"
                @click="closeMenu"
                class="block text-gray-100 font-medium px-4 py-3 rounded-l transition-all duration-300 hover:bg-white/10 hover:text-yellow-400"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link to="/Appointment" @click="closeMenu" class="badge">
                <i class="bi bi-telephone-plus-fill"></i> Book a Call
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          style="margin: 15px !important"
          class="md:hidden text-gray-100 hover:text-yellow-400 transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation (Fullscreen + Slide + Blur) -->
    <transition name="slide">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 z-40 bg-[#a5a4a477] top-13 pr-5 backdrop-blur-md md:hidden flex flex-col justify-start px-6 py-10 space-y-4 transition-all duration-300"
      >
        <!-- <button
          @click="closeMenu"
          class="self-end text-gray-100 hover:text-yellow-400 text-4xl md:pr-5"
          style="padding-right: 10px"
        >
          ✕
        </button> -->
        <nav class="mt-2">
          <ul class="flex flex-col gap-4 list-none">
            <li>
              <router-link
                to="/About"
                @click="closeMenu"
                class="block text-gray-100 font-medium text-xl text-center ite px-4 py-2 rounded transition-all duration-300 hover:bg-white/10 hover:text-yellow-400"
              >
                About Us
              </router-link>
            </li>
            <li class="text-center">
              <router-link to="/Appointment" class="badge text-center" @click="closeMenu">
                <i class="bi bi-telephone-plus-fill"></i> Book a Call
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style scoped>
/* Badge styling */
.badge {
  display: inline-block;
  padding: 4px 12px;
  background: #ffb1a0;
  color: #332a2e;
  border-radius: 9999px;
  font-size: 14px;
}

/* Header override */
header {
  background-color: #db4a2b;
  padding: 3px;
}

/* Hover style */
.hover\:text-yellow-400:hover {
  color: #e4a72d;
}

/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0%);
}
.slide-leave-from {
  transform: translateX(0%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>
