<template>
  <div>
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="badge">Financial Insights & Expert Analysis</div>
        <h1>Our <span class="highlight">Financial Blog</span></h1>
        <p>
          Stay updated with the latest insights, market analysis, and expert advice from our team of
          financial professionals.
        </p>

        <!-- Search and Filter -->
        <div class="search-filter">
          <input
            type="text"
            v-model="searchTerm"
            class="search-input"
            placeholder="Search articles..."
            @input="filterPosts"
          />
          <select v-model="selectedCategory" class="category-select" @change="filterPosts">
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
    <section v-if="showFeatured" class="featured">
      <div class="container">
        <div class="section-title">
          <h2>Featured Article</h2>
        </div>

        <div class="featured-card" v-if="featuredPost">
          <div class="featured-image">
            <img :src="featuredPost.image" :alt="featuredPost.title" />
            <div class="featured-badge">Featured</div>
          </div>
          <div class="featured-content">
            <div class="category-badge">
              <span>{{ getCategoryIcon(featuredPost.category) }}</span>
              {{ featuredPost.category }}
            </div>

            <h3>{{ featuredPost.title }}</h3>
            <p>{{ featuredPost.excerpt }}</p>

            <div class="meta">
              <div class="meta-item">
                <span>👤</span>
                {{ featuredPost.author }}
              </div>
              <div class="meta-item">
                <span>📅</span>
                {{ formatDate(featuredPost.date) }}
              </div>
              <div class="meta-item">
                <span>⏱️</span>
                {{ featuredPost.readTime }}
              </div>
            </div>

            <button class="btn btn-primary" @click="openModal(featuredPost.id)">
              Read Full Article →
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="blog-section">
      <div class="container">
        <div class="section-title">
          <h2>{{ resultsTitle }}</h2>
          <p>{{ resultsCount }}</p>
        </div>

        <div v-if="filteredRegularPosts.length === 0" class="no-results">
          <div class="no-results-icon">📚</div>
          <h3>No articles found</h3>
          <p>Try adjusting your search terms or category filter.</p>
        </div>

        <div v-else class="blog-grid">
          <div v-for="post in filteredRegularPosts" :key="post.id" class="blog-card">
            <div class="blog-image">
              <img :src="post.image" :alt="post.title" />
              <div class="blog-badge">
                <span>{{ getCategoryIcon(post.category) }}</span>
                {{ post.category }}
              </div>
            </div>

            <div class="blog-content">
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>

              <div class="blog-meta">
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

              <button class="btn btn-outline" @click="openModal(post.id)" style="width: 100%">
                Read More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal for Full Article -->
    <div v-if="showModal" class="modal active" @click="closeModalOnOverlay">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <div class="category-badge">
            <span>{{ getCategoryIcon(selectedPost.category) }}</span>
            {{ selectedPost.category }}
          </div>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>

        <!-- Modal Body -->
        <div class="modal-body">
          <!-- Article Header -->
          <div class="modal-article-header">
            <img :src="selectedPost.image" :alt="selectedPost.title" />
            <h1>{{ selectedPost.title }}</h1>
            <div class="modal-meta">
              <div class="meta-item">
                <span>👤</span>
                <span>{{ selectedPost.author }}</span>
              </div>
              <div class="meta-item">
                <span>📅</span>
                <span>{{ formatDate(selectedPost.date) }}</span>
              </div>
              <div class="meta-item">
                <span>⏱️</span>
                <span>{{ selectedPost.readTime }}</span>
              </div>
            </div>
            <p class="modal-excerpt">{{ selectedPost.excerpt }}</p>
          </div>

          <!-- Article Content -->
          <div class="modal-content-area" v-html="selectedPost.content"></div>
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer">
          <div class="modal-author">
            Written by <span>{{ selectedPost.author }}</span>
          </div>
          <div class="modal-actions">
            <button class="btn btn-outline" @click="closeModal">Close</button>
            <button class="btn btn-primary">Share Article</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data() {
    return {
      searchTerm: '',
      selectedCategory: 'All',
      email: '',
      showModal: false,
      selectedPost: null,
      blogPosts: [
        {
          id: 1,
          title: 'Understanding Business Valuation: A Complete Guide for 2025',
          excerpt:
            "Learn the fundamental principles of business valuation and how to accurately assess your company's worth in today's market.",
          content: `
            <h2>Introduction to Business Valuation</h2>
            <p>Business valuation is a critical process that determines the economic value of a business or company. In today's dynamic market environment, understanding how to properly value a business has become more important than ever for entrepreneurs, investors, and financial professionals.</p>
            
            <h2>Key Valuation Methods</h2>
            <h3>1. Asset-Based Approach</h3>
            <p>This method focuses on the company's assets and liabilities. It's particularly useful for companies with significant tangible assets or those in liquidation scenarios.</p>
            
            <h3>2. Income Approach</h3>
            <p>The income approach values a business based on its ability to generate future cash flows. This includes methods like:</p>
            <ul>
                <li>Discounted Cash Flow (DCF) analysis</li>
                <li>Capitalization of earnings method</li>
                <li>Revenue multiple approach</li>
            </ul>
            
            <h3>3. Market Approach</h3>
            <p>This approach compares the business to similar companies that have been sold recently or are publicly traded.</p>
            
            <h2>Factors Affecting Business Value</h2>
            <p>Several factors can significantly impact a business's valuation:</p>
            <ul>
                <li>Financial performance and trends</li>
                <li>Market position and competitive advantages</li>
                <li>Management team quality</li>
                <li>Industry outlook and growth prospects</li>
                <li>Economic conditions</li>
            </ul>
            
            <h2>Common Valuation Mistakes to Avoid</h2>
            <p>Many business owners make critical errors when attempting to value their companies:</p>
            <ul>
                <li>Overestimating future growth rates</li>
                <li>Ignoring market conditions</li>
                <li>Using outdated financial data</li>
                <li>Failing to account for key person risk</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Proper business valuation requires expertise, experience, and access to current market data. Whether you're planning to sell your business, seeking investment, or simply want to understand your company's worth, professional valuation services can provide the accuracy and credibility you need.</p>
          `,
          author: 'Rajesh Vadai',
          date: '2025-01-15',
          readTime: '8 min read',
          category: 'Valuation',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=300&fit=crop',
          featured: true,
        },
        {
          id: 2,
          title: 'Top 10 Investment Strategies for Small Businesses in 2025',
          excerpt:
            'Discover proven investment strategies that can help small businesses grow and maximize their returns.',
          content: `
            <h2>Investment Strategies for Small Business Growth</h2>
            <p>Small businesses face unique challenges when it comes to investment decisions. Limited resources, cash flow constraints, and market uncertainties require careful strategic planning.</p>
            
            <h2>1. Diversified Portfolio Approach</h2>
            <p>Don't put all your eggs in one basket. Spread investments across different asset classes to minimize risk while maximizing potential returns.</p>
            
            <h2>2. Technology Infrastructure Investment</h2>
            <p>Investing in modern technology can significantly improve efficiency and competitiveness in today's digital marketplace.</p>
            
            <h2>3. Employee Development Programs</h2>
            <p>Your team is your most valuable asset. Investing in training and development pays dividends through improved productivity and retention.</p>
            
            <h2>4. Market Expansion Strategies</h2>
            <p>Consider geographic expansion or new product lines to diversify revenue streams and reduce dependency on single markets.</p>
            
            <h2>5. Strategic Partnerships</h2>
            <p>Form alliances with complementary businesses to share resources, reduce costs, and access new markets.</p>
            
            <h2>Conclusion</h2>
            <p>Successful small business investment requires balancing growth opportunities with risk management. Regular review and adjustment of your investment strategy is essential for long-term success.</p>
          `,
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
          content: `
            <h2>Indian Financial Sector Overview</h2>
            <p>The Indian financial sector has shown remarkable resilience and growth potential, making it an attractive destination for both domestic and international investors.</p>
            
            <h2>Current Market Trends</h2>
            <h3>Digital Banking Revolution</h3>
            <p>The rapid adoption of digital banking services has transformed the financial landscape, with fintech companies leading innovation.</p>
            
            <h3>Regulatory Environment</h3>
            <p>Recent regulatory changes by RBI and SEBI have created a more stable and transparent financial ecosystem.</p>
            
            <h2>Investment Opportunities</h2>
            <ul>
                <li>Banking sector consolidation</li>
                <li>Insurance market expansion</li>
                <li>Mutual fund industry growth</li>
                <li>Fintech innovation</li>
            </ul>
            
            <h2>Risk Factors</h2>
            <p>While opportunities abound, investors should be aware of potential risks including regulatory changes, economic volatility, and global market influences.</p>
            
            <h2>Future Outlook</h2>
            <p>The Indian financial sector is poised for continued growth, driven by increasing financial inclusion, technological advancement, and supportive government policies.</p>
          `,
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
          content: `
            <h2>Building Your Financial Foundation</h2>
            <p>Financial planning is crucial for young professionals starting their careers. Early planning can set the stage for long-term financial success and security.</p>
            
            <h2>1. Create an Emergency Fund</h2>
            <p>Build an emergency fund covering 6-12 months of expenses. This provides financial security and peace of mind during unexpected situations.</p>
            
            <h2>2. Start Investing Early</h2>
            <p>Take advantage of compound interest by starting your investment journey early. Even small amounts can grow significantly over time.</p>
            
            <h2>3. Understand Your Employee Benefits</h2>
            <p>Maximize employer-provided benefits including:</p>
            <ul>
                <li>Provident Fund contributions</li>
                <li>Health insurance coverage</li>
                <li>Stock options or ESOP</li>
                <li>Professional development allowances</li>
            </ul>
            
            <h2>4. Plan for Major Life Goals</h2>
            <p>Set specific financial goals for major life events like buying a home, marriage, or starting a family.</p>
            
            <h2>5. Build Good Credit History</h2>
            <p>Establish and maintain a good credit score through responsible credit card usage and timely loan payments.</p>
            
            <h2>Conclusion</h2>
            <p>Starting your financial planning journey early gives you a significant advantage. Focus on building good habits and staying consistent with your financial goals.</p>
          `,
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
          content: `
            <h2>Preparing for Business Valuation</h2>
            <p>Preparing for a business valuation requires careful planning and documentation. Proper preparation can significantly impact the accuracy and credibility of your valuation.</p>
            
            <h2>Financial Documentation</h2>
            <h3>Required Financial Statements</h3>
            <ul>
                <li>Audited financial statements for the last 3-5 years</li>
                <li>Monthly financial statements for the current year</li>
                <li>Tax returns for the business and key owners</li>
                <li>Cash flow statements and projections</li>
            </ul>
            
            <h2>Operational Information</h2>
            <p>Gather comprehensive information about your business operations:</p>
            <ul>
                <li>Organizational charts and key personnel information</li>
                <li>Customer concentration analysis</li>
                <li>Supplier relationships and contracts</li>
                <li>Competitive analysis and market position</li>
            </ul>
            
            <h2>Legal and Regulatory Documents</h2>
            <p>Ensure all legal documentation is current and accessible:</p>
            <ul>
                <li>Articles of incorporation and bylaws</li>
                <li>Shareholder agreements</li>
                <li>Material contracts and leases</li>
                <li>Intellectual property documentation</li>
            </ul>
            
            <h2>Common Preparation Mistakes</h2>
            <p>Avoid these common pitfalls when preparing for valuation:</p>
            <ul>
                <li>Incomplete or outdated financial records</li>
                <li>Lack of supporting documentation</li>
                <li>Unrealistic growth projections</li>
                <li>Ignoring market conditions</li>
            </ul>
            
            <h2>Working with Valuation Professionals</h2>
            <p>Choose experienced valuation professionals who understand your industry and can provide credible, defensible valuations for your specific needs.</p>
          `,
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
          content: `
            <h2>Investment Risk Management Fundamentals</h2>
            <p>Risk management is a fundamental aspect of successful investing. Understanding and managing various types of investment risks can help protect and grow your wealth over time.</p>
            
            <h2>Types of Investment Risks</h2>
            <h3>Market Risk</h3>
            <p>The risk of losses due to overall market movements. This affects all investments to some degree and cannot be eliminated through diversification.</p>
            
            <h3>Credit Risk</h3>
            <p>The risk that a borrower will default on their obligations, affecting bonds and other debt instruments.</p>
            
            <h3>Liquidity Risk</h3>
            <p>The risk of not being able to sell an investment quickly without significantly affecting its price.</p>
            
            <h3>Inflation Risk</h3>
            <p>The risk that inflation will erode the purchasing power of your investments over time.</p>
            
            <h2>Risk Management Strategies</h2>
            <h3>Diversification</h3>
            <p>Spread investments across different asset classes, sectors, and geographic regions to reduce overall portfolio risk.</p>
            
            <h3>Asset Allocation</h3>
            <p>Determine the appropriate mix of stocks, bonds, and other investments based on your risk tolerance and investment timeline.</p>
            
            <h3>Regular Rebalancing</h3>
            <p>Periodically adjust your portfolio to maintain your target asset allocation and risk level.</p>
            
            <h2>Risk Assessment Tools</h2>
            <p>Use various tools and metrics to assess and monitor portfolio risk:</p>
            <ul>
                <li>Standard deviation and volatility measures</li>
                <li>Beta coefficients</li>
                <li>Value at Risk (VaR) calculations</li>
                <li>Correlation analysis</li>
            </ul>
            
            <h2>Conclusion</h2>
            <p>Effective risk management is essential for long-term investment success. Regular monitoring and adjustment of your risk management strategy can help you achieve your financial goals while protecting your wealth.</p>
          `,
          author: 'Arjun Patel',
          date: '2025-01-03',
          readTime: '9 min read',
          category: 'Investment',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop',
        },
      ],
    }
  },
  computed: {
    featuredPost() {
      return this.blogPosts.find((post) => post.featured)
    },
    filteredPosts() {
      return this.blogPosts.filter((post) => {
        const matchesSearch =
          post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase())
        const matchesCategory =
          this.selectedCategory === 'All' || post.category === this.selectedCategory
        return matchesSearch && matchesCategory
      })
    },
    filteredRegularPosts() {
      return this.filteredPosts.filter((post) => !post.featured)
    },
    resultsCount() {
      return `${this.filteredPosts.length} article${this.filteredPosts.length !== 1 ? 's' : ''} found`
    },
    resultsTitle() {
      return this.searchTerm || this.selectedCategory !== 'All'
        ? 'Search Results'
        : 'Latest Articles'
    },
    showFeatured() {
      return this.selectedCategory === 'All' && !this.searchTerm
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
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    },
    filterPosts() {
      // This method is called by template but computation is handled by computed properties
    },
    openModal(postId) {
      const post = this.blogPosts.find((p) => p.id === postId)
      if (post) {
        this.selectedPost = post
        this.showModal = true
        document.body.style.overflow = 'hidden'
      }
    },
    closeModal() {
      this.showModal = false
      this.selectedPost = null
      document.body.style.overflow = 'unset'
    },
    closeModalOnOverlay(event) {
      if (event.target === event.currentTarget) {
        this.closeModal()
      }
    },
    subscribe() {
      if (this.email) {
        alert('Thank you for subscribing!')
        this.email = ''
      } else {
        alert('Please enter your email address.')
      }
    },
  },
  mounted() {
    // Add escape key listener for modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.showModal) {
        this.closeModal()
      }
    })
  },
}
</script>

<style scoped>
:root {
  --primary: #db4a2b;
  --primary-foreground: #fff1ef;
  --accent: #ffb1a0;
  --accent-foreground: #332a2e;
  --background: #fff1ef;
  --foreground: #332a2e;
  --secondary: #f2efef;
  --muted: #ffded7;
  --muted-foreground: #666;
  --border: #ffded7;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background-color: #fff1ef;
  color: #332a2e;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 241, 239, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #ffded7;
  padding: 1rem 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #332a2e;
}

.logo-icon {
  width: 2rem;
  height: 2rem;
  background: #db4a2b;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff1ef;
  font-weight: bold;
  font-size: 0.875rem;
}

.logo-text {
  font-weight: bold;
  font-size: 1.25rem;
}

.nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav a {
  text-decoration: none;
  color: #332a2e;
  transition: color 0.3s;
}

.nav a:hover {
  color: #db4a2b;
}

.nav .active {
  color: #db4a2b;
  font-weight: 500;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s;
  font-size: 0.875rem;
}

.btn-primary {
  background: #db4a2b;
  color: #fff1ef;
}

.btn-primary:hover {
  background: #c23e26;
}

.btn-outline {
  background: transparent;
  color: #332a2e;
  border: 1px solid #ffded7;
}

.btn-outline:hover {
  background: #f2efef;
}

/* Hero Section */
.hero {
  padding: 5rem 0;
  text-align: center;
}

.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #ffb1a0;
  color: #332a2e;
  border-radius: 1rem;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero .highlight {
  color: #db4a2b;
}

.hero p {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

.search-filter {
  display: flex;
  gap: 1rem;
  max-width: 32rem;
  margin: 0 auto;
  flex-wrap: wrap;
}

.search-input {
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #ffded7;
  border-radius: 0.375rem;
  background: #fff1ef;
  min-width: 200px;
}

.category-select {
  padding: 0.75rem;
  border: 1px solid #ffded7;
  border-radius: 0.375rem;
  background: #fff1ef;
}

/* Featured Section */
.featured {
  padding: 4rem 0;
  background: #f2efef;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.featured-card {
  background: white;
  border-radius: 0.5rem;
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
  top: 1rem;
  left: 1rem;
  background: #db4a2b;
  color: #fff1ef;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
}

.featured-content {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.75rem;
  border: 1px solid #ffded7;
  border-radius: 1rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  width: fit-content;
}

.featured-content h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.featured-content p {
  color: #666;
  margin-bottom: 1.5rem;
}

.meta {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

/* Blog Grid */
.blog-section {
  padding: 5rem 0;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.blog-card {
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s;
  display: flex;
  flex-direction: column;
}

.blog-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.blog-image {
  position: relative;
  height: 200px;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.blog-badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #f2efef;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.blog-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.blog-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-content p {
  color: #666;
  margin-bottom: 1rem;
  flex: 1;
}

.blog-meta {
  display: flex;
  gap: 1rem;
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 1rem;
}

/* Newsletter */
.newsletter {
  padding: 5rem 0;
  background: #db4a2b;
  color: #fff1ef;
  text-align: center;
}

.newsletter h2 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.newsletter p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 24rem;
  margin: 0 auto;
  flex-wrap: wrap;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 0.375rem;
  min-width: 200px;
}

.newsletter-btn {
  background: white;
  color: #332a2e;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: 500;
}

.newsletter-btn:hover {
  background: #f0f0f0;
}

/* Footer */
.footer {
  background: #332a2e;
  color: #fff1ef;
  padding: 4rem 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-section h4 {
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-section a {
  color: rgba(255, 241, 239, 0.8);
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: #fff1ef;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 241, 239, 0.2);
  padding-top: 2rem;
  text-align: center;
  color: rgba(255, 241, 239, 0.6);
}

/* Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 100;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.modal.active {
  display: flex;
}

.modal-content {
  background: #fff1ef;
  border-radius: 0.5rem;
  max-width: 4xl;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.25);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #ffded7;
  background: #fff1ef;
  position: sticky;
  top: 0;
}

.modal-close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.25rem;
  color: #332a2e;
}

.modal-close:hover {
  background: #f2efef;
}

.modal-body {
  overflow-y: auto;
  max-height: calc(90vh - 140px);
}

.modal-article-header {
  padding: 1.5rem;
  border-bottom: 1px solid #ffded7;
}

.modal-article-header img {
  width: 100%;
  height: 16rem;
  object-fit: fill;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
}

.modal-article-header h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.modal-meta {
  display: flex;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
}

.modal-excerpt {
  font-size: 1.125rem;
  color: #666;
}

.modal-content-area {
  padding: 1.5rem;
}

.modal-content-area h2 {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1.5rem 0 1rem 0;
  color: #332a2e;
}

.modal-content-area h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 1.25rem 0 0.75rem 0;
  color: #332a2e;
}

.modal-content-area p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.modal-content-area ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.modal-content-area li {
  margin-bottom: 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-top: 1px solid #ffded7;
  background: #fff1ef;
  position: sticky;
  bottom: 0;
}

.modal-author {
  font-size: 0.875rem;
  color: #666;
}

.modal-actions {
  display: flex;
  gap: 0.5rem;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 0;
}

.no-results-icon {
  font-size: 4rem;
  color: #666;
  margin-bottom: 1rem;
}

.no-results h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .nav {
    display: none;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .featured-card {
    grid-template-columns: 1fr;
  }

  .search-filter {
    flex-direction: column;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .modal-content {
    margin: 1rem;
    max-height: calc(100vh - 2rem);
  }
}

/* Hidden class */
.hidden {
  display: none !important;
}
</style>
