webpackJsonp([1,0],[function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var s=o(24),r=n(s),u=o(23),i=n(u),m=o(22),p=n(m),a=o(17),c=n(a);r["default"].use(i["default"]),r["default"].use(p["default"]);var d=new i["default"];d.map({}),d.start(c["default"],"#app")},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(19),r=n(s);e["default"]={components:{CommentBox:r["default"]}}},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(11);(0,n.locate)("zh-cn"),e["default"]={props:["comment"],methods:{fromNow:n.fromNow},ready:function(){console.log("Comment ready")}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(21),r=n(s),u=o(20),i=n(u);e["default"]={data:function(){return{comments:[]}},components:{CommentList:r["default"],CommentForm:i["default"]},events:{onSubmitComment:function(t,e){var o=this,n=new FormData;n.append("author",t),n.append("text",e),this.$http.post("/comment",n).then(function(t){var e=t.json();0==e.code?(o.comments=e.data,o.$broadcast("onSubmitCommentSuccess")):alert(e.msg)},function(t){alert("评论失败")})}},ready:function(){var t=this;this.$http.get("/comment").then(function(e){var o=e.json();0==o.code?t.comments=o.data:alert(o.msg)},function(t){alert("获取数据失败")})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{author:"",text:""}},methods:{onSubmitComment:function(){this.author.length>0&&this.text.length>0?this.$dispatch("onSubmitComment",this.author,this.text):alert("用户名或评论不能为空")}},events:{onSubmitCommentSuccess:function(){this.author="",this.text=""}}}},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var s=o(18),r=n(s);e["default"]={data:function(){return{}},components:{Comment:r["default"]},props:["comments"],ready:function(){console.log("CommentList ready")}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e){t.exports=" <div id=app> <comment-box></comment-box> </div> "},function(t,e){t.exports=" <div> <h1>Vue.js、Node.js学习笔记</h1> <div></div> <comment-list :comments=comments></comment-list> <comment-form></comment-form> </div> "},function(t,e){t.exports=" <form v-on:submit.prevent=onSubmitComment> <div> <input type=text placeholder=姓名 v-model=author /> </div> <div> <textarea type=text placeholder=评论 v-model=text></textarea> </div> <button type=submit>添加评论</button> </form> "},function(t,e){t.exports=' <div> <comment v-for="comment in comments" track-by=$index :comment=comment> </comment> </div> '},function(t,e){t.exports=' <div _v-84198b20=""> <div _v-84198b20=""> <span _v-84198b20="">{{comment.author}}</span> <div _v-84198b20=""> <span _v-84198b20="">{{fromNow(comment.date)}}</span> </div> <div _v-84198b20="">{{comment.text}}</div> </div> </div> '},function(t,e,o){var n,s;o(6),n=o(1),s=o(12),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;o(10),n=o(2),s=o(16),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;o(7),n=o(3),s=o(13),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;o(8),n=o(4),s=o(14),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},function(t,e,o){var n,s;o(9),n=o(5),s=o(15),t.exports=n||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)}]);
//# sourceMappingURL=app.46c61f762f1c6ab10b4e.js.map