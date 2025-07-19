<template>
  <section class="webinar-section" id="webinar">
    <div class="container">
      <div class="webinar-content">
        <div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
            Attend our
            <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Exclusive
            </span>
            Webinar
          </h1>
          <div
            v-if="formData.webinarType === 'fundamental'"
            class="text-gray-700 text-base leading-relaxed mt-6"
          >
            <p class="font-semibold">
              Decode the Stock Market – A Beginner’s Guide to Fundamental Analysis
            </p>
            <p>Stop guessing the market. Start understanding it.</p>
            <p class="">
              Join our FREE 60-minute webinar and learn how to pick quality stocks using real data –
              not hype.
            </p>
            <p class="font-semibold mt-2">What You will Learn:</p>
            <ul class="list-disc list-inside ml-2">
              <li>✅ What is Fundamental Analysis – and why it works</li>
              <li>✅ How to read financial statements like a pro</li>
              <li>✅ Key ratios that reveal the real health of a company</li>
              <li>✅ Valuation basics – understanding Intrinsic Value</li>
              <li>✅ Common mistakes beginners make (and how to avoid them)</li>
            </ul>
            <p class="mt-2 font-semibold">👉 Reserve Your Spot – Limited Seats!</p>
          </div>

          <div v-else class="text-gray-700 text-base leading-relaxed mt-4">
            <p class="font-semibold">Money Mastery 101 – Build Your Personal Finance Foundation</p>
            <p>Your salary does not make you rich. Your habits do.</p>
            <p class="">
              In this FREE 60-minute webinar, learn the money skills your school never taught you.
            </p>
            <p class="font-semibold mt-2">What You will Learn:</p>
            <ul class="list-disc list-inside ml-2">
              <li>✅ How to set smart financial goals</li>
              <li>✅ Budgeting hacks to control your money (without guilt)</li>
              <li>✅ The 50/30/20 rule – how to use it right</li>
              <li>✅ Building an emergency fund – the smart way</li>
              <li>✅ Basics of saving, investing, and protecting your income</li>
              <li>✅ Psychology of money – build habits that stick</li>
            </ul>
            <p class="mt-2 font-semibold">👉 Join Now – Seats Are Filling Fast!</p>
          </div>

          <div style="margin-bottom: 2rem"></div>
        </div>

        <div class="webinar-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <!-- <label for="fullName" class="block text-lg font-semibold text-black">Full Name</label> -->
              <input
                type="text"
                id="fullName"
                v-model="formData.fullName"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div class="form-group">
              <!-- <label for="phone" class="block text-lg font-semibold text-black"
                >WhatsApp Number</label
              > -->
              <div class="phone-input">
                <input type="text" class="country-code" value="+91" readonly />
                <div class="relative w-full">
                  <i
                    class="bi bi-whatsapp text-green-500 absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"
                  ></i>
                  <input
                    type="tel"
                    v-model="formData.phone"
                    placeholder="Enter your WhatsApp number"
                    class="w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    style="padding-left: 40px"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <!-- <label for="email" class="block text-lg font-semibold text-black"
                >Email Address</label
              > -->
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div class="form-group">
              <label for="webinarType" class="block text-lg font-semibold text-black"
                >Webinar Type</label
              >
              <select id="webinarType" v-model="formData.webinarType" required>
                <option style="color: #000000" value="fundamental">Fundamental Analysis</option>
                <option style="color: #000000" value="money">Money Mastery 101</option>
              </select>
            </div>

            <div class="form-group">
              <label for="webinarDate" class="block text-lg font-semibold text-black"
                >Date and Time</label
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
                >How did you hear about us?</label
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

            <!-- <div class="checkbox-group">
              <input type="checkbox" id="terms" v-model="formData.terms" required />
              <label class="terms" for="terms"
                >By signing up, you agree to our Terms & Conditions</label
              >
            </div> -->

            <button style="color: #ffffff; background: #df4a2f" type="submit" class="webinar-cta">
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
        webinarType: 'fundamental', // default
        webinarDate: '',
        hearAbout: '',
        // terms: false,
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
  /* background: #f2efef; */
  background: url('/images/subtle-prism (1).svg');
  color: white;
  padding: 3rem 0;
  position: relative;
}
.container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  /* border: 1px solid rgba(255, 255, 255, 0.2); */
}

.webinar-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  /* align-items: center; */
  position: relative;
  z-index: 2;
}

.webinar-form {
  background: linear-gradient(to bottom left, #db4b2b34, #ffb1a021);
  backdrop-filter: blur(30px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.541);
  position: relative;
  overflow: hidden;
  /* box-shadow: 0 8px 30px #db4b2b8f; */
}

.form-group {
  margin-bottom: 2rem;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 1rem;
  border: 1px solid #000000;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  color: black;
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
  color: black;
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
.terms {
  color: #000000;
}

/* Responsive Design */
@media (max-width: 768px) {
  .webinar-content {
    grid-template-columns: 1fr;
  }
}
</style>
