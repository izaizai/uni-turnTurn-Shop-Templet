### 顶部欢迎提示
一般用在启动APP时，弹出欢迎提示的。

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| content | String |  无  | 内容 |
| show | Boolean | false | 是否显示 |
| c_s | Number | 5000 | 关闭时间 |
| @closeFinish | 事件 | 返回 false | 已关闭 |

****

##### 附加说明

使用方式：

```

<welcome-tip content="中午好，仔仔" :show="true" :c_s="3000" @closeFinish="welcomeClose"/>

```

