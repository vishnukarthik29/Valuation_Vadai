<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="badge">Financial Insights & Expert Analysis</div>
        <h1>Our <span class="highlight">Financial Blog</span></h1>
        <p>
          Stay updated with the latest insights, market analysis, and expert advice from our team of
          financial professionals.
        </p>
        <div class="search-filter">
          <div class="search-box">
            <span class="search-icon">🔍</span>
            <input
              type="text"
              class="search-input"
              placeholder="Search articles..."
              v-model="searchTerm"
              @input="filterPosts"
            />
          </div>
          <select class="category-select" v-model="selectedCategory" @change="filterPosts">
            <option value="All">All</option>
            <option value="Investment">Investment</option>
            <option value="Valuation">Valuation</option>
            <option value="Market Analysis">Market Analysis</option>
            <option value="Financial Planning">Financial Planning</option>
            <option value="Tips & Guides">Tips & Guides</option>
          </select>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="featured" v-if="showFeatured">
      <div class="container">
        <h2 class="section-title">Featured Article</h2>
        <div class="featured-card">
          <div class="featured-image">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop"
              alt="Understanding Business Valuation"
            />
            <div class="featured-badge">Featured</div>
          </div>
          <div class="featured-content">
            <div class="category-badge">💰 Valuation</div>
            <h3 class="featured-title">
              Understanding Business Valuation: A Complete Guide for 2025
            </h3>
            <p class="featured-excerpt">
              Learn the fundamental principles of business valuation and how to accurately assess
              your company's worth in today's market.
            </p>
            <div class="post-meta">
              <div class="meta-item">
                <span>👤</span>
                Rajesh Vadai
              </div>
              <div class="meta-item">
                <span>📅</span>
                January 15, 2025
              </div>
              <div class="meta-item">
                <span>⏱️</span>
                8 min read
              </div>
            </div>
            <button class="btn" @click="readArticle('featured')">Read Full Article →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="blog-grid">
      <div class="container">
        <h2 class="section-title">{{ gridTitle }}</h2>
        <p class="results-count">
          {{ resultsCount }}
        </p>

        <!-- Posts Grid -->
        <div class="posts-grid" v-if="filteredPosts.length > 0">
          <div class="post-card" v-for="post in filteredPosts" :key="post.id">
            <div class="post-image">
              <img :src="post.image" :alt="post.title" />
              <div class="post-category">
                {{ getCategoryIcon(post.category) }} {{ post.category }}
              </div>
            </div>
            <div class="post-content">
              <h3 class="post-title">{{ post.title }}</h3>
              <p class="post-excerpt">{{ post.excerpt }}</p>
              <div class="post-meta-small">
                <div class="meta-item">
                  <span>👤</span>
                  {{ post.author }}
                </div>
                <div class="meta-item">
                  <span>📅</span>
                  {{ formatDate(post.date) }}
                </div>
                <div class="meta-item">
                  <span>⏱️</span>
                  {{ post.readTime }}
                </div>
              </div>
              <button class="btn btn-outline full-width" @click="readArticle(post.id)">
                Read More →
              </button>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div class="no-results" v-else>
          <div class="no-results-icon">📚</div>
          <h3>No articles found</h3>
          <p>Try adjusting your search terms or category filter.</p>
        </div>
      </div>
    </section>

    <!-- Newsletter Subscription -->
    <section class="newsletter">
      <div class="container">
        <h2>Stay Updated with Our Newsletter</h2>
        <p>
          Get the latest financial insights and market analysis delivered directly to your inbox.
        </p>
        <div class="newsletter-form">
          <input
            type="email"
            class="newsletter-input"
            placeholder="Enter your email"
            v-model="newsletterEmail"
          />
          <button class="newsletter-btn" @click="subscribeNewsletter">Subscribe</button>
        </div>
        <p class="newsletter-disclaimer">No spam, unsubscribe at any time.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      searchTerm: '',
      selectedCategory: 'All',
      newsletterEmail: '',
      blogPosts: [
        {
          id: 2,
          title: 'Top 10 Investment Strategies for Small Businesses in 2025',
          excerpt:
            'Discover proven investment strategies that can help small businesses grow and maximize their returns.',
          author: 'Priya Sharma',
          date: '2025-01-12',
          readTime: '6 min read',
          category: 'Investment',
          image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=300&fit=crop',
        },
        {
          id: 3,
          title: 'Market Analysis: Indian Financial Sector Outlook',
          excerpt:
            'An in-depth analysis of the Indian financial sector and what investors should expect in the coming months.',
          author: 'Arjun Patel',
          date: '2025-01-10',
          readTime: '10 min read',
          category: 'Market Analysis',
          image:
            'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop',
        },
        {
          id: 4,
          title: '5 Essential Financial Planning Tips for Young Professionals',
          excerpt:
            'Start your financial journey right with these essential planning tips tailored for young professionals.',
          author: 'Priya Sharma',
          date: '2025-01-08',
          readTime: '5 min read',
          category: 'Financial Planning',
          image: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=600&h=300&fit=crop',
        },
        {
          id: 5,
          title: 'How to Prepare for Your First Business Valuation',
          excerpt:
            'Essential steps and documents you need to prepare before getting your business valued by professionals.',
          author: 'Rajesh Vadai',
          date: '2025-01-05',
          readTime: '7 min read',
          category: 'Valuation',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
        },
        {
          id: 6,
          title: 'Understanding Risk Management in Investment Portfolios',
          excerpt:
            'Learn how to effectively manage risks in your investment portfolio to protect and grow your wealth.',
          author: 'Arjun Patel',
          date: '2025-01-03',
          readTime: '9 min read',
          category: 'Investment',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
        },
        {
          id: 7,
          title: 'Digital Transformation in Financial Services',
          excerpt:
            'How technology is reshaping the financial industry and what it means for businesses and consumers.',
          author: 'Priya Sharma',
          date: '2025-01-01',
          readTime: '6 min read',
          category: 'Tips & Guides',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop',
        },
      ],
      filteredPosts: [],
    }
  },
  computed: {
    showFeatured() {
      return !this.searchTerm && this.selectedCategory === 'All'
    },
    gridTitle() {
      return this.searchTerm || this.selectedCategory !== 'All'
        ? 'Search Results'
        : 'Latest Articles'
    },
    resultsCount() {
      const count = this.filteredPosts.length
      return `${count} article${count !== 1 ? 's' : ''} found`
    },
  },
  methods: {
    getCategoryIcon(category) {
      const icons = {
        Investment: '📈',
        Valuation: '💰',
        'Market Analysis': '📊',
        'Financial Planning': '🎯',
        'Tips & Guides': '💡',
      }
      return icons[category] || '📚'
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    filterPosts() {
      const searchTerm = this.searchTerm.toLowerCase()
      const selectedCategory = this.selectedCategory

      this.filteredPosts = this.blogPosts.filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(searchTerm) ||
          post.excerpt.toLowerCase().includes(searchTerm)
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
        return matchesSearch && matchesCategory
      })
    },
    readArticle(postId) {
      // Emit event to parent component or handle routing
      this.$emit('read-article', postId)
      console.log('Reading article:', postId)
    },
    subscribeNewsletter() {
      if (this.newsletterEmail) {
        // Emit event to parent component or handle API call
        this.$emit('newsletter-subscribe', this.newsletterEmail)
        alert("Thank you for subscribing! We'll send you the latest financial insights.")
        this.newsletterEmail = ''
      } else {
        alert('Please enter your email address.')
      }
    },
  },
  mounted() {
    this.filteredPosts = [...this.blogPosts]
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.blog-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #332a2e;
  background-color: #fff1ef;
}

.container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 16px;
}

/* Hero Section */
.hero {
  padding: 80px 0;
  text-align: center;
}

.badge {
  display: inline-block;
  background: #ffb1a0;
  color: #332a2e;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 14px;
  margin-bottom: 24px;
}

.hero h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 24px;
  line-height: 1.2;
}

.hero .highlight {
  color: #db4a2b;
}

.hero p {
  font-size: 20px;
  color: #666;
  margin-bottom: 32px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.search-filter {
  display: flex;
  gap: 16px;
  max-width: 512px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 250px;
}

.search-input {
  width: 100%;
  padding: 12px 12px 12px 40px;
  border: 1px solid #ffded7;
  border-radius: 6px;
  background: #fff1ef;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.category-select {
  padding: 12px 16px;
  border: 1px solid #ffded7;
  border-radius: 6px;
  background: #fff1ef;
  color: #332a2e;
}

/* Featured Post */
.featured {
  padding: 64px 0;
  background: #f2efef;
}

.section-title {
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 48px;
}

.featured-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

.featured-image {
  position: relative;
  height: 300px;
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: #db4a2b;
  color: #fff1ef;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 12px;
}

.featured-content {
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: 1px solid #ffded7;
  color: #332a2e;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  margin-bottom: 16px;
  width: fit-content;
}

.featured-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  line-height: 1.3;
}

.featured-excerpt {
  color: #666;
  margin-bottom: 24px;
}

.post-meta {
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #666;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Blog Grid */
.blog-grid {
  padding: 80px 0;
}

.results-count {
  text-align: center;
  color: #666;
  margin-bottom: 48px;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.post-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
}

.post-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.post-image {
  position: relative;
  height: 192px;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-category {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(242, 239, 239, 0.9);
  color: #332a2e;
  padding: 4px 8px;
  border-radius: 16px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.post-content {
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 192px);
}

.post-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.4;
}

.post-excerpt {
  color: #666;
  margin-bottom: 16px;
  flex: 1;
}

.post-meta-small {
  display: flex;
  gap: 12px;
  font-size: 12px;
  color: #666;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

/* Buttons */
.btn {
  background: #db4a2b;
  color: #fff1ef;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s;
  cursor: pointer;
}

.btn:hover {
  background: #c23e24;
}

.btn-outline {
  background: transparent;
  color: #db4a2b;
  border: 1px solid #db4a2b;
}

.btn-outline:hover {
  background: #db4a2b;
  color: #fff1ef;
}

.full-width {
  width: 100%;
}

/* Newsletter */
.newsletter {
  padding: 80px 0;
  background: #db4a2b;
  color: #fff1ef;
  text-align: center;
}

.newsletter h2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 16px;
}

.newsletter p {
  font-size: 20px;
  margin-bottom: 32px;
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  gap: 16px;
  max-width: 384px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.newsletter-input {
  flex: 1;
  padding: 12px 16px;
  border: none;
  border-radius: 6px;
  background: #fff1ef;
  color: #332a2e;
  min-width: 200px;
}

.newsletter-btn {
  background: #fff1ef;
  color: #332a2e;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
}

.newsletter-btn:hover {
  background: rgba(255, 241, 239, 0.9);
}

.newsletter-disclaimer {
  font-size: 14px;
  opacity: 0.75;
  margin-top: 16px;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 64px 0;
}

.no-results-icon {
  font-size: 64px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.no-results h3 {
  margin-bottom: 8px;
}

.no-results p {
  color: #666;
}

/* Responsive */
@media (min-width: 768px) {
  .hero h1 {
    font-size: 64px;
  }
  .search-filter {
    flex-wrap: nowrap;
  }
  .featured-card {
    grid-template-columns: 1fr 1fr;
  }
  .newsletter-form {
    flex-wrap: nowrap;
  }
}

@media (max-width: 767px) {
  .featured-card {
    grid-template-columns: 1fr;
  }
  .featured-image {
    height: 200px;
  }
  .hero h1 {
    font-size: 36px;
  }
  .section-title {
    font-size: 28px;
  }
  .newsletter h2 {
    font-size: 28px;
  }
}
</style>
