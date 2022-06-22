<template>
  <div class="navbar">
    <header :class="{ 'scrolled-nav': scrollPosition }">
      <nav class="navbar__nav">
        <div class="navbar__nav-branding">
          <img
            class="navbar__branding-img"
            src="@/assets/Vintage-Tristan-Fernandez-1000px.png"
            alt=""
          />
        </div>
        <ul v-show="!mobile" class="navbar__navigation">
          <li class="navbar__navigation-link">
            <router-link :to="{ name: 'home' }">Accueil</router-link>
          </li>
          <li class="navbar__navigation-link">
            <router-link :to="{ name: 'apropos' }">À propos</router-link>
          </li>
          <li class="navbar__navigation-link">
            <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
          </li>
          <li class="navbar__navigation-link">
            <router-link :to="{ name: 'contact' }">Contact</router-link>
          </li>
        </ul>
        <div class="icon">
          <i
            @click="toggleMobileNav"
            v-show="mobile"
            class="far fa-bars"
            :class="{ 'icon-active': mobileNav }"
          ></i>
        </div>
        <transition name="mobile-nav">
          <ul v-show="mobileNav" class="dropdown__nav">
            <li>
              <router-link
                class="navbar__navigation-link"
                :to="{ name: 'home' }"
                >Accueil</router-link
              >
            </li>
            <li>
              <router-link
                class="navbar__navigation-link"
                :to="{ name: 'apropos' }"
                >À propos</router-link
              >
            </li>
            <li>
              <router-link
                class="navbar__navigation-link"
                :to="{ name: 'portfolio' }"
                >Portfolio</router-link
              >
            </li>
            <li>
              <router-link
                class="navbar__navigation-link"
                :to="{ name: 'contact' }"
                >Contact</router-link
              >
            </li>
          </ul>
        </transition>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
header {
  background-color: rgba($color: #130b16, $alpha: 0.8);
  width: 100%;
  height: 12vh;
}

.navbar__nav {
  display: flex;
}

.navbar__navigation {
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  column-gap: 48px;
  margin: auto;
}

.navbar__navigation-link {
  justify-content: space-between;
  list-style: none;
  font-size: 2rem;
}

.navbar__nav-branding img {
  width: 150px;
  align-items: center;
}
</style>
