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
          class="testimonials-swiper"
        >
          <swiper-slide v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="testimonial-card">
              <div class="testimonial-content">
                <div class="testimonial-text">
                  <span class="text-white italic text-lg leading-relaxed font-medium">
                    {{ testimonial.text }}
                  </span>
                </div>
                <div class="testimonial-author">
                  <div class="author-avatar">{{ testimonial.avatar }}</div>
                  <div class="author-info">
                    <h4
                      class="text-white font-bold text-lg mb-1 group-hover:text-gray-800 transition-colors"
                    >
                      {{ testimonial.name }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Custom Navigation Buttons Outside Swiper -->
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
          name: 'Adithya S',
          role: 'Doctor • User since November 2022',
        },
        {
          id: 2,
          text: 'No beating around the bush, just solid, practical insights. One hour flew by!',
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
          text: 'This was my first webinar on fundamental analysis and now I am motivated to learn more!',
          avatar: 'GR',
          name: 'Ganesh R',
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

.swiper-container-wrapper {
  position: relative;
  padding: 2rem 0;
}

.testimonials-swiper {
  padding: 3rem;
}

.testimonials-swiper :deep(.swiper-slide) {
  height: auto;
  display: flex;
}

.testimonial-card {
  background: #332a2e;
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2rem;
  border: 1px solid #db4a2b;
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.testimonial-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.testimonial-text {
  flex: 1;
  margin-bottom: 1rem;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(to right, #fb923c, #f87171);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

/* Custom Navigation Buttons Outside Swiper */
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
.testimonials-swiper :deep(.swiper-button-next),
.testimonials-swiper :deep(.swiper-button-prev) {
  display: none;
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
    padding: 1.5rem;
  }

  .custom-swiper-button-prev,
  .custom-swiper-button-next {
    width: 40px;
    height: 40px;
  }

  .custom-swiper-button-prev {
    left: -20px;
  }

  .custom-swiper-button-next {
    right: -20px;
  }

  .author-avatar {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .custom-swiper-button-prev {
    left: -15px;
  }

  .custom-swiper-button-next {
    right: -15px;
  }
}
</style>
