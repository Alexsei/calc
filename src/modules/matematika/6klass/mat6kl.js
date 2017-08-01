import React from 'react';
import { Jumbotron } from 'reactstrap';
import Topic from '../topic';

const Topics = [
  {section:'Делимость чисел', topics:[
      {name:'Делители и кратные', urlRules:'',uplExample:'', urlChallenge:''},
      {name:'Признаки делимости на 10, на 5 и на 2', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Признаки делимости на 9 и на 3', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Простые и составные числа', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Разложение на простые множители', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Разложение на простые множители', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Наибольший общий делитель. Взаимно простые числа', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Наименьшее общее кратное', urlRules:'', uplExample:'', urlChallenge:''}
    ]
  },
  {section:'Сложение и вычитание дробей с разными знаменателями', topics:[
      {name:'Основное свойство дроби', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Сокращение дробей', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Приведение дробей к общему знаменателю', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Сравнение, сложение и вычитание дробей с разными знаменателями', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Сложение и вычитание смешанных чисел', urlRules:'', uplExample:'', urlChallenge:''},
    ]
  },
  {section:'Умножение и деление обыкновенных дробей', topics:[
      {name:'Умножение дробей', urlRules:'',uplExample:'', urlChallenge:''},
      {name:'Нахождение дроби от числа', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Применение распределительного свойства умножения', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Взаимно обратные числа', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Деление дробей', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Нахождение числа по его дроби', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Дробные выражения', urlRules:'', uplExample:'', urlChallenge:''},
    ]
  },
  {section:'Отношения и пропорции', topics:[
      {name:'Отношение двух чисел', urlRules:'',uplExample:'', urlChallenge:''},
      {name:'Пропорции', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Прямая и обратная пропорциональные зависимости', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Масштаб', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Длина окружности и площадь круга', urlRules:'', uplExample:'', urlChallenge:''},

    ]
  },
  {section:'Положительные и отрицательные числа', topics:[
      {name:'Координаты на прямой', urlRules:'',uplExample:'', urlChallenge:''},
      {name:'Противоположные числа', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Модуль числа', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Сравнение чисел', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Изменение величин', urlRules:'', uplExample:'', urlChallenge:''},

    ]
  },
  {section:'Сложение и вычитание положительных и отрицательных чисел', topics:[
      {name:'Сложение чисел с помощью координатной прямой', urlRules:'',uplExample:'', urlChallenge:''},
      {name:'Сложение отрицательных чисел', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Сложение чисел с разными знаками', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Вычитание', urlRules:'', uplExample:'', urlChallenge:''},
    ]
  },
  {section:'Умножение и деление положительных и отрицательных чисел', topics:[
      {name:'Умножение', urlRules:'',uplExample:'', urlChallenge:''},
      {name:'Деление', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Рациональные числа', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Свойства действий с рациональными числами', urlRules:'', uplExample:'', urlChallenge:''},
    ]
  },
  {section:'Решение уравнений', topics:[
      {name:'Раскрытие скобок', urlRules:'',uplExample:'', urlChallenge:''},
      {name:'Коэффициент', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Подобные слагаемые', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Решение уравнений', urlRules:'', uplExample:'', urlChallenge:''},
    ]
  },
  {section:'Координаты на плоскости', topics:[
      {name:'Координатная плоскость', urlRules:'',uplExample:'', urlChallenge:''},
      {name:'Перпендикулярные прямые', urlRules:'', uplExample:'', urlChallenge:''},
      {name:'Параллельные прямые', urlRules:'', uplExample:'', urlChallenge:''},

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
