<template>
  <section class="webinar-section" id="webinar">
    <div class="container">
      <div class="webinar-content">
        <div>
          <h1
            class="text-5xl md:text-4xl lg:text-6xl font-bold text-black leading-tight text-center md:text-left"
          >
            Attend our
            <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Exclusive
            </span>
            Webinar
          </h1>
          <div
            v-if="formData.webinarType === 'Fundamental Analysis'"
            class="text-gray-700 text-base leading-relaxed mt-6"
          >
            <p class="font-semibold">
              Decode the Stock Market – A Beginner's Guide to Fundamental Analysis
            </p>
            <p>Stop guessing the market. Start understanding it.</p>
            <p class="">
              Join our FREE 60-minute webinar and learn how to pick quality stocks using real data –
              not hype.
            </p>
            <p class="font-semibold mt-2">What You will Learn:</p>
            <ul class="list-disc list-inside ml-2">
              <li>What is Fundamental Analysis – and why it works</li>
              <li>How to read financial statements like a pro</li>
              <li>Key ratios that reveal the real health of a company</li>
              <li>Valuation basics – understanding Intrinsic Value</li>
              <li>Common mistakes beginners make (and how to avoid them)</li>
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
              <li>How to set smart financial goals</li>
              <li>Budgeting hacks to control your money (without guilt)</li>
              <li>The 50/30/20 rule – how to use it right</li>
              <li>Building an emergency fund – the smart way</li>
              <li>Basics of saving, investing, and protecting your income</li>
              <li>Psychology of money – build habits that stick</li>
            </ul>
            <p class="mt-2 font-semibold">👉 Join Now – Seats Are Filling Fast!</p>
          </div>

          <div style="margin-bottom: 2rem"></div>

          <!-- Mobile Register Button -->
          <div class="mobile-cta-container">
            <button @click="openModal" class="mobile-register-btn">
              Register for Free Webinar
            </button>
          </div>
        </div>

        <!-- Desktop Form (hidden on mobile) -->
        <div class="webinar-form desktop-form">
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <input
                type="text"
                id="fullName"
                v-model="formData.fullName"
                placeholder="Enter your full name *"
                required
              />
            </div>

            <div class="form-group">
              <div class="phone-input">
                <input type="text" class="country-code" value="+91" readonly />
                <div class="relative w-full">
                  <i
                    class="bi bi-whatsapp text-green-500 absolute left-4 top-1/2 transform -translate-y-1/2 text-xl"
                  ></i>
                  <input
                    type="tel"
                    v-model="formData.phone"
                    placeholder="Enter your WhatsApp number *"
                    class="w-full rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    style="padding-left: 40px"
                    required
                  />
                </div>
              </div>
            </div>

            <div class="form-group">
              <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="Enter your email address *"
                required
              />
            </div>
            <div class="form-group">
              <label for="webinarType" class="block text-lg font-semibold text-black"
                >Webinar Type *</label
              >
              <select id="webinarType" v-model="formData.webinarType" required>
                <option style="color: #000000" value="Fundamental Analysis">
                  Fundamental Analysis
                </option>
              </select>
            </div>

            <div class="form-group">
              <label for="webinarDate" class="block text-lg font-semibold text-black"
                >Date and Time *</label
              >
              <select id="webinarDate" v-model="formData.webinarDate" required>
                <option style="color: #000000" value="">Select Date and Time</option>
                <option style="color: #000000" value="sep14">Sep 14 | 03:00 PM</option>
                <option style="color: #000000" value="sep28">Sep 28 | 03:00 PM</option>
              </select>
            </div>

            <div class="form-group">
              <label for="hearAbout" class="block text-lg font-semibold text-black"
                >How did you hear about us? *</label
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

            <button
              type="submit"
              style="color: #ffffff; background: #df4a2f"
              :disabled="isLoading"
              class="webinar-cta"
            >
              <span v-if="isLoading">
                <svg
                  class="animate-spin h-5 w-5 text-white inline-block mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
              <span v-else>Join Free Webinar</span>
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal Overlay -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <!-- Modal Header -->
        <div class="modal-header">
          <h3 class="modal-title">Register for Webinar</h3>
          <button @click="closeModal" class="modal-close">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Modal Form -->
        <form @submit.prevent="submitForm" class="modal-form">
          <div class="form-group">
            <input
              type="text"
              v-model="formData.fullName"
              placeholder="Enter your full name *"
              required
            />
          </div>

          <div class="form-group">
            <div class="phone-input">
              <input type="text" class="country-code" value="+91" readonly />
              <div class="relative w-full">
                <input
                  type="tel"
                  v-model="formData.phone"
                  placeholder="WhatsApp number *"
                  class="w-full"
                  required
                />
              </div>
            </div>
          </div>

          <div class="form-group">
            <input
              type="email"
              v-model="formData.email"
              placeholder="Enter your email address *"
              required
            />
          </div>

          <div class="form-group">
            <label class="block text-sm font-semibold text-gray-700 mb-1">Webinar Type *</label>
            <select v-model="formData.webinarType" required>
              <option style="color: #000000" value="Fundamental Analysis">
                Fundamental Analysis
              </option>
            </select>
          </div>

          <div class="form-group">
            <label class="block text-sm font-semibold text-gray-700 mb-1">Date and Time *</label>
            <select v-model="formData.webinarDate" required>
              <option style="color: #000000" value="">Select Date and Time</option>
              <option style="color: #000000" value="sep14">Sep 14 | 03:00 PM</option>
              <option style="color: #000000" value="sep28">Sep 28 | 03:00 PM</option>
            </select>
          </div>

          <div class="form-group">
            <label class="block text-sm font-semibold text-gray-700 mb-1"
              >How did you hear about us? *</label
            >
            <select v-model="formData.hearAbout" required>
              <option value="">Select an option</option>
              <option style="color: #000000" value="youtube">YouTube</option>
              <option style="color: #000000" value="social-media">Social Media</option>
              <option style="color: #000000" value="friend">Friend/Family</option>
              <option style="color: #000000" value="google">Google Search</option>
              <option style="color: #000000" value="other">Other</option>
            </select>
          </div>

          <button type="submit" :disabled="isLoading" class="modal-submit-btn">
            <span v-if="isLoading">
              <svg
                class="animate-spin h-5 w-5 text-white inline-block mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Registering...
            </span>
            <span v-else>Register Now</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import emailjs from 'emailjs-com'

export default {
  name: 'WebinarSection',
  data() {
    return {
      formData: {
        fullName: '',
        phone: '',
        email: '',
        webinarType: 'Fundamental Analysis',
        webinarDate: '',
        hearAbout: '',
      },
      isLoading: false,
      isModalOpen: false,
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
      document.body.style.overflow = 'hidden' // Prevent background scroll
    },
    closeModal() {
      this.isModalOpen = false
      document.body.style.overflow = 'auto' // Restore scroll
    },
    submitForm() {
      this.isLoading = true
      emailjs
        .send('service_5dogksj', 'template_9070btn', this.formData, 'HTFS9qX8vFp_ehgL2')
        .then(() => {
          alert('✅ You are registered! A confirmation email has been sent.')
          this.formData = {
            fullName: '',
            phone: '',
            email: '',
            webinarType: 'Fundamental Analysis',
            webinarDate: '',
            hearAbout: '',
          }
          this.closeModal() // Close modal after successful submission
        })
        .catch((error) => {
          console.error('❌ Email send error:', error)
          alert('Error: Could not send email. Please try again.')
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },
  beforeDestroy() {
    // Cleanup: restore scroll if component is destroyed while modal is open
    document.body.style.overflow = 'auto'
  },
}
</script>

<style scoped>
.webinar-section {
  background: url('/images/subtle-prism (1).svg');
  color: white;
  padding: 3rem 0;
  position: relative;
}

.container {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
}

.webinar-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
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
}

.webinar-cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px #f77b064d;
}

/* Mobile CTA Button */
.mobile-cta-container {
  display: none;
  margin-top: 2rem;
}

.mobile-register-btn {
  background: linear-gradient(135deg, #db4a2b 0%, #ff6b4a 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(219, 74, 43, 0.4);
  position: relative;
  overflow: hidden;
}

.mobile-register-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(219, 74, 43, 0.6);
}

.mobile-register-btn:active {
  transform: translateY(0);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  animation: modalFadeIn 0.3s ease-out;
}

.modal-content {
  background: #fce4e4;
  border-radius: 20px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  animation: modalSlideIn 0.3s ease-out;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #6b7280;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: #f3f4f6;
  color: #374151;
}

.modal-form {
  padding: 1rem 1.5rem 1.5rem;
}

.modal-form .form-group {
  margin-bottom: 1.5rem;
}

.modal-form .form-group input,
.modal-form .form-group select {
  background: #db4b2b34;
  border: 1px solid #000000;
  padding: 0.875rem;
  font-size: 0.9rem;
}

.modal-form .form-group input:focus,
.modal-form .form-group select:focus {
  background: #db4b2b34;
  border-color: #db4a2b;
  box-shadow: 0 0 0 3px rgba(219, 74, 43, 0.1);
  transform: none;
}

.modal-submit-btn {
  background: linear-gradient(135deg, #db4a2b 0%, #ff6b4a 100%);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
}

.modal-submit-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(219, 74, 43, 0.4);
}

.modal-submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Animations */
@keyframes modalFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes modalSlideIn {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .webinar-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .desktop-form {
    display: none;
  }

  .mobile-cta-container {
    display: block;
  }

  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }

  .modal-form .phone-input .country-code {
    width: 70px !important;
  }
}

@media (min-width: 769px) {
  .mobile-cta-container {
    display: none !important;
  }
}
</style>
