### 发现 - 动态列表

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| list_data | Array | 无 | 列表数据 |
| isMin | Number | 0 | 开始索引 |
| isMax | Number | 0 | 结束索引 |
| viewBtn | Boolean | false | 查看ta的按钮 |
| @listTap | 事件 | (data,index) | 被点击 |
| @imgTap | 事件 | (img,arr,index) | 图片被点击 |
| @userTap | 事件 | (data,index) | 用户被点击 |
| @followTap | 事件 | (data,index) | 关注被点击 |
| @contentTap | 事件 | (data,index) | 内容被点击 |
| @talkTap | 事件 | (data,index) | 话题被点击 |
| @forwardTap | 事件 | (data,index) | 分享被点击 |
| @commentTap | 事件 | (data,index) | 评论被点击 |
| @appreciateTapp | 事件 | (data,index) | 点赞被点击 |

isMin 和 isMax用于区间显示。

****

##### list_data 参数说明

| 参数 | 类型 |  说明 |
| --- | --- | --- |
| avatar | String | 头像图片地址 |
| username | String | 用户名称 |
| time | String | 时间 |
| follow | Boolean | 是否已关注 |
| text | String | 内容 |
| text_btn | Boolean | 是否显示查看全文 |
| video | String | 视频地址 |
| img | Array | 图片地址 |
| talk | Array | 话题 |
| comment | Array | 评论数量 |
| appreciate_btn | Boolean | 是否已点赞 |
| appreciate | Array | 点赞数量 |
