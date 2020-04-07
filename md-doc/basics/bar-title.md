### 顶部标题栏

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| bgColor | String |  无  | 背景颜色的class |
| isBack | Boolean | true | 是否显示返回 |
| backText | String | 无 | 返回区显示文字 |
| fixed | Boolean | true | 是否固定在顶部 |
| shadow | Boolean | false | 是否有阴影 |
| @leftTap | 事件 | 无返回内容 | 左边被点击（isBack为false时有效） |
| @contentTap | 事件 | 无返回内容 | 标题被点击|
| @rightTap | 事件 | 无返回内容 | 右边被点击 |

****

##### 附加说明

左边显示内容的方式：（isBack为false时有效）

```

<block slot="left"> 内容 </block>

```

中间显示内容的方式：（标题区域）

```

<block slot="content"> 内容 </block>

```


右边显示内容的方式：（在小程序端不会显示右边内容）

```

<block slot="right"> 内容 </block>

```

使用示例：

```
<bar-title bgColor="bg-white" :isBack="false" @rightTap="barTitleRightTap">

	<block slot="left">资料</block>

	<block slot="content">消息中心</block>
	
	<block slot="right">
		<text class="cuIcon-info"/>
	</block>
	
</bar-title>

```
