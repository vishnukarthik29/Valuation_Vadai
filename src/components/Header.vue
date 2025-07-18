<template>
  <header>
    <div class="container">
      <div class="header-content">
        <div class="logo-section">
          <a href="/">
            <img src="/images/headerlogo.jpg" alt="Logo" style="height: 50px" />
          </a>
        </div>
        <nav>
          <ul class="nav-menu">
            <li><a href="/About">About Us</a></li>
            <li>
              <router-link to="/Appointment">
                <i class="bi bi-telephone-plus-fill"></i> Schedule the Call
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav',
}
</script>

<style scoped>
header {
  background: #db4a2b;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all 0.3s ease;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  align-items: center;
}

.nav-menu a {
  text-decoration: none;
  color: #f2efef;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-menu a:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #e4a72d;
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
</style>
