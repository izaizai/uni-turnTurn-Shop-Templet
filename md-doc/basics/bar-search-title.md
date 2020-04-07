### 顶部搜索栏

****

##### 参数说明

| 参数 | 类型 | 默认 | 说明 |
| --- | --- | --- |
| bgColor | String |  无  | 背景颜色的class |
| content | String | 输入关键字 | 提示内容 |
| isBack | Boolean | true | 是否显示返回 |
| fixed | Boolean | true | 是否固定在顶部 |
| shadow | Boolean | false | 是否有阴影 |
| @contentTap | 事件 | 无返回内容 | 点击内容（搜索框）|
| @rightTap | 事件 | 无返回内容 | 右边被点击 |

****

##### 附加说明

右边显示内容的方式：（在小程序端不会显示右边内容）

```

<block slot="right"> 内容 </block>

```

使用示例：

```

<bar-search-title bgColor="bg-white" content="苹果8p" @contentTap="searchTap">
	<block slot="right">
		<text class="cuIcon-service"/>
	</block>
</bar-search-title>

```
