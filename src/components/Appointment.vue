<template>
  <div class="appointment-page" id="Appointment">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>
          Book Your
          <span class="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent"
            >Expert</span
          >
          Consultation
        </h1>
        <p>Schedule a consultation to discuss your investment goals.</p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="main-content">
      <div class="container">
        <div class="grid">
          <div style="display: flex; flex-direction: column; gap: 32px">
            <!-- What to Expect -->
            <div class="card">
              <h3 class="card-title">What to Expect</h3>
              <div
                v-for="(item, index) in expectations"
                :key="index"
                style="display: flex; align-items: flex-start; gap: 12px; margin-bottom: 16px"
              >
                <span style="color: #db4a2b">✅</span>
                <div>
                  <p style="font-weight: 500">{{ item.title }}</p>
                  <p style="font-size: 14px; color: #666">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <!-- Mobile Modal Trigger Button -->
          <div class="mobile-only">
            <button @click="openModal" class="btn btn-primary btn-large">
              Schedule Appointment
            </button>
          </div>

          <!-- Desktop Form -->
          <div class="desktop-only">
            <div class="card">
              <h2 class="card-title">Schedule Your Appointment</h2>
              <p style="color: #666; margin-bottom: 24px">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form @submit.prevent="submitForm">
                <div class="form-grid">
                  <div class="form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      class="form-input"
                      placeholder="Enter your first name"
                      v-model="form.firstName"
                      :class="{ error: errors.firstName }"
                      required
                    />
                    <span v-if="errors.firstName" class="error-message">{{
                      errors.firstName
                    }}</span>
                  </div>
                  <div class="form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      class="form-input"
                      placeholder="Enter your last name"
                      v-model="form.lastName"
                      :class="{ error: errors.lastName }"
                      required
                    />
                    <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                  </div>
                </div>
                <div class="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    class="form-input"
                    placeholder="Enter your email"
                    v-model="form.email"
                    :class="{ error: errors.email }"
                    required
                  />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
                <div class="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    class="form-input"
                    placeholder="+91 Enter your number"
                    v-model="form.phone"
                    :class="{ error: errors.phone }"
                    required
                  />
                  <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
                </div>
                <div class="form-group">
                  <label>Occupation *</label>
                  <select class="form-input" v-model="form.occupation" required>
                    <option value="">Select your occupation</option>
                    <option value="student">Student</option>
                    <option value="salaried">Salaried</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Income Range *</label>
                  <select
                    class="form-input"
                    v-model="form.incomeRange"
                    :class="{ error: errors.incomeRange }"
                    required
                  >
                    <option value="">Select your income range</option>
                    <option value="less-than-1-lakh">Less than ₹1 Lakh</option>
                    <option value="1-3-lakh">₹1 - 3 Lakh</option>
                    <option value="3-6-lakh">₹3 - 6 Lakh</option>
                    <option value="6-10-lakh">₹6 - 10 Lakh</option>
                    <option value="greater-than-10-lakh">Greater than ₹10 Lakh</option>
                  </select>
                  <span v-if="errors.incomeRange" class="error-message">{{
                    errors.incomeRange
                  }}</span>
                </div>
                <div class="form-group">
                  <label>Preferred Day *</label>
                  <select class="form-input" v-model="form.preferredDay" required>
                    <option disabled value="">Select a day</option>
                    <option value="Saturday">Saturday</option>
                    <option value="Sunday">Sunday</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Message</label>
                  <textarea
                    class="form-input"
                    placeholder="Tell us about your requirements and any specific questions you have..."
                    rows="4"
                    v-model="form.message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="btn btn-primary"
                  style="width: 100%; padding: 12px"
                  :disabled="isSubmitting"
                >
                  {{ isSubmitting ? 'Scheduling...' : 'Schedule Appointment' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Modal -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h4>Schedule Your Appointment</h4>
          <button @click="closeModal" class="close-btn">&times;</button>
        </div>
        <div class="modal-body">
          <div class="card modal-form">
            <p style="color: #666; margin-bottom: 24px">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
            <form @submit.prevent="submitForm">
              <div class="form-grid">
                <div class="form-group">
                  <label>First Name *</label>
                  <input
                    type="text"
                    class="form-input"
                    placeholder="Enter your first name"
                    v-model="form.firstName"
                    :class="{ error: errors.firstName }"
                    required
                  />
                  <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
                </div>
                <div class="form-group">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    class="form-input"
                    placeholder="Enter your last name"
                    v-model="form.lastName"
                    :class="{ error: errors.lastName }"
                    required
                  />
                  <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>
                </div>
              </div>
              <div class="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  class="form-input"
                  placeholder="Enter your email"
                  v-model="form.email"
                  :class="{ error: errors.email }"
                  required
                />
                <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
              </div>
              <div class="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  class="form-input"
                  placeholder="+91 Enter your number"
                  v-model="form.phone"
                  :class="{ error: errors.phone }"
                  required
                />
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>
              <div class="form-group">
                <label>Occupation *</label>
                <select class="form-input" v-model="form.occupation" required>
                  <option value="">Select your occupation</option>
                  <option value="student">Student</option>
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self Employed</option>
                  <option value="others">Others</option>
                </select>
              </div>
              <div class="form-group">
                <label>Income Range *</label>
                <select
                  class="form-input"
                  v-model="form.incomeRange"
                  :class="{ error: errors.incomeRange }"
                  required
                >
                  <option value="">Select your income range</option>
                  <option value="less-than-1-lakh">Less than ₹1 Lakh</option>
                  <option value="1-3-lakh">₹1 - 3 Lakh</option>
                  <option value="3-6-lakh">₹3 - 6 Lakh</option>
                  <option value="6-10-lakh">₹6 - 10 Lakh</option>
                  <option value="greater-than-10-lakh">Greater than ₹10 Lakh</option>
                </select>
                <span v-if="errors.incomeRange" class="error-message">{{
                  errors.incomeRange
                }}</span>
              </div>
              <div class="form-group">
                <label>Preferred Day *</label>
                <select class="form-input" v-model="form.preferredDay" required>
                  <option disabled value="">Select a day</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div class="form-group">
                <label>Message</label>
                <textarea
                  class="form-input"
                  placeholder="Tell us about your requirements and any specific questions you have..."
                  rows="4"
                  v-model="form.message"
                ></textarea>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                style="width: 100%; padding: 12px"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Scheduling...' : 'Schedule Appointment' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
  name: 'Appointment',
  data() {
    return {
      showModal: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: '',
        incomeRange: '',
        preferredDay: '',
        message: '',
      },
      errors: {},
      isSubmitting: false,
      expectations: [
        {
          title: 'Initial Consultation (30 mins)',
          description: 'Understanding your needs and objectives',
        },
        {
          title: 'Detailed Analysis',
          description: 'Comprehensive review of your financial situation',
        },
        {
          title: 'Customized Recommendations',
          description: 'Tailored solutions for your specific requirements',
        },
        {
          title: 'Follow-up Support',
          description: 'Ongoing guidance and support as needed',
        },
      ],
    }
  },
  methods: {
    openModal() {
      this.showModal = true
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    },

    closeModal() {
      this.showModal = false
      document.body.style.overflow = 'auto' // Restore scrolling
    },

    validateForm() {
      this.errors = {}

      if (!this.form.firstName.trim()) {
        this.errors.firstName = 'First name is required'
      }
      if (!this.form.lastName.trim()) {
        this.errors.lastName = 'Last name is required'
      }
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address'
      }
      if (!this.form.phone.trim()) {
        this.errors.phone = 'Phone number is required'
      }
      if (!this.form.incomeRange) {
        this.errors.incomeRange = 'Please select your income range'
      }

      return Object.keys(this.errors).length === 0
    },

    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },

    async submitForm() {
      if (!this.validateForm()) return

      this.isSubmitting = true

      try {
        // Replace with your actual emailjs implementation
        const templateParams = {
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          full_name: this.form.firstName + ' ' + this.form.lastName,
          email: this.form.email,
          phone: this.form.phone,
          occupation: this.form.occupation || 'Not specified',
          income_range: this.form.incomeRange,
          preferredDay: this.form.preferredDay,
          message: this.form.message || 'No additional message',
        }

        // Simulate API call - replace with actual emailjs call
        // await new Promise((resolve) => setTimeout(resolve, 10000))

        await emailjs.send(
          'service_5dogksj',
          'template_l58a1yr',
          templateParams,
          'HTFS9qX8vFp_ehgL2',
        )

        alert('Appointment request submitted successfully! We will contact you within 24 hours.')
        this.resetForm()

        // Close modal if on mobile
        if (this.showModal) {
          this.closeModal()
        }
      } catch (error) {
        console.error('Form submission error:', error)
        alert('There was an error submitting your appointment. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    },

    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: '',
        incomeRange: '',
        preferredDay: '',
        message: '',
      }
      this.errors = {}
    },
    handleEscapeKey(event) {
      if (event.key === 'Escape') {
        this.closeModal()
      }
    },
  },

  // Handle escape key to close modal
  // mounted() {
  //   const handleEscapeKey = (e) => {
  //     if (e.key === 'Escape' && this.showModal) {
  //       this.closeModal()
  //     }
  //   }

  //   document.addEventListener('keydown', handleEscapeKey)

  //   // Cleanup on unmount
  //   this.$once('hook:beforeDestroy', () => {
  //     document.removeEventListener('keydown', handleEscapeKey)
  //     document.body.style.overflow = 'auto' // Ensure scrolling is restored
  //   })
  // },
  mounted() {
    document.addEventListener('keydown', this.handleEscapeKey)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey)
    document.body.style.overflow = 'auto'
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.appointment-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #ffffff;
  color: #332a2e;
  line-height: 1.6;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Responsive Display Classes */
.mobile-only {
  display: none;
}
.mobile-button-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* adjust as needed for your UI, 100vh may overflow with nav bars */
}

.desktop-only {
  display: block;
}

@media (max-width: 768px) {
  .mobile-only {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .desktop-only {
    display: none;
  }
}

/* Hero Section */
.hero {
  padding-top: 35px;
  padding-left: 16px;
  padding-right: 16px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 24px;
}

.hero p {
  font-size: 1.25rem;
  color: #666;
  max-width: 768px;
  margin: 0 auto 48px;
}

/* Main Content */
.main-content {
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 48px;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}

@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.card {
  background: white;
  border: 1px solid #ffded7;
  border-radius: 12px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
}

/* Form Styles */
.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ffded7;
  border-radius: 6px;
  background: #fff1ef;
  transition: border-color 0.3s;
  font-size: 16px;
}

.form-input:focus {
  outline: none;
  border-color: #db4a2b;
}

.form-input.error {
  border-color: #e74c3c;
}

.error-message {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
  display: block;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
}

textarea {
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
}

/* Button Styles */
.btn {
  padding: 8px 16px;
  border: 1px solid #db4a2b;
  background: transparent;
  color: #db4a2b;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
}

.btn:hover {
  background: #db4a2b;
  color: #fff1ef;
}

.btn-primary {
  background: #db4a2b;
  color: #fff1ef;
  border: 1px solid #db4a2b;
}

.btn-primary:hover {
  background: #c23e24;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-large {
  padding: 16px 32px;
  font-size: 18px;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  overflow-y: auto;
}

.modal-content {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  margin-top: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  border-bottom: 1px solid #ffded7;
  position: sticky;
  top: 0;
  background: white;
  font-weight: bold;
  z-index: 1;
}

.modal-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #666;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.close-btn:hover {
  background: #f5f5f5;
  color: #333;
}

.modal-body {
  padding: 0;
}

.modal-form {
  border: none;
  box-shadow: none;
  border-radius: 0;
}

/* Mobile Specific Styles */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .modal-overlay {
    padding: 0;
    background: rgba(0, 0, 0, 0.5);
  }

  .modal-content {
    border-radius: 30px;
    max-height: 100vh;
    margin-top: 0;
    margin: 1rem;
    height: 100vh;
  }

  .modal-header {
    padding: 16px 20px;
  }

  .modal-body .card {
    padding: 20px;
  }
}

/* Gradient text effect */
.bg-gradient-to-r {
  background: linear-gradient(to right, #fb923c, #f87171);
  -webkit-background-clip: text;
  background-clip: text;
}

.from-orange-400 {
  --tw-gradient-from: #fb923c;
}

.to-red-400 {
  --tw-gradient-to: #f87171;
}

.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

.text-transparent {
  color: transparent;
}
</style>
