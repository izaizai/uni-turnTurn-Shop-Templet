### 轮播背景

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| list_data | Array |  []  | 数据，格式见下方的说明 |
| indexs | Number | 0 | 当前显示索引，0开始 |
| show | Boolean | false | 是否显示 |
| welcome | Boolean | false | 是否有顶部提示 |

点击事件未做，可自行扩展。

****

##### list_data 参数说明

| 参数 | 类型 |  说明 |
| --- | --- | --- |
| background | String | 图片地址 |

其它参数未做，可自行扩展。

****

##### 附加说明

使用方式：

```

<swiper-background :list_data="swiperList" :indexs="swiperIndex" :show="swiperShow" :welcome="swiperWelcome"/>

```
