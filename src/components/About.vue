<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="">
        <!-- <div class="badge">About Valuation and Vadai</div> -->
        <h1>
          Empowering Your
          <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
            >Financial Future</span
          >
        </h1>
        <p>
          We are a team of finance enthusiasts on a mission to make personal finance and investing
          simple, relatable, and accessible. At Valuation & Vadai, we break down complex financial
          concepts into engaging content, from equity research and company analysis to practical
          money tips. With a unique blend of depth, clarity, and local flavor, we aim to empower the
          next generation of investors to make smarter financial decisions.
        </p>
      </div>
    </section>

    <!-- Our Values -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div class="grid-4">
          <div class="card" v-for="value in values" :key="value.id">
            <div class="card-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <!-- <section class="section section-secondary">
      <div class="container">
        <div class="section-title">
          <h2>Meet Our Team</h2>
        </div>

        
        <div class="swiper-container-wrapper">
          <swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :loop="true"
            :pagination="{
              clickable: true,
            }"
            :navigation="{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev',
            }"
            :modules="modules"
            :breakpoints="{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }"
            class="team-swiper"
          >
            <swiper-slide v-for="member in teamMembers" :key="member.id">
              <div class="card team-card">
                <img :src="member.image" :alt="member.name" />
                <h3>{{ member.name }}</h3>
                <p class="role">{{ member.role }}</p>
                <p class="description">{{ member.description }}</p>
              </div>
            </swiper-slide>
          </swiper>

          
          <div class="custom-swiper-button-prev">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
          <div class="custom-swiper-button-next">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  name: 'About',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Navigation, Pagination, Autoplay],
      values: [
        {
          id: 1,
          icon: '🔍',
          title: 'Clarity Over Complexity',
          description:
            'We simplify finance so everyone can understand, apply, and grow confidently.',
        },
        {
          id: 2,
          icon: '🤝',
          title: 'Community-Driven Growth',
          description: 'We grow with our audience, listening, learning, and evolving together.',
        },
        {
          id: 3,
          icon: '📈',
          title: 'Trust-First Advisory',
          description: 'We offer honest, research-backed advice aligned with your financial goals.',
        },
        {
          id: 4,
          icon: '📚',
          title: 'Learning is Lifelong',
          description:
            'Our courses turn complex topics into practical knowledge for every stage of investing.',
        },
      ],
      teamMembers: [
        {
          id: 1,
          name: 'Sivarama',
          role: 'Content Architect',
          description:
            'Shapes financial stories that inform, engage, and resonate with every viewer.',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        },
        {
          id: 2,
          name: 'Pugazharasan P',
          role: 'Community Voice & Brand Face',
          description:
            'Builds deep audience connections through relatable content and trend-savvy communication.',
          image:
            'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
        },
        {
          id: 3,
          name: 'Ganesh Ram',
          role: 'Chief Content Strategist',
          description:
            'Oversees our content vision, ensuring every piece is clear, credible, and impactful.',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        },
        {
          id: 4,
          name: 'Siva Prakash B',
          role: 'Investment Insights Analyst',
          description:
            'Balances deep research with smooth execution across content, advisory, and collaborations.',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        },
        {
          id: 5,
          name: 'Krishna',
          role: 'Research & Operations Lead ',
          description: 'Brings data-driven analysis to power our content and advisory decisions.',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        },
      ],
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Hero Section */
.hero {
  padding: 80px 16px;
  text-align: center;
  background: url('/images/subtle-prism (1).svg');
  /* background-color: #fff1ef; */
}

.badge {
  display: inline-block;
  padding: 4px 12px;
  background: #ffb1a0;
  color: #332a2e;
  border-radius: 16px;
  font-size: 14px;
  margin-bottom: 24px;
}

.hero h1 {
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 24px;
  /* max-width: 768px; */
  margin-left: auto;
  margin-right: auto;
  color: #332a2e;
}

.text-primary {
  color: #db4a2b;
}

.hero p {
  font-size: 1.25rem;
  color: #666;
  max-width: 768px;
  margin: 0 auto;
}

.grid-4 {
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

/* Sections */
.section {
  padding: 64px 16px;
}

.section-secondary {
  /* background: #f2efef; */
  background: #fff1ef;
}

.section-primary {
  background: #db4a2b;
  color: #fff1ef;
}

.section-title {
  text-align: center;
  margin-bottom: 64px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #332a2e;
}

.section-title p {
  font-size: 1.25rem;
  color: #666;
}

.section-primary .section-title h2 {
  color: #fff1ef;
}

.section-primary .section-title p {
  color: rgba(255, 241, 239, 0.8);
}

/* Swiper Styles */
.swiper-container-wrapper {
  position: relative;
  padding: 2rem 0;
}

.team-swiper {
  padding: 3rem;
}

.team-swiper :deep(.swiper-slide) {
  height: auto;
  display: flex;
}

/* Custom Navigation Buttons (Testimonials Style) */
.custom-swiper-button-prev,
.custom-swiper-button-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #ffb1a0;
  border: 2px solid #db4a2b;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #db4a2b;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.custom-swiper-button-prev {
  left: -75px;
}

.custom-swiper-button-next {
  right: -75px;
}

.custom-swiper-button-prev:hover,
.custom-swiper-button-next:hover {
  background: #db4a2b;
  color: white;
  transform: translateY(-50%) scale(1.1);
}

/* Hide default Swiper navigation buttons */
.team-swiper :deep(.swiper-button-next),
.team-swiper :deep(.swiper-button-prev) {
  display: none;
}

/* Custom Pagination Styling */
:deep(.swiper-pagination) {
  bottom: 20px !important;
}

:deep(.swiper-pagination-bullet) {
  background: rgba(219, 74, 43, 0.3);
  width: 12px;
  height: 12px;
}

:deep(.swiper-pagination-bullet-active) {
  background: #db4a2b;
  transform: scale(1.2);
}

/* Cards */
.card {
  background: white;
  border: 1px solid #ffded7;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 48px;
  height: 48px;
  background: rgba(219, 74, 43, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: #db4a2b;
  font-size: 24px;
}

.card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #332a2e;
}

.card p {
  color: #666;
}

/* Team Cards */
.team-card img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 16px;
}

.team-card .role {
  color: #db4a2b;
  font-weight: 500;
}

.team-card .description {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 3rem;
  }

  .swiper-container-wrapper {
    margin: 0 -16px;
    padding: 0 16px;
  }

  .custom-swiper-button-prev {
    left: -15px;
  }

  .custom-swiper-button-next {
    right: -15px;
  }

  .team-card {
    padding: 1.5rem;
  }
}
</style>
