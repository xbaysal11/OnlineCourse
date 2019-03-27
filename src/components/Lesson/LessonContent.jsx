import React, { Component } from "react";
import LessonComment from "./LessonComment";
import { List, Button as BTN } from "antd";
import styled from "styled-components";
import CommentsList from "./LessonComment";

const data = [
    {
        author: {
            first_name: "Yrys"
        },
        text: "awdawdawdawd",
        answers: [
            {
                author: {
                    first_name: "A"
                },
                text: "",
                answers: []
            }
        ]
    },
    {
        author: {
            first_name: "A"
        },
        text: ""
    }
];

class LessonContent extends Component {
    render() {
        return (
            <Wrapper>
                <CommentsList comments={data} />
                <div
                    id="ember4766"
                    class="step-view step-view_material ember-view"
                >
                    <div class="step-wrapper">
                        <div class="step-inner page-fragment">
                            <div
                                id="ember4767"
                                class="rich-text-viewer ember-view"
                                data-ready=""
                            >
                                <div class="rich-text-viewer__content">
                                    <p>Добро пожаловать!</p>
                                    <div>
                                        Мы рады, что вы заинтересовались курсом
                                        &nbsp;"Web технологии".
                                    </div>
                                    <div />
                                    <div>
                                        Перед началом занятий мы хотели бы
                                        немного рассказать о формате обучения и
                                        о том, как надо проходить шаги и уроки
                                        на платформе Stepik.
                                    </div>
                                    <div />
                                    <div>
                                        <p>
                                            Страница, на которой вы сейчас
                                            находитесь — это шаг («стэп»). Шаги
                                            сгруппированы в уроки. Наверху вы
                                            видите индикатор прогресса, который
                                            показывает, сколько шагов урока вы
                                            уже прошли, и сколько еще осталось.
                                        </p>

                                        <p>
                                            Важная часть обучения — закрепление
                                            изученного материала через
                                            прохождение тестов, решение задач и
                                            выполнение заданий. На платформе
                                            Stepik вам могут быть предложены —
                                            тесты, табличные и текстовые задачи,
                                            задачи на сопоставление и
                                            сортировку, формулы, пазлы, задачи
                                            на данные и программирование.
                                        </p>
                                        <p>
                                            По результатам заданий вам будет
                                            поставлена оценка за курс, что
                                            позволит получить сертификат.&nbsp;
                                            <b>
                                                Сертификаты получают студенты
                                                набравшие 50 баллов, студенты
                                                набравшие 75 баллов и выше
                                                получают сертификат с отличием.
                                            </b>
                                        </p>
                                        <p>
                                            Чтобы все функции видео-плеера
                                            (например, ускорение видео, которое
                                            вам может пригодиться, если вы
                                            захотите прослушать лекции
                                            побыстрее) работали корректно,
                                            используйте одну из последних версий
                                            браузера. Подробнее о поддерживаемых
                                            версиях —{" "}
                                            <a
                                                href="http://caniuse.com/#search=mp4"
                                                rel="nofollow noopener noreferrer"
                                                target="_blank"
                                            >
                                                по ссылке
                                            </a>
                                            .
                                        </p>
                                        <p>
                                            Несмотря на то, что в курсе есть
                                            видео и текстовые материалы,
                                            рекомендуем вести конспект или хотя
                                            бы делать заметки. Так материал
                                            будет лучше запоминаться.
                                        </p>
                                        <p>И желаем удачи!</p>
                                    </div>
                                    <div>
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button data-ember-action="" data-ember-action-4743="4743">
                    Следующий шаг&nbsp;&nbsp;
                    <span id="ember4744" />
                </Button>
                <List
                    className="comment-list"
                    header={`${4} replies`}
                    itemLayout="horizontal"
                    dataSource={[1, 2, 3, 4]}
                    renderItem={item => <LessonComment />}
                />
            </Wrapper>
        );
    }
}
export default LessonContent;
const Wrapper = styled.div`
    padding: 1.5em;
    background: #fff;
`;
const Button = styled(BTN)`
    text-align: right;
`;
