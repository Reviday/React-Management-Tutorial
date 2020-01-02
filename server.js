const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1', // 랜덤으로 이미지를 보여주는 기능을 수행하는 사이트 (64x64로 정의)
            'name' : '이순신',
            'birthday' : '960101',
            'gender' : '남자',
            'job' : '대학생'
          },
          {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '홍길동',
            'birthday' : '941212',
            'gender' : '남자',
            'job' : '프로그래머'
          },
          {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3', 
            'name' : '일지매',
            'birthday' : '901010',
            'gender' : '남자',
            'job' : '도둑'
          }
    ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`));

