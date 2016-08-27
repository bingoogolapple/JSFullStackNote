<template>
  <form v-on:submit.prevent="onSubmitComment">
    <group title="邮箱">
      <x-input placeholder="请输入邮箱" is-type=email :value.sync="author"></x-input>
    </group>
    <group title="评论">
      <x-textarea :max="20" placeholder="请输入评论" :value.sync="text"></x-textarea>
    </group>
    <x-button class="submit-btn" type="primary">添加评论</x-button>
  </form>
</template>
<style scoped>
  .submit-btn {
    margin-top: 40px;
  }
</style>
<script>
  import Group from 'vux-components/group'
  import XInput from 'vux-components/x-input'
  import XTextarea from 'vux-components/x-textarea'
  import XButton from 'vux-components/x-button'

  export default{
    data: function () {
      return {
        author: "",
        text: ""
      }
    },
    components: {Group, XInput, XTextarea, XButton},
    methods: {
      onSubmitComment: function () {
        if (this.author.length > 0 && this.text.length > 0) {
          // 子组件向父组件传递用dispatch
          this.$dispatch('onSubmitComment', this.author, this.text)
        } else {
          alert("用户名或评论不能为空")
        }
      }
    },
    events: {
      onSubmitCommentSuccess: function () {
        this.author = ""
        this.text = ""
      }
    }
  }
</script>
