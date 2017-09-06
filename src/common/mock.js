import Mock from "mockjs"
const {Random} =Mock;
export const comments=Mock.mock({
    'commentList|5':[{
        'id':'@natural',
        'time':'@datatime(16-MM-dd HH:mm:ss)',
        'name':'@cname',
        'content':'@cparagraph',
        'url':Random.image('50*50',Random.color(),'#fff',Random.word(3,5))
    }]
})
export const musicTop=Mock.mock({
    'musicList|10':[
        {
            'uniquekey':'@natural',
            'title':'@ctitle(3,6)'
        }
    ]
})