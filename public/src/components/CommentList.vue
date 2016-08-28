<template>
  <div class="comment-list">
    <comment v-for="comment in getComments" track-by="$index" :comment="comment">
    </comment>
  </div>
</template>
<style scoped>
  .comment-list {
    min-height: 320px;
  }
</style>
<script>
  import Comment from './Comment.vue'
  import { getComments } from '../vuex/getters';

  export default{
    components: {Comment},
    vuex: {
      getters: {
        getComments
      }
    }
  }
</script>
