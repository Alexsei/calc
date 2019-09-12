import React from 'react';
import { Jumbotron } from 'reactstrap';
import Topic from '../topic';

const Topics = [
  {section:'Делимость чисел', topics:[
      {name:'Делители и кратные', urlRules:'/matematika/6klass/Divisor', urlChallenge:'/matematika/6klass/Divisor/Challenge'},
      {name:'Признаки делимости на 10, на 5 и на 2', urlRules:'',  urlChallenge:''},
      {name:'Признаки делимости на 9 и на 3', urlRules:'',  urlChallenge:''},
      {name:'Простые и составные числа', urlRules:'',  urlChallenge:''},
      {name:'Разложение на простые множители', urlRules:'',  urlChallenge:''},
      {name:'Разложение на простые множители', urlRules:'',  urlChallenge:''},
      {name:'Наибольший общий делитель. Взаимно простые числа', urlRules:'',  urlChallenge:''},
      {name:'Наименьшее общее кратное', urlRules:'',  urlChallenge:''}
    ]
  },
  {section:'Сложение и вычитание дробей с разными знаменателями', topics:[
      {name:'Основное свойство дроби', urlRules:'',  urlChallenge:''},
      {name:'Сокращение дробей', urlRules:'',  urlChallenge:''},
      {name:'Приведение дробей к общему знаменателю', urlRules:'',  urlChallenge:''},
      {name:'Сравнение, сложение и вычитание дробей с разными знаменателями', urlRules:'',  urlChallenge:''},
      {name:'Сложение и вычитание смешанных чисел', urlRules:'',  urlChallenge:''},
    ]
  },
  {section:'Умножение и деление обыкновенных дробей', topics:[
      {name:'Умножение дробей', urlRules:'', urlChallenge:''},
      {name:'Нахождение дроби от числа', urlRules:'',  urlChallenge:''},
      {name:'Применение распределительного свойства умножения', urlRules:'',  urlChallenge:''},
      {name:'Взаимно обратные числа', urlRules:'',  urlChallenge:''},
      {name:'Деление дробей', urlRules:'',  urlChallenge:''},
      {name:'Нахождение числа по его дроби', urlRules:'',  urlChallenge:''},
      {name:'Дробные выражения', urlRules:'',  urlChallenge:''},
    ]
  },
  {section:'Отношения и пропорции', topics:[
      {name:'Отношение двух чисел', urlRules:'', urlChallenge:''},
      {name:'Пропорции', urlRules:'',  urlChallenge:''},
      {name:'Прямая и обратная пропорциональные зависимости', urlRules:'',  urlChallenge:''},
      {name:'Масштаб', urlRules:'',  urlChallenge:''},
      {name:'Длина окружности и площадь круга', urlRules:'',  urlChallenge:''},

    ]
  },
  {section:'Положительные и отрицательные числа', topics:[
      {name:'Координаты на прямой', urlRules:'', urlChallenge:''},
      {name:'Противоположные числа', urlRules:'',  urlChallenge:''},
      {name:'Модуль числа', urlRules:'',  urlChallenge:''},
      {name:'Сравнение чисел', urlRules:'',  urlChallenge:''},
      {name:'Изменение величин', urlRules:'',  urlChallenge:''},

    ]
  },
  {section:'Сложение и вычитание положительных и отрицательных чисел', topics:[
      {name:'Сложение чисел с помощью координатной прямой', urlRules:'', urlChallenge:''},
      {name:'Сложение отрицательных чисел', urlRules:'',  urlChallenge:''},
      {name:'Сложение чисел с разными знаками', urlRules:'',  urlChallenge:''},
      {name:'Вычитание', urlRules:'',  urlChallenge:''},
    ]
  },
  {section:'Умножение и деление положительных и отрицательных чисел', topics:[
      {name:'Умножение', urlRules:'', urlChallenge:''},
      {name:'Деление', urlRules:'',  urlChallenge:''},
      {name:'Рациональные числа', urlRules:'',  urlChallenge:''},
      {name:'Свойства действий с рациональными числами', urlRules:'',  urlChallenge:''},
    ]
  },
  {section:'Решение уравнений', topics:[
      {name:'Раскрытие скобок', urlRules:'', urlChallenge:''},
      {name:'Коэффициент', urlRules:'',  urlChallenge:''},
      {name:'Подобные слагаемые', urlRules:'',  urlChallenge:''},
      {name:'Решение уравнений', urlRules:'',  urlChallenge:''},
    ]
  },
  {section:'Координаты на плоскости', topics:[
      {name:'Координатная плоскость', urlRules:'', urlChallenge:''},
      {name:'Перпендикулярные прямые', urlRules:'',  urlChallenge:''},
      {name:'Параллельные прямые', urlRules:'',  urlChallenge:''},

    ]
  },
];


const mat5kl = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-4">Математика  6 класс. Правила, задачи, примеры</h1>
        <p className="lead">Оглавление</p>
          <Topic data={Topics}/>


      </Jumbotron>
    </div>
  );
};

export default mat5kl;
