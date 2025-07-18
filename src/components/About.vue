<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="badge">About Valuation and Vadai</div>
        <h1>Empowering Your <span class="text-primary">Financial Future</span></h1>
        <p>
          We are a team of dedicated financial experts committed to helping individuals and
          businesses make smarter investment decisions through comprehensive analysis and strategic
          guidance.
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section section-secondary">
      <div class="container">
        <div class="grid-2">
          <div>
            <h2 class="story-title">Our Story</h2>
            <p class="story-text">
              Founded in 2018, Valuation and Vadai emerged from a simple belief: that everyone
              deserves access to expert financial guidance. Our founder, Rajesh Vadai, recognized
              the gap between complex financial markets and individual investors' understanding.
            </p>
            <p class="story-text">
              What started as a small consulting practice has grown into a comprehensive financial
              advisory firm, serving over 500 clients across various industries. We've helped
              businesses unlock their true value and guided individuals toward financial
              independence.
            </p>
            <div class="stats">
              <div>
                <div class="stat-number">500+</div>
                <div class="stat-label">Happy Clients</div>
              </div>
              <div>
                <div class="stat-number">₹50Cr+</div>
                <div class="stat-label">Assets Valued</div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
              alt="Our office"
              class="office-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Our Core Values</h2>
          <p>The principles that guide everything we do</p>
        </div>
        <div class="grid-4">
          <div class="card" v-for="value in values" :key="value.id">
            <div class="card-icon">{{ value.icon }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="section section-secondary">
      <div class="container">
        <div class="section-title">
          <h2>Meet Our Team</h2>
          <p>Experienced professionals dedicated to your success</p>
        </div>
        <div class="grid-3">
          <div class="card team-card" v-for="member in teamMembers" :key="member.id">
            <img :src="member.image" :alt="member.name" />
            <h3>{{ member.name }}</h3>
            <p class="role">{{ member.role }}</p>
            <p class="description">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section">
      <div class="container">
        <div class="section-title">
          <h2>Why Choose Us?</h2>
          <p>What sets us apart in the financial consulting industry</p>
        </div>
        <div class="feature-list">
          <div class="feature-item" v-for="feature in features" :key="feature.id">
            <div class="feature-icon">✅</div>
            <div class="feature-content">
              <h3>{{ feature.title }}</h3>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section section-primary">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Transform Your Financial Future?</h2>
          <p class="cta-text">
            Join hundreds of satisfied clients who have achieved their financial goals with our
            expert guidance.
          </p>
          <div class="cta-buttons">
            <router-link to="/appointment" class="btn btn-secondary">
              Schedule Consultation
            </router-link>
            <router-link to="/" class="btn btn-outline-white"> Join Free Webinar </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      values: [
        {
          id: 1,
          icon: '🛡️',
          title: 'Trust & Transparency',
          description:
            'We believe in complete transparency in all our dealings and build lasting relationships based on trust.',
        },
        {
          id: 2,
          icon: '🎯',
          title: 'Results-Driven',
          description:
            'Our focus is on delivering measurable results that align with your financial goals and objectives.',
        },
        {
          id: 3,
          icon: '💡',
          title: 'Innovation',
          description:
            'We continuously evolve our methodologies to incorporate the latest financial analysis techniques.',
        },
        {
          id: 4,
          icon: '❤️',
          title: 'Client-Centric',
          description:
            'Every strategy we develop is tailored to meet the unique needs and circumstances of our clients.',
        },
      ],
      teamMembers: [
        {
          id: 1,
          name: 'Rajesh Vadai',
          role: 'Founder & CEO',
          description: '15+ years in financial consulting and business valuations',
          image:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
        },
        {
          id: 2,
          name: 'Priya Sharma',
          role: 'Head of Valuations',
          description: 'Certified valuation analyst with expertise in multiple industries',
          image:
            'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
        },
        {
          id: 3,
          name: 'Arjun Patel',
          role: 'Investment Advisor',
          description: 'Strategic investment planning and portfolio management specialist',
          image:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
        },
      ],
      features: [
        {
          id: 1,
          title: 'Proven Track Record',
          description:
            'Over 6 years of successful financial consulting with measurable results for our clients.',
        },
        {
          id: 2,
          title: 'Comprehensive Services',
          description:
            'From business valuations to investment advisory, we offer a complete suite of financial services.',
        },
        {
          id: 3,
          title: 'Educational Approach',
          description:
            'We believe in empowering our clients with knowledge through regular webinars and educational content.',
        },
        {
          id: 4,
          title: 'Personalized Solutions',
          description:
            'Every client receives a customized strategy tailored to their unique financial situation and goals.',
        },
      ],
    }
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Hero Section */
.hero {
  padding: 80px 16px;
  text-align: center;
  background-color: #fff1ef;
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
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  color: #332a2e;
}

.text-primary {
  color: #db4a2b;
}

.hero p {
  font-size: 1.25rem;
  color: #666;
  max-width: 768px;
  margin: 0 auto;
}

/* Sections */
.section {
  padding: 64px 16px;
}

.section-secondary {
  background: #f2efef;
}

.section-primary {
  background: #db4a2b;
  color: #fff1ef;
}

.section-title {
  text-align: center;
  margin-bottom: 64px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #332a2e;
}

.section-title p {
  font-size: 1.25rem;
  color: #666;
}

.section-primary .section-title h2 {
  color: #fff1ef;
}

.section-primary .section-title p {
  color: rgba(255, 241, 239, 0.8);
}

/* Grid Layouts */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.grid-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .grid-2,
  .grid-4 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-2,
  .grid-3,
  .grid-4 {
    grid-template-columns: 1fr;
  }
  .hero h1 {
    font-size: 2rem;
  }
}

/* Story Section */
.story-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 24px;
  color: #332a2e;
}

.story-text {
  color: #666;
  margin-bottom: 24px;
}

.office-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Cards */
.card {
  background: white;
  border: 1px solid #ffded7;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  height: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-icon {
  width: 48px;
  height: 48px;
  background: rgba(219, 74, 43, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: #db4a2b;
  font-size: 24px;
}

.card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #332a2e;
}

.card p {
  color: #666;
}

/* Team Cards */
.team-card img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 16px;
}

.team-card .role {
  color: #db4a2b;
  font-weight: 500;
}

.team-card .description {
  font-size: 14px;
  color: #666;
  margin-top: 8px;
}

/* Stats */
.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  color: #db4a2b;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

/* Why Choose Us */
.feature-list {
  max-width: 768px;
  margin: 0 auto;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 24px;
}

.feature-icon {
  color: #db4a2b;
  font-size: 24px;
  margin-top: 4px;
}

.feature-content h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #332a2e;
}

.feature-content p {
  color: #666;
}

/* CTA Section */
.cta-content {
  text-align: center;
  max-width: 768px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #fff1ef;
}

.cta-text {
  font-size: 1.25rem;
  margin-bottom: 32px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 8px 16px;
  border: 1px solid #db4a2b;
  background: #db4a2b;
  color: #fff1ef;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-block;
}

.btn:hover {
  background: #c23e24;
}

.btn-secondary {
  background: #fff1ef;
  color: #332a2e;
  border: 1px solid #fff1ef;
}

.btn-secondary:hover {
  background: rgba(255, 241, 239, 0.9);
}

.btn-outline-white {
  background: transparent;
  color: #fff1ef;
  border: 1px solid #fff1ef;
}

.btn-outline-white:hover {
  background: #fff1ef;
  color: #db4a2b;
}
</style>
