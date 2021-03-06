import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button, Input, FormGroup, Jumbotron, Alert } from 'reactstrap';
import Num from '../num_letters';
import Mrouter from '../../mrouter';

export default class Chall extends React.Component {
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
      console.log (Mrouter.getURL('/'));
      this.handleSubmit = this.onBtnClickHandler.bind(this);
      this.state = {
          color: 'info',
          item: this.props.data.item,
      }
  }

  onBtnClickHandler() {  // проверить решение
    var red1 = Number(this.props.data.item);
    var red2 = parseFloat(ReactDOM.findDOMNode(this.refs.myInput).value);
    console.log(red1, red2);
    if ( red1===red2) { // если правельно окрасить в зеленый
      this.setState({
        color:'success'
      })
      return true
    } else { // если неправельно окрасить в красный
      this.setState({
      color: 'danger'
      })
      return false
    }
  }

  render() {
    var data = this.props.data;
    return (
  //
  <div color = {this.state.color}>
      <Row key= {this.props.data.index} >

         <Col xs="1">{data.index+1})</Col>
         <Col xs="6">{Num(data.item)}</Col>
         <Col xs="2">
              <Input ref='myInput' state={this.state.color}  placeholder='?' data={data.item}/>
         </Col>


      </Row>
        </div>
      //</Alert>
    )
    }
}



class Chall01 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.onBtnClick.bind(this);
    var ranInt = [],
        ranRef = [],
        maxStep = 4,
        min = 0
    for (var i = 0; i < 10; i++) {
      ranInt.push(String(Math.floor(Math.random() * (Math.pow(10, (Math.floor(Math.random() * maxStep)+2)) - min + 1)) + min))
      ranRef.push('Line'+i)
    }
    this.state = {
        ranInt: ranInt,
        ranRef: ranRef
    }
  }
  onBtnClick() {
    var ran = this.state.ranRef;
    var res = true;
    for (var i = 0; i < ran.length; i++) {

      if (!(this.refs[ran[i]].handleSubmit())) {
        res = false;
      }
    }
    console.info(res);
  }


  render() {
    var ranInt = this.state.ranInt
    var Challs = ranInt.map (function(item, index){
      let itemData = {item:item, index:index}
      return (
          <Line ref={"Line"+index}  data={itemData}  key={index}/>
      )
    })

    return (<div>
      <p className="lead">Задание №1</p>
      {Challs}
        <Col xs="3"><Button onClick={this.handleSubmit} color="warning">Проверить</Button></Col>
      </div>)
  }
};
