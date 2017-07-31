import React from 'react';
import { Row, Col, Button } from 'reactstrap';


export default class itemTopic extends React.Component {

  render() {
    var data = this.props.data;
    var itemTop = data.map (function(item){
      return (
        <div>
            <Col xs="3">{item.name}</Col>
        </div>
        )
    })
    return (
      <div>
      <p className="lead">test</p>
      {itemTop}
      </div>)
}
};
