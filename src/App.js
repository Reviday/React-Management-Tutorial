import React, { Component } from 'react';
import Customer from './componets/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableCell>번호</TableCell>            
            <TableCell>이미지</TableCell>   
            <TableCell>이름</TableCell>   
            <TableCell>생년월일</TableCell>   
            <TableCell>성별</TableCell>   
            <TableCell>직업</TableCell>   
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
