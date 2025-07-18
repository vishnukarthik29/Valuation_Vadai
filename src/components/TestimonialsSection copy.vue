<template>
  <section class="testimonials">
    <div class="container">
      <h2 class="section-title">Hear it from our users</h2>
      <div class="testimonials-grid">
        <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
          <p class="testimonial-text">{{ testimonial.text }}</p>
          <div class="testimonial-author">
            <div class="author-avatar">{{ testimonial.avatar }}</div>
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TestimonialsSection',
  data() {
    return {
      testimonials: [
        {
          id: 1,
          text: 'I am extremely happy with the service. I have been associated with marketfeed since November 2022 and the consistent returns have been remarkable.',
          avatar: 'DR',
          name: 'Dr. Renjit Mathew Peter',
          role: 'Doctor • User since November 2022',
        },
        {
          id: 2,
          text: 'After my regular investments in stocks, I found consistent opportunities for profits through their automated trading system. Very satisfied with the results.',
          avatar: 'SM',
          name: 'Sachin Muhammad',
          role: 'Executive Director • User since October 2022',
        },
        {
          id: 3,
          text: 'Trust built on transparency. Like any cautious investor new to trading, I was initially skeptical, but their transparent approach won me over.',
          avatar: 'VS',
          name: 'Varsha Satheesh',
          role: 'Life Coach • User since October 2022',
        },
        {
          id: 4,
          text: "Ideal for investors with time constraints. As a PhD student, I don't have time to actively trade, but this automated system works perfectly for me.",
          avatar: 'SK',
          name: 'Salman V K',
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

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 4rem;
  color: #000000;
  font-weight: 800;
  background: #000000;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
}

.testimonial-card {
  background: #ffb1a0;
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.testimonial-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 2rem;
  color: #d1d5db;
  font-size: 1.1rem;
  line-height: 1.7;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.author-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}

.author-info h4 {
  color: #000000;
  margin-bottom: 0.2rem;
  font-size: 1.1rem;
}

.author-info p {
  color: #9ca3af;
  font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
