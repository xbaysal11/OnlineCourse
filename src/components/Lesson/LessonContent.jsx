import React, { Component } from "react";
import { Button as BTN } from "antd";
import styled from "styled-components";
import CommentsList from "./CommentsList";
import MarkdownText from "../MarkdownText";

const data = [
    {
        id: 1,
        pelpful: 8,
        first_name: "Августина",
        last_name: "Аврона",
        date: "2018-10-09T23:30:38+00:00",
        text:
            "Не термометр, а настоящая станция - три в одном. Очень удобный, если у вас финка. Для влажных русских парных его ставить нельзя, наверное, из-за часов. А так, выдерживает небольшую влажность и очень высокую температуру. Отдельный плюс в том, что в нем есть часы - вечная проблема, что не знаешь, сколько просидел в сауне, и надо ли выходить, или еще можно посидеть.",
        children: [
            {
                id: 2,
                answer: { first_name: "Августина", last_name: "Аврона" },
                pelpful: 0,
                moderator: true,
                first_name: "Артемия",
                last_name: "Беатрисна",
                date: "2018-10-09T23:30:38+00:00",
                text:
                    "Благодарим за оставленный отзыв, и будем рады видеть вас снова!"
            }
        ]
    },
    {
        id: 3,
        pelpful: 0,
        first_name: "Владлена",
        last_name: "Власта",
        date: "2018-10-09T23:30:38+00:00",
        text:
            "'Стекло' у часов поплавилось при первой протопке , учитывая что термогирометр лежал на полке",
        children: [
            {
                id: 4,
                answer: { first_name: "Владлена", last_name: "Власта" },
                pelpful: 0,
                moderator: true,
                first_name: "Дарьяна",
                last_name: "Декабрина",
                date: "2018-10-09T23:30:38+00:00",
                text:
                    "Мы были очень расстроены тем, что вас случилось. Мы делаем все, чтобы исправить это недоразумение. Сообщите, пожалуйста, номер заказа и даты доставки (почта, любая другая связь), и с вами свяжется наш менеджер для уточнения деталей"
            }
        ]
    },
    {
        id: 5,
        pelpful: -4,
        first_name: "Ипатия",
        last_name: "Араидна",
        date: "2018-10-09T23:30:38+00:00",
        text:
            "Подскажите куда крепятся жалюзи не поняла ? На пластиковое окно подходит ?"
    }
];

class LessonContent extends Component {
    render() {
        return (
            <Wrapper>
                <MarkdownText
                    text="
                        Добро пожаловать!
                        Мы рады, что вы заинтересовались курсом  'Web технологии'.
                        Перед началом занятий мы хотели бы немного рассказать о формате обучения и о том, как надо проходить шаги и уроки на платформе Stepik.
                        Страница, на которой вы сейчас находитесь — это шаг («стэп»). Шаги сгруппированы в уроки. 
                        Наверху вы видите индикатор прогресса, который показывает, сколько шагов урока вы уже прошли, 
                        и сколько еще осталось. Важная часть обучения — закрепление изученного материала через прохождение 
                        тестов, решение задач и выполнение заданий. На платформе Stepik вам могут быть предложены — тесты, 
                        табличные и текстовые задачи, задачи на сопоставление и сортировку, формулы, пазлы, задачи на данные и 
                        программирование. По результатам заданий вам будет поставлена оценка за курс, что позволит получить 
                        сертификат.  
                        **Сертификаты получают студенты набравшие 50 баллов, студенты набравшие 75 баллов и выше 
                        получают сертификат с отличием.
                        ** Чтобы все функции видео-плеера (например, ускорение видео, которое 
                        вам может пригодиться, если вы захотите прослушать лекции побыстрее) работали корректно, используйте 
                        одну из последних версий браузера. Подробнее о поддерживаемых версиях — 
                        [по ссылке](http://caniuse.com/#search=mp4) . Несмотря на то, что в курсе есть видео и текстовые 
                        материалы, рекомендуем вести конспект или хотя бы делать заметки. Так материал будет лучше
                        запоминаться. И желаем удачи!"
                />

                <Button className="next_btn">Следующий шаг</Button>
                <CommentsList comments={data} />
            </Wrapper>
        );
    }
}
export default LessonContent;
const Wrapper = styled.div`
    padding: 1.5em;
    background: #fff;
    & .next_btn {
        margin: 1em;
    }
`;
const Button = styled(BTN)``;
