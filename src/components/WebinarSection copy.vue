<template>
  <section class="webinar-section" id="webinar">
    <div class="container">
      <div class="webinar-content">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Attend our
            <span
              class="bg-gradient-to-r from-[#db4a2b] to-[#ffb1a0] bg-clip-text text-transparent"
            >
              Exclusive
            </span>
            Webinar
          </h1>
          <p class="text-xl text-gray-700 leading-relaxed max-w-lg">
            Got 30mins? That's all it takes to learn how you can
            <span class="font-semibold text-[#db4a2b]">automate your investments</span> for the best
            returns.
          </p>

          <div style="margin-bottom: 2rem">
            <div>
              <h3 class="text-2xl font-bold text-black">Hosted by our CEO</h3>
              <p class="text-lg text-[#db4a2b] font-semibold">Sharique Samsudheen</p>
            </div>

            <ul style="list-style: none; padding: 0">
              <li style="margin-bottom: 0.5rem; color: #000000">✅ 1.5M Subscribers on YouTube</li>
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
              <label for="fullName" class="block text-lg font-semibold text-black">Full Name</label>
              <input
                type="text"
                id="fullName"
                v-model="formData.fullName"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div class="form-group">
              <label for="phone" class="block text-lg font-semibold text-black"
                >WhatsApp Number</label
              >
              <div class="phone-input">
                <input type="text" class="country-code" value="+91" readonly />
                <input
                  type="tel"
                  id="phone"
                  v-model="formData.phone"
                  placeholder="Enter your WhatsApp number"
                  required
                />
              </div>
            </div>

            <div class="form-group">
              <label for="email" class="block text-lg font-semibold text-black"
                >Email Address</label
              >
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div class="form-group">
              <label for="webinarDate" class="block text-lg font-semibold text-black"
                >Date and Language</label
              >
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
              <label for="hearAbout" class="block text-lg font-semibold text-black"
                >How did you hear about our automated trading?</label
              >
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
</template>

<script>
export default {
  name: 'WebinarSection',
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
    }
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.formData)
      // Add your form submission logic here
      alert('Thank you for registering! We will contact you soon.')
    },
  },
}
</script>

<style scoped>
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
  /* background: rgba(255, 255, 255, 0.1); */
  background: #ffb1a0;
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

/* .form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #e5e7eb;
} */

.form-group input,
.form-group select {
  width: 100%;
  padding: 1rem;
  border: 1px solid #000000;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #db4a2b;
  box-shadow: 0 0 0 3px #ee947f;
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
  width: 80px !important;
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

/* Responsive Design */
@media (max-width: 768px) {
  .webinar-content {
    grid-template-columns: 1fr;
  }
}
</style>
