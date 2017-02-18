module.exports = {
    app: {
        port: 3030,
        auth: {
            user: process.env.HTTP_AUTH_USER || '',
            pass: process.env.HTTP_AUTH_PASS || '',
        }
    },
    wechat: {
        corpID: process.env.WECHAT_CORPID || '',
        secret: process.env.WECHAT_SECRET || ''
    }
}