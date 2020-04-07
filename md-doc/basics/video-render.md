### H5视频播放组件

此组件建议在APP端使用，不能在小程序上使用，仅支持H5和APP，开发此组件的目的是为了在APP上处理层级问题。

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| isSrc | String |  无  | 视频地址 |
| isNum | Number | 1 | 组件ID |
| isCover | String | 无 | 视频封面图地址 |

`isNum： 为了处理多视频的，如一个列表里，有多个视频，就需要分别设置此ID，否则会出现错乱等。`

其它扩展未做，可自行扩展。

****

##### 附加说明

使用示例：

```

<video-render :isCover="item.cover" :isSrc="item.video" :isNum="(index+1)"/>

```

