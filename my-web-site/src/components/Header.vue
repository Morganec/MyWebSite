<template>
  <div class="header">
    <!--img :src="require('@/assets/images/canada-road.jpg')" alt="Canada road"-->
    <div class="header__content">
      <div class="header__first-title">HELLO,</div>
      <div class="header__second-title">I'm Morgane Cabrol</div>
     </div>
  </div>
</template>

<script>


export default {
  name: 'Header',
  props: {

  }
}
</script>

<style lang="scss">
@import '~@/assets/sass/variables.scss';
.header {
  width: 100%;
  height: 15em;
  background-color: $color-dark-blue;

  &__content {
    text-align: center;
    padding: 4em;
  }

  &__first-title {
    color: $color-orange;
    font-size: 3em;
  }

  &__second-title {
    color: $color-light-orange;
    font-size: 1.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
