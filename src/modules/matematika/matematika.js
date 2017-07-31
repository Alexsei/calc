import React from 'react';
import { Switch, Route} from 'react-router';
import mat5kl from './5klass/mat5kl';
import mat5kl_Integers from './5klass/mat5kl_Integers';
import mat5kl_Int_Chall from './5klass/mat5kl_Int_Chall';
const Matematika = (props) => {
  return (

    <Switch>
      <Route exact path="/matematika/5klass" component={mat5kl}/>
      <Route exact path="/matematika/5klass/Integers" component={mat5kl_Integers}/>
      <Route exact path="/matematika/5klass/Integers/Challenge" component={mat5kl_Int_Chall}/>
      <Route component={mat5kl}/>
    </Switch>
  );
};

export default Matematika;
