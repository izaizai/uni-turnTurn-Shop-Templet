### 直播列表(瀑布流)

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
| cover_img | String | 背景图片地址 |
| tag | String | 观看人数 |
| tag_title | Array | 鉴别中 |
| tag_time | String | 预约中 |
| tag_red | String | 红包 |
| tag_red_bg | String | 特惠 |
| title | String | 标题 |
| name | String | 主播名称 |
| avatar | String | 主播头像 |
| appreciate | String | 点赞数量 |


tag、tag_title、tag_time 三个参数中，选一个即可。

tag_red、tag_red_bg 两个参数中，选一个即可。

多个填写的话，会显示错位，如有需要，可自行修改。
