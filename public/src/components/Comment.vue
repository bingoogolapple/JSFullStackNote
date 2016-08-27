<template>
  <div>
    <div>
      <span>{{comment.author}}</span>
      <div>
        <span>{{fromNow(comment.date)}}</span>
      </div>
      <div>{{comment.text}}</div>
    </div>
  </div>
</template>
<style scoped>
  div span {
    color: #42b983;
  }

  div div {
    padding: 4px;
    color: #51535B;
  }
</style>
<script>
  import {fromNow, locate} from 'silly-datetime';
  locate('zh-cn');

  export default{
    props: ['comment'],
    methods: {
      fromNow: fromNow
    },
    ready: function () {
      console.log("Comment ready")
    }
  }
</script>
