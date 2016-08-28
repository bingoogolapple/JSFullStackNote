<template>
  <form @submit.prevent="onSubmitComment">
    <group title="邮箱">
      <x-input placeholder="请输入邮箱" is-type=email :value.sync="author"></x-input>
    </group>
    <group title="评论">
      <x-textarea :max="30" placeholder="请输入评论" :value.sync="text"></x-textarea>
    </group>
    <x-button class="submit-btn" type="primary">添加评论</x-button>
    <toast :show.sync="isShowMsg" type="cancel">{{msg}}</toast>
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
  import Toast from 'vux-components/toast'

  import { setComments } from '../vuex/actions'

  export default{
    data: function () {
      return {
        author: "",
        text: "",
        msg: "",
        isShowMsg: false
      }
    },
    components: {Group, XInput, XTextarea, XButton, Toast},
    vuex: {
      actions: {
        setComments
      }
    },
    methods: {
      onSubmitComment: function () {
        if (this.author.length > 0 && this.text.length > 0) {
          var formData = new FormData();

          formData.append('author', this.author);
          formData.append('text', this.text);

          this.$http.post('/comment', formData).then((response) => {
            let result = response.json()

            if (result.code == 0) {
              this.author = '';
              this.text = '';

              this.setComments(result.data)
            } else {
              this.msg = result.msg
              this.isShowMsg = true
            }
          }, (response) => {
            this.msg = "评论失败"
            this.isShowMsg = true
          });
        } else {
          this.msg = "用户名或评论不能为空"
          this.isShowMsg = true
        }
      }
    }
  }
</script>
