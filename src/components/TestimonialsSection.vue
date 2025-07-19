<template>
  <section class="testimonials" id="testimonials">
    <div class="container">
      <h2 class="text-5xl md:text-6xl font-black text-black mb-4 tracking-tight text-center">
        Our
        <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Community
        </span>
        Speaks
      </h2>
      <br />

      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :loop="true"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        :breakpoints="{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
        class="testimonials-swiper"
      >
        <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="testimonial-card">
            <div class="">
              <div class="top-6 left-6 text-white/30 text-4xl font-serif">
                "
                <span class="text-white italic mb-8 text-lg leading-relaxed font-medium">
                  {{ testimonial.text }}
                </span>
                <div class="top-6 right-6 text-white/30 text-4xl font-serif">"</div>
              </div>
              <div class="testimonial-author">
                <div class="author-avatar">{{ testimonial.avatar }}</div>
                <div class="author-info">
                  <h4
                    class="text-white font-bold text-lg mb-1 group-hover:text-gray-800 transition-colors underline"
                  >
                    {{ testimonial.name }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Pagination, Navigation } from 'swiper/modules'

export default {
  name: 'TestimonialsSection',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    }
  },
  data() {
    return {
      testimonials: [
        {
          id: 1,
          text: 'The session was super clear and beginner-friendly. I finally understand how to analyse a company!',
          avatar: 'AS',
          name: 'Adithya Shankar',
          role: 'Doctor • User since November 2022',
        },
        {
          id: 2,
          text: 'No fluff, just solid, practical insights. One hour flew by!',
          avatar: 'RK',
          name: 'Ragul K',
          role: 'Executive Director • User since October 2022',
        },
        {
          id: 3,
          text: "I've attended many webinars, but this one actually delivered value. The examples were relatable and easy to follow.",
          avatar: 'SR',
          name: 'Sanjay R',
          role: 'Life Coach • User since October 2022',
        },
        {
          id: 4,
          text: 'Loved how interactive it was! Got my questions answered live, and the bonus resources were gold.',
          avatar: 'DR',
          name: 'Deepak R',
          role: 'PhD Student • User since September 2022',
        },
        {
          id: 5,
          text: 'Simple explanations for complex topics. Perfect for someone just starting out in finance.',
          avatar: 'VK',
          name: 'Vishnu K',
          role: 'PhD Student • User since September 2022',
        },
        {
          id: 6,
          text: 'The speakers broke it down so well. I now have a solid foundation to build on.',
          avatar: 'RS',
          name: 'Regina S',
          role: 'PhD Student • User since September 2022',
        },
        {
          id: 7,
          text: 'This was my first webinar on personal finance and now I am motivated to fix my money habits!',
          avatar: 'CR',
          name: 'Cristina R',
          role: 'PhD Student • User since September 2022',
        },
      ],
    }
  },
}
</script>

<style scoped>
.testimonials {
  padding: 6rem 0;
  background: white;
}

.testimonials-swiper {
  padding: 2rem 0;
}

.testimonials-swiper :deep(.swiper-slide) {
  height: auto;
  display: flex;
}

.testimonial-card {
  background: #332a2e;
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid #db4a2b;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-height: 280px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  /* background: linear-gradient(135deg, #667eea, #764ba2); */
  background: linear-gradient(to right, #fb923c, #f87171);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

/* Custom Swiper Styles */
.testimonials-swiper :deep(.swiper-button-next),
.testimonials-swiper :deep(.swiper-button-prev) {
  background: #ffb1a0;
  border: 2px solid #db4a2b;
  border-radius: 50%;
  width: 50px !important;
  height: 50px !important;
  margin-top: -25px;
  color: #db4a2b;
  font-weight: bold;
}

.testimonials-swiper :deep(.swiper-button-next):hover,
.testimonials-swiper :deep(.swiper-button-prev):hover {
  background: #db4a2b;
  color: white;
  transform: scale(1.1);
}

.testimonials-swiper :deep(.swiper-button-next:after),
.testimonials-swiper :deep(.swiper-button-prev:after) {
  font-size: 16px;
}

.testimonials-swiper :deep(.swiper-pagination-bullet) {
  background: rgba(219, 74, 43, 0.3);
  width: 12px;
  height: 12px;
}

.testimonials-swiper :deep(.swiper-pagination-bullet-active) {
  background: #db4a2b;
  transform: scale(1.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .testimonial-card {
    padding: 2rem;
  }

  .testimonials-swiper :deep(.swiper-button-next),
  .testimonials-swiper :deep(.swiper-button-prev) {
    width: 40px !important;
    height: 40px !important;
    margin-top: -20px;
  }
}
</style>
