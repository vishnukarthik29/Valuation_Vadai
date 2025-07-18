<template>
  <div class="landing-page">
    <!-- Animated Background -->
    <div class="bg-animation"></div>

    <!-- Header -->
    <header>
      <div class="container">
        <div class="header-content">
          <div class="logo-section">
            <img src="/images/headerlogo.jpg" alt="Logo" style="height: 50px" />
          </div>
          <nav>
            <ul class="nav-menu">
              <li><a href="#about">About Us</a></li>
              <li>
                <a href="#webinar"><i class="bi bi-telephone-plus-fill"></i> Schedule the Call</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <!-- Webinar Section -->
    <section class="webinar-section" id="webinar">
      <div class="container">
        <div class="webinar-content">
          <div>
            <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem; color: #000000">
              Attend our Exclusive Webinar
            </h2>
            <p style="font-size: 1.2rem; margin-bottom: 2rem; opacity: 0.9; color: #000000">
              Got 30mins? That's all it takes to learn how you can automate your investments for the
              best returns.
            </p>

            <div style="margin-bottom: 2rem">
              <h3 style="margin-bottom: 1rem; color: #000000">
                Hosted by our CEO, Sharique Samsudheen
              </h3>
              <ul style="list-style: none; padding: 0">
                <li style="margin-bottom: 0.5rem; color: #000000">
                  ✅ 1.5M Subscribers on YouTube
                </li>
                <li style="margin-bottom: 0.5rem; color: #000000">
                  ✅ 8 Years of Trading Experience
                </li>
                <li style="margin-bottom: 0.5rem; color: #000000">✅ TedX Speaker</li>
                <li style="margin-bottom: 0.5rem; color: #000000">
                  ✅ Live & Interactive - Ask us anything!
                </li>
              </ul>
            </div>
          </div>

          <div class="webinar-form">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="fullName" style="color: #000000">Full Name</label>
                <input
                  style="color: #000000"
                  type="text"
                  id="fullName"
                  v-model="formData.fullName"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone" style="color: #000000">WhatsApp Number</label>
                <div class="phone-input">
                  <input
                    style="color: #000000"
                    type="text"
                    class="country-code"
                    value="+91"
                    readonly
                  />
                  <input
                    style="color: #000000"
                    type="tel"
                    id="phone"
                    v-model="formData.phone"
                    placeholder="Enter your WhatsApp number"
                    required
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="email" style="color: #000000">Email Address</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div class="form-group">
                <label for="webinarDate" style="color: #000000">Date and Language</label>
                <select id="webinarDate" v-model="formData.webinarDate" required>
                  <option style="color: #000000" value="">Select Date and Language</option>
                  <option style="color: #000000" value="jul23-english">
                    Jul 23 | 07:00 PM | English
                  </option>
                  <option style="color: #000000" value="jul24-hindi">
                    Jul 24 | 07:00 PM | Hindi
                  </option>
                  <option style="color: #000000" value="jul25-english">
                    Jul 25 | 07:00 PM | English
                  </option>
                </select>
              </div>

              <div class="form-group">
                <label for="hearAbout">How did you hear about our automated trading?</label>
                <select id="hearAbout" v-model="formData.hearAbout" required>
                  <option value="">Select an option</option>
                  <option style="color: #000000" value="youtube">YouTube</option>
                  <option style="color: #000000" value="social-media">Social Media</option>
                  <option style="color: #000000" value="friend">Friend/Family</option>
                  <option style="color: #000000" value="google">Google Search</option>
                  <option style="color: #000000" value="other">Other</option>
                </select>
              </div>

              <div class="checkbox-group">
                <input type="checkbox" id="terms" v-model="formData.terms" required />
                <label for="terms">By signing up, you agree to our Terms & Conditions</label>
              </div>

              <button style="color: #000000" type="submit" class="webinar-cta">
                Join Free Webinar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
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

    <!-- FAQ Section -->
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

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#webinar">Join Free Webinar</a></li>
              <li><a href="#">Our Blogs</a></li>
              <li><a href="#">YouTube</a></li>
              <li><a href="#">Download App</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ValuationVadaiLanding',
  data() {
    return {
      formData: {
        fullName: '',
        phone: '',
        email: '',
        webinarDate: '',
        hearAbout: '',
        terms: false,
      },
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
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.formData)
      // Add your form submission logic here
      alert('Thank you for registering! We will contact you soon.')
    },
    toggleFAQ(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
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
}

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

/* Header */
header {
  background: #db4a2b;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
}

.nav-menu a {
  text-decoration: none;
  color: #f2efef;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-menu a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #e4a72d;
  transform: translateY(-2px);
}

/* Webinar Section */
.webinar-section {
  background: #f2efef;
  color: white;
  padding: 6rem 0;
  position: relative;
}

.webinar-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.webinar-form {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
}

.form-group {
  margin-bottom: 2rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #e5e7eb;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #60a5fa;
  box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
  transform: translateY(-2px);
}

.form-group input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.phone-input {
  display: flex;
  gap: 0.5rem;
}

.country-code {
  width: 80px;
  flex-shrink: 0;
}

.checkbox-group {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.checkbox-group input[type='checkbox'] {
  width: auto;
  margin-top: 0.2rem;
  accent-color: #db4a2b;
}

.checkbox-group label {
  margin-bottom: 0;
  font-size: 0.9rem;
  line-height: 1.4;
}

.webinar-cta {
  background: linear-gradient(135deg, #db4a2b 0%, #ffb1a0 50%, #db4a2b 100%);
  color: #000000;
  padding: 1.2rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.webinar-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px #f77b064d;
}

/* Testimonials */
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

/* FAQ Section */
.faq {
  padding: 6rem 0;
  background: white;
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

/* Footer */
footer {
  background: white;
  color: white;
  padding: 4rem 0 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section h3 {
  margin-bottom: 1.5rem;
  color: #000000;
  font-size: 1.2rem;
}

.footer-section ul {
  list-style: none;
}

.footer-section li {
  margin-bottom: 0.8rem;
}

.footer-section a {
  color: #d1d5db;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer-section a:hover {
  color: #60a5fa;
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .webinar-content {
    grid-template-columns: 1fr;
  }

  .nav-menu {
    display: none;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
