### 弹出图片框

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| src | String |  无  | 图片地址 |
| show | Boolean | false | 是否显示 |
| @imgTap | 事件 | 无返回内容 | 图片被点击 |
| @closeTap | 事件 | 无返回内容 | 点击了关闭|

****

##### 附加说明

使用方式：

```

<modal-img :show="modalShow" src="/static/images/home/sundry/reward.png" @imgTap="imgTap" @closeTap="closeTap"/>

```
