function makeAction(type) {
  return ({dispatch}, ...args) => dispatch(type, ...args)
}

const initComment = {
  time: new Date(),
  author: 'test@gmail.com',
  text: '测试内容'
}

// 模拟初始化数据
const initData = {
  // comments: [initComment]
  comments: []
}

export const initStore = ({dispatch}) => {
  dispatch('INIT_STORE', initData)
}

// 更新列表展示
export const setComments = makeAction('SET_COMMENTS')
