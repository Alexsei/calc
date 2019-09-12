import React from 'react';
//import ReactDOM from 'react-dom';
import { Row, Col, Button, Input, FormGroup, Jumbotron,  Alert } from 'reactstrap';
//import Num from '../num_letters';

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
      this.state = {
      }
  }

  render() {
    var data = this.props.data.item;
    var index = this.props.data.index;
    return (
      <FormGroup check>
      <Alert color="success">
      <Row >

         <Col xs="3">{data[0]}</Col>
          <Col xs="1"><Input ref={"In"+index} type="radio" name={"r"+index} value={data[1]} />{data[1]}</Col>
          <Col xs="1"><Input ref={"In"+index} type="radio" name={"r"+index} value={data[2]} />{data[2]}</Col>
          <Col xs="1"><Input ref={"In"+index} type="radio" name={"r"+index} value={data[3]} />{data[3]}</Col>
          <Col xs="1"><Input ref={"In"+index} type="radio" name={"r"+index} value={data[4]} />{data[4]}</Col>
          <Col xs="1"><Input ref={"In"+index} type="radio" name={"r"+index} value={data[5]} />{data[5]}</Col>

      </Row></Alert></FormGroup>)
}
}



class Chall01 extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.onBtnClick.bind(this);
    var data = []
    for (var i = 0; i < 5; i++) {
    data.push(this.generatorPrimera())
      }
    this.state = {
        data: data
    }
  }

  generatorPrimera() {
    var delit = Math.floor(Math.random() * (9) + 2)
    var krat = delit * Math.floor(Math.random() * (3) + 2)
    var neKratn = []
    for (var i = 0; i < 4; i++) {
      var neKratn_k = Math.floor(Math.random() * (50) + 2)

      if (Number(neKratn_k / delit) === Number(Math.floor(neKratn_k / delit))) {

        i--
      } else {
      neKratn.push(neKratn_k)
      }

    }
    var rezult = []
    switch (Math.floor(Math.random() * (4) + 1)) {
      case 1:
        rezult = [delit, krat, neKratn[0], neKratn[1], neKratn[2], neKratn[3]]
      break;
      case 2:
        rezult = [delit, neKratn[0], krat, neKratn[1], neKratn[2], neKratn[3]]
      break;
      case 3:
        rezult = [delit, neKratn[0], neKratn[1], krat, neKratn[2], neKratn[3]]
      break;
      case 4:
        rezult = [delit, neKratn[0], neKratn[1], neKratn[2], krat, neKratn[3]]
      break;
      case 5:
        rezult = [delit, neKratn[0], neKratn[1], neKratn[2], neKratn[3], krat]
      break;
      default:
        rezult = [delit, krat, neKratn[0], neKratn[1], neKratn[2], neKratn[3]]
    }
    return (rezult)
  }


  onBtnClick() {
    var ran = this.state.ranRef;
    var res = true;
    for (var i = 0; i < ran.length; i++) {

      if (!(this.refs[ran[i]].handleSubmit())) {
        res = false;
      }
    }
    alert(res)
  }


  render() {
    var data = this.state.data


    var Challs = data.map (function(item, index){
      return (
          <Line ref={"Line"+index}  data={ {item:item, index:index} }  key={index}/>
      )
    })

    return (<div>
      <p className="lead">Задание №1</p>
      <p> Выбери кратное числа: </p>
      <Row >

         <Col xs="3">Делитель </Col>
          <Col xs="5"> Варианты ответа</Col>

      </Row>
    {Challs}
        <Col xs="3"><Button color="warning">Проверить</Button></Col>
      </div>)
  }
};
