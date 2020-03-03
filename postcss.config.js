// 这是自己建的关于将px转换成vh的文件，以适应移动端的缩放问题

// mudule.exports = {
//   plugins: {
//     autoprefixer: {},
//     "postcss-px-to-viewport": {
//       viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度
//       viewportHeight: 667, // 视窗的高度，对应的是我们设计稿的高度（也可以不配置）
//       unitPrecision: 5, //指定px 转换成视窗单位值的小数位数(很多时候无法整除)
//       viewportUnit: 'vw', // 指定需要转换的视窗单位，建议使用vw
//       // selectorBlackList: ['ignore', 'tab-bar'], //指定不需要转换的类名
//       minPixelValue: 1, // 小于或等于1px不转换成视窗单位
//       mediaQuery: false, // 允许在媒体查询中转换px
//       // exclude: [/TabBar/], // 必须是正则，匹配组件的，匹配到的组件不用转换
//     },
//   }
// }

// 1.在js中使用正则：/正则相关规则/
// 2. exclude中存放的元素必须是正则表达式
// 3. 按照排除的组件写对应的正则
