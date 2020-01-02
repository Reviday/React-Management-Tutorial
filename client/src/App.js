import React, { Component } from 'react';
import Customer from './componets/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing(2)
  }
})

/*

  [Component Lifecycle]

  1) constructor()

  2) componentWillMount()

  3) render()

  4) componentDidMount()

*/

/*

  props or state => shouldComponentUpdate()

*/

class App extends Component {

  state = { // state : 컴포넌트 내에서 변경될 수 있는 변수를 처리하고자 할때 사용
    customers: "",
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1})
  }

  render() {
    const { classes } = this.props; // props : 변경될 수 없는 데이터 명시
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
              this.state.customers ? this.state.customers.map(c => {
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
              }) : 
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/>
                </TableCell>
              </TableRow>
            }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
