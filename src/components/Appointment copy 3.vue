<template>
  <div class="appointment-page" id="Appointment">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <!-- <div class="badge">Schedule Your Consultation</div> -->
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
          <!-- Appointment Form -->
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
                <label>Occupation</label>
                <select class="form-input" v-model="form.occupation">
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
                <label>Preferred Date & Time</label>
                <input type="datetime-local" class="form-input" v-model="form.preferredDateTime" />
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
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppointmentBooking',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: '',
        incomeRange: '',
        preferredDateTime: '',
        message: '',
      },
      errors: {},
      isSubmitting: false,
      contactInfo: {
        phone: '+91 98765 43210',
        phoneNumber: '+919876543210',
        email: 'info@valuationvadai.com',
        address: '123 Business District,<br />Financial Center,<br />Mumbai, MH - 400001',
      },
      officeHours: {
        'Monday - Friday': '9:00 AM - 6:00 PM',
        Saturday: '10:00 AM - 4:00 PM',
        Sunday: 'Closed',
      },
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
      if (!this.validateForm()) {
        return
      }

      this.isSubmitting = true

      try {
        // Simulate API call - replace with actual API endpoint
        await this.sendAppointmentRequest(this.form)

        // Show success message
        alert('Appointment request submitted successfully! We will contact you within 24 hours.')

        // Reset form
        this.resetForm()
      } catch (error) {
        console.error('Error submitting appointment:', error)
        alert('There was an error submitting your appointment. Please try again.')
      } finally {
        this.isSubmitting = false
      }
    },

    async sendAppointmentRequest(formData) {
      // Replace this with your actual API call
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Appointment request:', formData)
          resolve()
        }, 1000)
      })
    },

    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        occupation: '',
        incomeRange: '',
        preferredDateTime: '',
        message: '',
      }
      this.errors = {}
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

.appointment-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  /* background-color: #fff1ef; */
  /* background: url('/images/subtle-prism (1).svg'); */
  background: #ffffff;
  color: #332a2e;
  line-height: 1.6;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Hero Section */
.hero {
  /* padding: 80px 16px; */
  padding-top: 35px;
  padding-left: 16px;
  padding-right: 16px;

  text-align: center;
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
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 24px;
}

.text-primary {
  color: #db4a2b;
}

.hero p {
  font-size: 1.25rem;
  color: #666;
  max-width: 768px;
  margin: 0 auto 48px;
}

/* Main Content */
.main-content {
  /* padding: 48px 16px; */
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
}

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

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.contact-icon {
  width: 20px;
  height: 20px;
  color: #db4a2b;
}

.office-hours {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
}

.highlight-box {
  background: rgba(255, 177, 160, 0.2);
  padding: 12px;
  border-radius: 8px;
  margin-top: 16px;
}

.cta-section {
  background: #f2efef;
  padding: 80px 16px;
  text-align: center;
}

.btn-group {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
}
</style>
