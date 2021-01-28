<template>
  <div class="bottom">
    <span class="bottom__contact-text">morgane.cabrol@conformit.com</span>
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
  background-color: $color-black;
  height: 5em;
  align-content: end;

  &__contact-text {
    color: white;
    text-align: right
  }
}
</style>
