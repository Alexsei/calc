import React from 'react';
import {  Button, Jumbotron, Alert } from 'reactstrap';

export default class mat6kl_divisor extends React.Component {
    render() {
      return (<Jumbotron>
          <h1 className="display-6">Делители и кратные. <Button outline color="info"    href='/matematika/6klass/Divisor/Challenge'> Задачи </Button>{' '}</h1>

        <p>  Правила</p>
        <hr  className="my-1" />
      <Alert color="success">    <p>Если одно натуральное число нацело делится на другое натуральное число,<br/>
          то первое число называют кратным второму числу,<br/>
          а второе число называют делителем первого числа. </p>
          </Alert>
<hr className="my-1" />
          <Alert color="success">
          <p>Делителем натурального числа a называют число,<br/> на которое a делится без остатка.</p></Alert>
<hr className="my-1" />
        <p>Определение делителя можно сформулировать также так:</p>
            <Alert color="success">
          <p>Пусть m и n — натуральные числа,<br/> тогда m — делитель числа n, <br/>если существует такое натуральное число k, что n=m⋅k.</p></Alert>
          <p>Пример:</p>
          <Alert color="info">
          <p>5 — делитель числа 120, т.к.  120=5*24.<br/>
          Число 15 имеет четыре делителя: 1,3,5,15, т.к. на каждое из них делится без остатка. <br/>
          Число 1 является делителем любого натурального числа.</p>
          </Alert>


<hr className="my-1" />
          <Alert color="success">
              <p>Кратным натуральному числу a называют число, которое делится без остатка на a.<br/>
              Любое натуральное число имеет бесконечно много кратных.<br/>
              Наименьшим из кратных натурального числа является само это число.<br/></p>
          </Alert>
          <p>Пример:</p>
          <Alert color="info">
            Первые пять чисел, кратных 9 такие: 9,18,27,36,45.
          </Alert>

          <Button outline color="info"    href='/matematika/6klass/Divisor/Challenge'> Задачи </Button>{' '}
    </Jumbotron>)
  }
}
