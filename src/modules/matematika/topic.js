import React from 'react';
import { Row, Col, Button } from 'reactstrap';

class Topics extends React.Component {

  render() {
    var data = this.props.data;
    var i = data.i;
    var itemTop = data.topics.map (function(item, index){
      return (
        <div>

          <Row>
             <Col xs="4">{i}.{index+1}. {item.name}</Col>
             <Col xs="1"><Button outline color="success" href={item.urlRules}  > Правила</Button>{' '}</Col>
             <Col xs="1"><Button outline color="warning" href={item.uplExample}>   Примеры</Button>{' '}</Col>
             <Col xs="1"><Button outline color="info"    href={item.urlChallenge}> Задачи </Button>{' '}</Col>
          </Row>
        </div>
        )
    })
    return (   <div>     {itemTop}     </div>)
  }
};

export default class Topic extends React.Component {
    render() {
      var data = this.props.data;
      var Top = data.map (function(item, index){
        item.i=index+1
        return (
            <div>
              <hr className="my-1" />
              <p className="lead">{index+1}. {item.section}</p>
              <Topics data={item} />
            </div>
          )
      })
      return (<div>{Top}</div>)
  }
}
