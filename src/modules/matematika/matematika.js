import React from 'react';
import { Switch, Route} from 'react-router';
import { Jumbotron } from 'reactstrap';
import { Row, Col, Button } from 'reactstrap';
import mat5kl from './5klass/mat5kl';
import mat5kl_Integers from './5klass/mat5kl_Integers';
import mat5kl_Int_Chall from './5klass/mat5kl_Int_Chall';
import mat5kl_Segment from './5klass/mat5kl_Segment';
import mat5kl_Plane from './5klass/mat5kl_Plane';

import mat6kl from './6klass/mat6kl';
import mat6kl_divisor from './6klass/mat6kl_divisor';
import mat6kl_div_chall from './6klass/mat6kl_div_chall';

const Matematika = (props) => {
  return (

    <Switch>
      <Route exact path="/matematika/5klass" component={mat5kl}/>
      <Route exact path="/matematika/5klass/Integers" component={mat5kl_Integers}/>
      <Route exact path="/matematika/5klass/Integers/Challenge" component={mat5kl_Int_Chall}/>
      <Route exact path="/matematika/5klass/Segment" component= {mat5kl_Segment}/>
      <Route exact path="/matematika/5klass/Plane" component= {mat5kl_Plane}/>

      <Route exact path="/matematika/6klass" component={mat6kl}/>
      <Route exact path="/matematika/6klass/Divisor" component={mat6kl_divisor}/>
      <Route exact path="/matematika/6klass/Divisor/Challenge" component={mat6kl_div_chall}/>
      <Route exact path="/matematika" component={allMatematika}/>
      <Route component={allMatematika}/>
    </Switch>
  );
};

export default Matematika;

const allMatematika = (props) => {


  return (
    <Jumbotron>
      <h1 className="display-4">Математика. Правила, задачи, примеры</h1>
      <p className="lead">Классы</p>
      <Row>         <Col xs="1"><Button outline color="success">
          Математика 1 класс
      </Button>{' '}</Col>    </Row> <br/>
      <Row>         <Col xs="1"><Button outline color="success">
          Математика 2 класс
      </Button>{' '}</Col>    </Row><br/>
      <Row>         <Col xs="1"><Button outline color="success">
          Математика 3 класс
      </Button>{' '}</Col>    </Row><br/>
      <Row>         <Col xs="1"><Button outline color="success">
          Математика 4 класс
      </Button>{' '}</Col>    </Row><br/>
      <Row>         <Col xs="1"><Button outline color="success" href="/matematika/5klass">
          Математика 5 класс
      </Button>{' '}</Col>    </Row><br/>
      <Row>         <Col xs="1"><Button outline color="success" href="/matematika/6klass">
          Математика 6 класс
      </Button>{' '}</Col>    </Row><br/>

    </Jumbotron>

  );
};
