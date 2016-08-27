<template>
  <div>
    <comment v-for="comment in comments" track-by="$index" :comment="comment">
    </comment>
  </div>
</template>
<style>
</style>
<script>
  import Comment from './Comment.vue'

  export default{
    data: function () {
      return {
      }
    },
    components: {Comment},
    props: ['comments'],
    ready: function () {
      console.log("CommentList ready")
    }
  }
</script>
