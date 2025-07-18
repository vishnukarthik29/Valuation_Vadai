<template>
  <section class="faq">
    <div class="container">
      <h2 class="section-title">Frequently Asked Questions</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item">
        <button class="faq-question" @click="toggleFAQ(index)">
          {{ faq.question }}
          <span>{{ faq.isOpen ? '-' : '+' }}</span>
        </button>
        <div class="faq-answer" :class="{ show: faq.isOpen }">
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FaqSection',
  data() {
    return {
      faqs: [
        {
          question: 'What is marketfeed?',
          answer:
            "marketfeed helps you unlock two returns from a single investment by combining steady investing with automated trading - all from your own broker's account (IIFL Capital). To get started, sign up for our upcoming webinar!",
          isOpen: false,
        },
        {
          question: 'What is the minimum capital to start trading?',
          answer:
            'The minimum capital required to start automated trading with marketfeed is ₹4.4 lakhs. This ensures you get significant returns even after deducting charges, making it a worthwhile investment.',
          isOpen: false,
        },
        {
          question: 'Are the returns guaranteed? Is there any risk to my capital?',
          answer:
            'Like all investments, automated trading involves market risks and returns are not guaranteed. However, our SEBI-registered research analysts design strategies to minimize risks through diversification across debt and derivatives.',
          isOpen: false,
        },
        {
          question: 'Where are my funds held?',
          answer:
            'Your funds are held in your own IIFL Capital demat account. marketfeed never holds your capital - we only execute trades on your behalf with your authorization.',
          isOpen: false,
        },
        {
          question: 'Can I pause or stop trading at any time?',
          answer:
            'Yes, you have complete control over your investments. You can pause or stop automated trading at any time without any penalties or lock-in periods.',
          isOpen: false,
        },
      ],
    }
  },
  methods: {
    toggleFAQ(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    },
  },
}
</script>

<style scoped>
.faq {
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

.faq-item {
  background: #ffb1a0;
  backdrop-filter: blur(20px);
  border-radius: 16px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.faq-question {
  padding: 2rem;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  color: #000000;
}

.faq-question:hover {
  color: #60a5fa;
}

.faq-answer {
  padding: 0 2rem 2rem;
  color: #d1d5db;
  line-height: 1.7;
  display: none;
  font-size: 1.1rem;
}

.faq-answer.show {
  display: block;
  animation: fadeIn 0.3s ease;
}

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
