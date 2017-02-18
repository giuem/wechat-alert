# wechat-alert

微信企业号消息推送

## 安装

```shell
git clone https://github.com/giuem/wechat-alert.git
cd wechat-alert
npm install
```

## 开始使用

### 编辑 `config.js`

| 参数                                       | 说明       |
| ---------------------------------------- | -------- |
| [corpID](http://qydev.weixin.qq.com/wiki/index.php?title=CorpID) | 企业ID     |
| [secret](http://qydev.weixin.qq.com/wiki/index.php?title=Secret) | 管理组的凭证密钥 |

###  运行

```shell
npm start
```

## API

### GET `/push`

| 参数      | 必须   | 说明                  |
| ------- | ---- | ------------------- |
| text    | 是    | 推送文本内容，最长不超过2048个字节 |
| touser  | 否    | 消息接收者，默认为 @all      |
| agentid | 否    | 企业应用的id，默认为 0       |

详细说明请看[官方文档](http://qydev.weixin.qq.com/wiki/index.php?title=%E6%B6%88%E6%81%AF%E7%B1%BB%E5%9E%8B%E5%8F%8A%E6%95%B0%E6%8D%AE%E6%A0%BC%E5%BC%8F)

## License

MIT