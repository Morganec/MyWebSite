<template>
  <div id="app" class="main-app">
    <Header />
    <Article />
    <Article />
    <Article />
    <Bottom />
  </div>
</template>

<script>
import Article from './components/Article'
import Header from './components/Header'
import Bottom from './components/Bottom'

export default {
  name: 'App',
  components: {
    Article,
    Header,
    Bottom
  }
}
</script>

<style>

</style>

