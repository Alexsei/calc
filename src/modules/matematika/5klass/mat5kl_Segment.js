import React from 'react';
import { Row, Col, Button, Jumbotron } from 'reactstrap';

export default class Topic extends React.Component {
    render() {
      return (<Jumbotron>
          <h1 className="display-6">Отрезок. Длина отрезка. Треугольник</h1>
<hr className="my-2" />
<Row>
        <p>  Простейшей геометрической фигурой является точка. </p>
        <p>Определение этой геометрической фигуре дать невозможно,
          но представление о ней каждый из вас знает. Давайте разберёмся, что же она из себя представляет.</p><br/>

          Если посмотреть на звёздное небо, то каждая из звёзд по отдельности будет представлять собой точку.
          А самым простым обозначением точки будет след на бумаге от касания заострённым карандашом.
          <br/>
          Точки принято обозначать большими буквами латинского алфавита: А, В, С, …<br/>
          Давайте отметим две точки, А и В. Если к двум этим точкам приложить линейку и провести вдоль неё
          прямую линию от точки А до точки В, то получится отрезок. Его обозначают именами точек, т. е. у нас получился отрезок АВ.
          Этот же отрезок можно обозначить ВА. Сами же точки А и В называют концами отрезка АВ.<br/>
          Как вы думаете: сколько ещё отрезков мы можем провести через эти две точки?<br/>
          Любые две точки можно соединить только одним отрезком.<br/>
          Определение<br/>
          Отрезок – это часть прямой линии между двумя точками, включая эти точки (концы).<br/>
          Давайте рассмотрим, как могут располагаться точки по отношению к отрезку. Изобразим отрезок MN.
          Поставим точки К, Е и Р таким образом: точку К на отрезок MN, а Е и Р вне его.<br/>
          Точка К лежит на отрезке. Записывают это так: . Говорят: «Точка К принадлежит отрезку MN».<br/>
          Точка К разделяет отрезок MN на 2 отрезка, MК и КN.<br/>
          Точки Е и Р не лежат на этом отрезке, поэтому записывают так: , . А говорят: «Точки Е и Р не принадлежат отрезку MN».<br/>
          Отрезки можно сравнивать между собой. А сравнивают их при помощи измерителя.<br/>
          Для этого ставят измеритель концами в точки отрезка, а затем прикладывают его к другому отрезку.<br/>
           Если отрезок выходит за пределы концов измерителя, то он больше исходного отрезка, если точки совпадают, значит, отрезки равны. А если же отрезок будет находиться между концами измерителя, то он меньше исходного.
          Посмотрим это на рисунке.<br/>
          У нас есть 3 отрезка: CD, EF и KL. Давайте сравним их. Для этого поставим измеритель концами соответственно в точки С и D.<br/>
          Дальше приложим измеритель к отрезку EF. Концы измерителя совпали с точками отрезка. Значит, отрезки CD и EF равны,
          записывают это так: CD = EF.  Дальше приложим измеритель к отрезку KL. Отрезок KL выходит за границы измерителя, значит,
          он длиннее отрезка CD. И записывают это так: CD меньше KL.<br/>
          А говорят:<br/>
           Отрезок CD короче отрезка KL           Также отрезки можно сравнивать с помощью линейки. Чтобы узнать, какой из отрезков длиннее, мы должны измерить длину каждого отрезка.
          На рисунке изображён отрезок РМ, его длина 1 см. Отрезок АВ состоит из трёх частей, каждая из которых равна отрезку РМ. Значит, длина отрезка АВ равна 3 см. Пишут так: АВ = 3 см.
          Длина отрезка АВ – это расстояние между точками А и В.<br/>
          Кроме сантиметра существуют и другие единицы измерения длины.<br/>
          Большие расстояния измеряют в километрах. Например, длина экватора Земли составляет 40 077 км.<br/>
</Row>
         <br/>

    </Jumbotron>)
  }
}
