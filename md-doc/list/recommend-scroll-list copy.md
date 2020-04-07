### 发现 - 为您推荐

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| list_data | Array | 无 | 列表数据 |
| isSort | String | recommend_scroll | 滑动标识的前缀 |
| @userTap | 事件 | (data,index) | 用户头像被点击 |
| @followTap | 事件 | (data,index) | 关注按钮被点击 |
| @viewAllTap | 事件 | 无 | 点击了查看更多 |

****

##### list_data 参数说明

| 参数 | 类型 |  说明 |
| --- | --- | --- |
| avatar | String | 头像地址 |
| name | String | 名称 |
| follow | Boolean | 是否已关注 |
| num | String | 附加内容 |
