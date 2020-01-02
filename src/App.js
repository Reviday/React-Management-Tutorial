import React, { Component } from 'react';
import Customer from './componets/Customer'
import './App.css';

const customer = [
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
]


class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
            <Customer
              key={c.id} // map을 사용할 때는 key를 사용해야만 한다.
              id={c.id}
              image={c.image}
              birthday={c.birthday}
              gender={c.birthday}
              job={c.job}
            />
            );
          })
        }
      </div>
    );
  }
}

export default App;
