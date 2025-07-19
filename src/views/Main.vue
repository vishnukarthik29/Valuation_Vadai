<template>
  <div id="app">
    <!-- Animated Background -->
    <!-- <div class="bg-animation"></div> -->

    <!-- Navigation Component -->
    <HeaderNav />
    <RouterView></RouterView>
    <!-- Footer Component -->
    <FooterSection />
  </div>
</template>

<script>
import HeaderNav from '@/components/Header.vue'

import FooterSection from '@/components/Footer.vue'

export default {
  components: {
    HeaderNav,
    FooterSection,
  },
}
</script>

<style>
* {
  /* margin: 0; */
  padding: 0;
  box-sizing: border-box;
}

/* body {
  font-family:
    'SF Pro Display',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    sans-serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffb1a0;
  overflow-x: hidden;
} */

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Animated Background */
.bg-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background:
    radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, #10b9811a 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  animation: bgMove 20s ease-in-out infinite;
}

@keyframes bgMove {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-20px) translateY(-10px);
  }
  50% {
    transform: translateX(20px) translateY(-20px);
  }
  75% {
    transform: translateX(-10px) translateY(10px);
  }
}

/* Global Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
