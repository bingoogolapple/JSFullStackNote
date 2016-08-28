<template>
  <div>
    <div>
      <span class="author">{{comment.author}}</span>
      <span class="time">{{fromNow(comment.date)}}</span>
    </div>
    <div class="message">{{comment.text}}</div>
  </div>
</template>
<style scoped>
  .author {
    font-weight: 400;
    font-style: normal;
    color: #727272;
    width: 9em;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    margin-left: 0.4em;
    position: relative;
    overflow: visible
  }

  .author:before {
    content: " ";
    position: absolute;
    left: -0.4em;
    top: 50%;
    margin-top: -7px;
    width: 3px;
    height: 14px;
    background-color: #02bb00
  }

  .time {
    color: #8c8c8c;
    font-size: 10px
  }

  .message {
    color: #3e3e3e;
    line-height: 1.5
  }
</style>
<script>
  import {fromNow, locate} from 'silly-datetime';
  locate('zh-cn');

  export default{
    props: ['comment'],
    methods: {
      fromNow: fromNow
    }
  }
</script>
