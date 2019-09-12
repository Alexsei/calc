import React from 'react';
import { Jumbotron } from 'reactstrap';
import Topic from '../topic';

const Topics = [
  {section:'Натуральные числа и шкалы', topics:[
      {name:'Натуральные числа', urlRules:'/matematika/5klass/Integers',
          uplExample:'/matematika/5klass/Integers/Example',
          urlChallenge:'/matematika/5klass/Integers/Challenge'},
      {name:'Отрезок. Длина отрезка. Треугольник', urlRules:'/matematika/5klass/Segment', uplExample:'', urlChallenge:''},
      {name:'Плоскость. Прямая. Луч', urlRules:'/matematika/5klass/Plane', uplExample:'', urlChallenge:''},
      {name:'Шкалы и координаты', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Сравнение чисел', urlRules:'', uplExample:'', urlChallenge:''}
    ]
  }
];

const mat5kl = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">Математика  5 класс. Правила, задачи, примеры</h1>
        <p className="lead">Оглавление</p>
          <Topic data={Topics}/>

            <hr className="my-1" />
              <hr className="my-1" />
                <hr className="my-1" />

            <p>3.	Плоскость. Прямая. Луч</p>
            <p>4.	Шкалы и координаты</p>
            <p>5.	Сравнение чисел</p>

        <hr className="my-1" />
          <p className="lead">Сложение и вычитание натуральных чисел</p>
            <p>6.	Сложение натуральных чисел и его свойства</p>
            <p>7.	Вычитание натуральных чисел и его свойства</p>
            <p>8. Уравнение</p>
        <hr className="my-1" />
          <p className="lead">Умножение и деление натуральных чисел</p>
          <p>9.	Умножение натуральных чисел и его свойства</p>
          <p>10.	Деление натуральных чисел и его свойства</p>
          <p>11.	Деление с остатком</p>
          <p>12.	Упрощение выражений</p>
          <p>13.	Порядок выполнения действий</p>
          <p>14.	Степень числа. Квадрат и куб числа</p>
        <hr className="my-1" />
          <p className="lead">Площади и объемы</p>

<p>15.	Формулы. Формула скорости</p>
<p>16.	Площадь. Формула площади прямоугольника</p>
<p>17.	Прямоугольный параллелепипед.Объем</p>
<hr className="my-1" />
<p className="lead">Обыкновенные дроби</p>

<p>18.	Окружность и круг</p>
<p>19.	Доли. Обыкновенные дроби</p>
<p>20.	Сравнение дробей</p>
<p>21.	Правильные и неправильные дроби</p>
<p>22.	Сложение и вычитание дробей с одинаковыми знаменателями</p>
<p>23.	Деление и дроби</p>
<p>24.	Смешанные числа</p>
<hr className="my-1" />
<p className="lead">Десятичные дроби. Сложение и вычитание десятичных дробей</p>

<p>25.	Десятичная запись дробных чисел</p>
<p>26.	Сравнение десятичных дробей</p>
<p>27.	Сложение и вычитание десятичных дробей</p>
<p>28.	Приближенные значения чисел. Округление чисел</p>
<hr className="my-1" />
<p className="lead">Умножение и деление десятичных дробей</p>

<p>29.	Умножение десятичных дробей</p>
<p>30.	Деление десятичных дробей</p>
<p>31.	Среднее арифметическое</p>
<p>32.	Проценты</p>
<hr className="my-1" />

      </Jumbotron>
    </div>
  );
};

export default mat5kl;
