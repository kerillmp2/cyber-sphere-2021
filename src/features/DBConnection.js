import React, {useEffect, useState} from "react";
import {API} from 'aws-amplify';
import {listTodos} from "../graphql/queries";
import {createTodo} from "../graphql/mutations";
import SimpleRouter from "./SimpleRouter";

export default function DBConnection(props) {
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        fetchAnswers();
    }, []);

    async function fetchAnswers() {
        const apiData = await API.graphql({query: listTodos});
        const answersData = apiData.data.listTodos.items
        setAnswers(answersData);
    }

    async function createAnswer(command, cl, answer, time, correct) {
        let timeTotal = new Date().toString();
        if (command === null || cl === null || answer === null || time === null || correct === null) {
            return
        }
        let newAnswer = {
            'command': command,
            'cl': cl,
            'answer': answer,
            'time': time.toString(),
            'timeTotal': timeTotal,
            'correct': correct
        }
        await API.graphql({query: createTodo, variables: {input: newAnswer}});
        setAnswers([...answers, newAnswer]);
    }

    const handleSend = (command, cl, answer, time, correct) => {
        createAnswer(command, cl, answer, time, correct).then(r => {
            console.log("Answer " + answer + " sent")
            console.log(correct)
        });
    }

    return (
        <div>
            <SimpleRouter onSendAnswer={handleSend} answers={answers}/>
        </div>
    );
}