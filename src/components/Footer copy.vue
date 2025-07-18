<template>
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
</template>

<script>
export default {
  name: 'FooterSection',
}
</script>

<style scoped>
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
</style>
