<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import 'semantic-ui-sass';



  export default {
  name: 'app'
}
</script>

<style lang="scss">
  // Semantic UI imports
  $import-google-fonts: true !default;
  $font-url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500,600;800&display=swap' !default;
  $font-name: 'Montserrat', sans-serif !default;
  $font-family: $font-name, 'Montserrat', sans-serif !default;

  $icons-font-path: '../node_modules/semantic-ui-sass/icons';
  $flags-image-path: '../node_modules/semantic-ui-sass/images';
  @import "~semantic-ui-sass/semantic-ui.scss";

  #app {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a{
    color: #0065ad;
  }

  // Overrides
  .ui.dimmer{
    background-color: rgba(0, 0, 0, 0.46) !important;
  }
</style>
