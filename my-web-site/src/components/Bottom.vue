<template>
  <div class="bottom">
    <div class="bottom__contact-text">morgane.cabrol@conformit.com</div>
    <div class="bottom__contact-text">581-317-1899</div>
  </div>
</template>

<script>
export default {
  name: 'Bottom',
  props: {

  }
}
</script>

<style lang="scss">
@import '~@/assets/sass/variables.scss';
.bottom {
  width: 100%;
  background-color: $color-dark-blue;
  height: 5em;
  align-content: end;
  text-align: center;
  padding: 1em;
  &__contact-text {
    color: $color-light-orange;
  }
}
</style>
