import React from "react";

export default class Hints extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let hint1 = "";
        let hint2 = "";
        let hint3 = "";

        switch (this.props.class) {
            case '1': {
                hint1 = "Даша помнит, что пароль содержит только цифры и заглавные буквы";
                hint2 = "Пароль связан с каким-то местом";
                hint3 = "В пароле точно есть дата рождения";
                break;
            }
            case '2': {
                hint1 = "Даша помнит, что пароль содержит цифры, заглавные буквы и специальный символ";
                hint2 = "Пароль связан с чьим-то именем";
                hint3 = "В пароле точно больше 6 цифр";
                break;
            }
            case '3': {
                hint1 = "Даша помнит, что пароль содержит строчные буквы и цифры";
                hint2 = "В пароле точно есть дата рождения";
                hint3 = "Пароль связан с именем или прозвищем";
                break;
            }
            case '4': {
                hint1 = "Даша помнит, что пароль содержит строчные буквы";
                hint2 = "Пароль связан с тем, что Даша любит";
                hint3 = "В пароле точно есть дата, но не дата рождения";
                break;
            }
            case '5': {
                hint1 = "По рекомендациям сайта, пароль содержит заглавную и строчные буквы";
                hint2 = "Даша помнит, что пользовалась шифром для создания пароля";
                hint3 = "Пароль как-то связан с любимой музыкальной группой Даши";
                break;
            }
            case '6': {
                hint1 = "По рекомендациям сайта, пароль содержит заглавную и строчные буквы";
                hint2 = "Даша помнит, что пользовалась шифром для создания пароля";
                hint3 = "В пароле точно есть название места";
                break;
            }
            default: {
                hint1 = "1. " + hint1;
                hint2 = "2. " + hint2;
                hint3 = "3. " + hint3;
            }
        }

        if (this.props.time < 1000 * 60 * 20) {
            hint1 = "Первая подсказка появится на 20-ой минуте задания!";
            hint2 = '';
            hint3 = '';
        } else {
            if (this.props.time < 1000 * 60 * 35 ) {
                hint2 = "Вторая подсказка появится на 35-ой минуте задания!";
                hint3 = '';
            } else{
                if (this.props.time < 1000 * 60 * 45) {
                    hint3 = "Последняя подсказка появится на 45-ой минуте задания!";
                }
            }
        }

        return (
            <div className="text-center mt-3">
                <h3>Подсказки</h3>
                <h5 className="mt-3">{hint1}</h5>
                <h5 className="mt-3">{hint2}</h5>
                <h5 className="mt-3">{hint3}</h5>
            </div>
        );
    }
}