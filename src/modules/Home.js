import React from 'react';
import { Jumbotron, } from 'reactstrap';

const Home = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Привет!</h1>
        <p className="lead">Этот сайт задуман как тренажер по школьным предметам.
        </p>
        <hr className="my-2" />
        <p>Выберите предмет и категорию примеров, приложение сгенерирует вам примеры, а затем проверит правельность ответов.</p>
      </Jumbotron>
    </div>
  );
};

export default Home;
