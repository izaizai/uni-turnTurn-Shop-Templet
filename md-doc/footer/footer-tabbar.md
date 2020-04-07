### 底部菜单导航栏

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| tabID | String,Number | 0 | 选中ID |
| msgDot | Boolean | false | 是否显示消息红点 |
| @tabTap | 事件 | 索引ID | 被点击 |

菜单导航的内容，请自行去组件里更换。

****

##### 附加说明

使用方式

```

<footer-tabbar :tabID='tabID' :msgDot='true' @tabTap='tabTap'/>

```
