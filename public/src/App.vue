<template>
  <div id="app">
    <comment-box></comment-box>
  </div>
</template>

<script>
import CommentBox from './components/CommentBox.vue'

export default {
  components: {
    CommentBox
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
