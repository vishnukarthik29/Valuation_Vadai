<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <!-- Brand Section -->
        <div class="footer-brand">
          <div class="brand-logo">
            <!-- <div class="logo-icon">
              <span class="logo-text">V&V</span>
            </div> -->
            <img src="/images/footer.jpg" style="width: 25px; height: 25px" />
            <span class="brand-name">Valuation and Vadai</span>
          </div>
          <!-- <p class="brand-description">
            Expert financial consulting and valuation services for businesses and individuals.
          </p> -->
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="section-title">Quick Links</h4>
          <div class="link-list">
            <!-- <router-link to="/About" class="footer-link"> About Us </router-link> -->
            <a href="/Valuation_Vadai/About" class="footer-link">About us</a>
            <a href="/Valuation_Vadai/#webinar" class="footer-link">Webinars</a>
            <!-- <a href="/Valuation_Vadai/Blog" class="footer-link">Blogs</a> -->
            <!-- <router-link to="/appointment" class="footer-link"> Book Appointment </router-link> -->
            <a href="/Valuation_Vadai/appointment" class="footer-link">Book Appointment</a>
          </div>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4 class="section-title">Contact Info</h4>
          <div class="contact-list">
            <!-- <div class="contact-item">
              <span class="contact-icon">📞</span>
              <span class="contact-text">+91 98765 43210</span>
            </div> -->
            <div class="contact-item">
              <span class="contact-icon">✉️</span>
              <span class="contact-text">info@valuationvadai.com</span>
            </div>
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <span class="contact-text"> Chennai </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p class="copyright">
          © 2025 Valuation and Vadai. All rights reserved. | Crafted with expertise 🔥
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      // Add any reactive data here if needed
    }
  },
  methods: {
    // Add any methods here if needed
  },
}
</script>

<style scoped>
.footer {
  background-color: #332a2e;
  color: #fff1ef;
  padding: 64px 16px;
}

.footer-container {
  max-width: 1152px;
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.brand-logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  background-color: #db4a2b;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  color: #fff1ef;
  font-weight: bold;
  font-size: 14px;
}

.brand-name {
  font-weight: bold;
  font-size: 20px;
}

.brand-description {
  color: rgba(255, 241, 239, 0.8);
  margin: 0;
}

.section-title {
  font-weight: 600;
  margin-bottom: 16px;
  margin-top: 0;
}

.link-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-link {
  color: rgba(255, 241, 239, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #fff1ef;
  transform: translateX(5px);
}

.service-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.service-item {
  color: rgba(255, 241, 239, 0.8);
}

.contact-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.contact-icon {
  flex-shrink: 0;
}

.contact-text {
  color: rgba(255, 241, 239, 0.8);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 241, 239, 0.2);
  margin-top: 48px;
  padding-top: 32px;
  text-align: center;
}

.copyright {
  color: rgba(255, 241, 239, 0.6);
  margin: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer {
    padding: 48px 16px;
  }

  .footer-grid {
    gap: 24px;
  }

  .footer-bottom {
    margin-top: 32px;
    padding-top: 24px;
  }
}
</style>
