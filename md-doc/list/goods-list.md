### 商品列表（瀑布流）

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| list_data | Array | 无 | 列表数据 |
| show | Boolean | true | 是否显示 |
| @listTap | 事件 | (data,index) | 被点击 |

****

##### list_data 参数说明

| 参数 | 类型 |  说明 |
| --- | --- | --- |
| v | Boolean | 是否认证 |
| pay | Boolean | 是否显示播放图标 |
| type | String | 类型，空为正常，'recommend'为推荐 |
| mold | Array | 图片底部左边的标签 |
| service | Array | 图片底部右边的标签 |
| price | String | 价格 |
| servicePlus | String | 价格后的小标签 |
| username | String | 用户名 |
| time | String | 时间或附加内容 |
| title | String | 商品标题 |
| img | String | 商品图片 |
| avatar | String | 用户头像图片 |

****

##### recommend 时的参数说明

此时：list_data的type为：'recommend'，并新增字段为：'list'（Array类型），'list'内的数据格式如下：

| 参数 | 类型 |  说明 |
| --- | --- | --- |
| title | String | 商品标题 |
| img | String | 商品图片 |

然后把recommend的数据，插入到list_data中即可，home.vue中有使用示例。
