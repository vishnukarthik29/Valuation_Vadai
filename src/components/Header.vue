<template>
  <header
    class="bg-red-600 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50 transition-all duration-300"
  >
    <div class="w-full max-w-screen-xxl mx-auto px-2 py-2 sm:px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo Section -->
        <div class="flex items-center gap-2">
          <a href="/Valuation_Vadai/">
            <img src="/images/headerlogo.jpg" alt="Logo" class="h-12" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex gap-8 list-none items-center">
            <li>
              <router-link
                to="/About"
                @click="closeMenu"
                class="block text-gray-100 font-medium px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-yellow-400"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/Blog"
                @click="closeMenu"
                class="block text-gray-100 font-medium px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-yellow-400"
              >
                Blog
              </router-link>
            </li>
            <li>
              <router-link to="/Appointment" class="badge">
                <i class="bi bi-telephone-plus-fill"></i> Schedule the Call
              </router-link>
            </li>
          </ul>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
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

      <!-- Mobile Navigation -->
      <div v-if="isMenuOpen" class="md:hidden border-t border-white/10 py-4">
        <nav>
          <ul class="flex flex-col gap-2 list-none">
            <li>
              <router-link
                to="/About"
                @click="closeMenu"
                class="block text-gray-100 font-medium px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-yellow-400"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/Blog"
                @click="closeMenu"
                class="block text-gray-100 font-medium px-4 py-3 rounded-xl transition-all duration-300 hover:bg-white/10 hover:text-yellow-400"
              >
                Blog
              </router-link>
            </li>

            <li>
              <router-link to="/Appointment" class="badge">
                <i class="bi bi-telephone-plus-fill"></i> Schedule the Call
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
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
.badge {
  display: inline-block;
  padding: 4px 12px;
  background: #ffb1a0;
  color: #332a2e;
  border-radius: 9999px; /* makes it pill-shaped */
  font-size: 14px;
  /* margin-bottom: 24px; */
}
/* Custom styles for the exact red color from original */
header {
  background-color: #db4a2b;
  padding: 5px;
}

/* Custom yellow color for hover states */
.hover\:text-yellow-400:hover {
  color: #e4a72d;
}
</style>
