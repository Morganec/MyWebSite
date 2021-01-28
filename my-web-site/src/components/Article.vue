<template>
  <div class="article">
    <span class="article__title">{{title}}</span>
    <p class="article__resume">{{resume}}</p>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title:{
      type: String,
      required: true
    },
    resume:{
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/sass/variables.scss';
.article {
  width: 100%;
  height: auto;
  padding: 5em;
  border-bottom: solid 1px $color-dark-blue;
  &__title {
    color: $color-dark-blue;
    font-size: 1.5em;
  }

  &__resume {
    color: $color-dark-blue;
    font-size: 1em;
    height: 100%;
  }
}
</style>
