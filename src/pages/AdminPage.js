import React from "react";

export default class AdminPage extends React.Component {
    render() {
        let sortedAnswers = this.props.answers.sort((a, b) => {
            if (a.cl > b.cl) {
                return 1;
            } else {
                if (a.cl === b.cl) {
                    if (a.command > b.command) {
                        return -1;
                    } else {
                        if (a.command === b.command) {
                            if (a.timeTotal > b.timeTotal) {
                                return -1;
                            } else {
                                return 1;
                            }
                        }
                    }
                } else {
                    return -1;
                }
            }
        })

        return (
            <div>
                <p>Команда</p>
                <p>Класс</p>
                <p>Ответ</p>
                <p>Время total</p>
                <p>Время   Команды</p>
                <p>Верно?</p>
                <br/>
                {
                    sortedAnswers.map((answer, index) => (
                        <div>
                            <p>{answer.command}</p>
                            <p>{answer.cl}</p>
                            <p>{answer.answer}</p>
                            <p>{answer.timeTotal}</p>
                            <p>{answer.time}</p>
                            <p>{answer.correct}</p>
                            <br/>
                        </div>
                    ))
                }
            </div>
        )
    }
}