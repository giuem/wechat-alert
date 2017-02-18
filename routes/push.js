const axios = require('axios')
const config = require('../config')

axios.defaults.baseURL = 'https://qyapi.weixin.qq.com/cgi-bin'
axios.interceptors.response.use(response => {
    if (response.data.errcode) {
        return Promise.reject(response)
    } else {
        return response
    }
}, error => {
    return Promise.reject(error);
});

module.exports = (req, res) => {
    axios.get('/gettoken', {
        params: {
            corpid: config.wechat.corpID,
            corpsecret: config.wechat.secret
        }
    }).then(response => {
        return axios.post('/message/send', {
            touser: req.query.touser || '@all',
            msgtype: 'text',
            agentid: req.query.agentid || 0,
            text: {
                content: req.query.text
            },
            safe: 0
        }, { params: { access_token: response.data.access_token } })
    }).then(response => {
        res.status(200)
        res.send(response.data)
    }).catch(response => {
        res.status(400)
        res.send(response.data)
    })
}