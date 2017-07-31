import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button, Input, FormGroup, Jumbotron } from 'reactstrap';
import Num from '../num_letters';

export default class Topic extends React.Component {
    render() {


      return (<Jumbotron>
            <h1 className="display-6"> Натуральные числа</h1>
            <Chall01 />
    </Jumbotron>)
  }
}

class Line extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.onBtnClickHandler.bind(this);
      this.state = {
          color: '',
          item: this.props.data.item,
      }

  }
  onBtnClickHandler() {
    var red1 = Number(this.props.data.item);
    var red2 = parseFloat(ReactDOM.findDOMNode(this.refs.myInput).value);
    if ( red1===red2) {
      this.setState({
        color:'success'
      })
    } else {
      this.setState({
      color: 'warning'
      })
    }
  }
  render() {
    var data = this.props.data;
    return (
      <Row key= {this.props.data.index}>
         <Col xs="1">{data.index+1})</Col>
         <Col xs="6">{Num(data.item)}</Col>
         <Col xs="2">
          <FormGroup color={this.state.color}>
            <Input ref='myInput' state={this.state.color}  placeholder='?' data={data.item}/>
          </FormGroup>
        </Col>
          <Col xs="3"><Button onClick={this.handleSubmit} color="warning">Проверить</Button></Col>
      </Row>)
    }
}

class Chall01 extends React.Component {

  render() {
    var randomInt = [],
        max = 10000,
        min = 10

    for (var i = 0; i < 10; i++) {
      randomInt.push(String(Math.floor(Math.random() * (max - min + 1)) + min))
    }
    var Challs = randomInt.map (function(item, index){
      let itemData = {item:item, index:index}
      return (
          <Line data={itemData}/>
      )
    })

    return (<div>
      <p className="lead">Задание №1</p>

      {Challs}

      </div>)
  }
};
