<template>
  <div class="navbar">
    <header :class="{'scrolled-nav' : scrollPosition }">
      <nav>
        <div class="branding">
          <img src="@/assets/Vintage-Tristan-Fernandez-1000px.png" alt="">
        </div>
        <ul v-show="!mobile" class="navigation">
          <li><router-link class="navigation__link"></router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
