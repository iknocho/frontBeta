import logo from './logo.svg';
import React, { Component } from "react";
import { Paper,List,Container } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component {
  constructor(props){
    super(props);
    //item->item배열로
    this.state={
      items:[
        { id: "0",title:"Hello World 1",done:true},
        {id:"1",title:"Hello World 2",done: false}
      ]
    };
    this.a={a:"1"};
  }
  
  //+버튼을 눌러 addtodo에 적혀있는 아이템을 app 컴포넌트 item변수에 저장 
  //app에서 실행됨 AddTodo에서 실행 x
  add=(item)=>{
    const thisItems=this.state.items;
    item.id="ID-"+thisItems.length//key를 위한 id추가
    item.done=false;
    thisItems.push(item);//리스트에 아이템추가
    this.setState({items:thisItems});//**업데이트는 this.setState를 사용해야함
    console.log("items:",this.state.items);
    console.log(this.a.a);
  }

  render() {
        //2.자바스크립트가 제공하는 map 함수를 이용해 배열을 반복해<Todo.../> 컴포넌트 생성
        var todoItems = this.state.items.length>0&&(
          <Paper style={{margine:16}}>
            <List>
              {this.state.items.map((item,idx)=>(
                <Todo item={item} key={item.id}/>
              ))}
            </List>
          </Paper>
        );
          //3. 생성된 컴포넌트 리턴
          return (
            <div className="App">
              <Container maxWidth="md">
                <AddTodo add={this.add}/>
                <div className="TodoList">{todoItems}</div>
              </Container>
            </div>);
  }
}

export default App;