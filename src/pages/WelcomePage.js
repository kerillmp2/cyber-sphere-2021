import React from "react";
import {useForm} from "react-hook-form";
import "../styles/welcomePage.css"
import Footer from "../components/Footer";

export default function WelcomePage(props) {

    const {register, handleSubmit, errors} = useForm();

    const registerSubmit = (values) => {
        let now = Date.now().toString()
        localStorage.setItem("name", values.name);
        localStorage.setItem("class", values.class);
        localStorage.setItem("start", now);
        console.log(values);
        props.onEnter(values.name, values.class, now);
    }

    return (
        <div className="h-100 bg-peach">
            <div className="bg-peach p-4">
                <div className="bg-peach p-4 text-center">
                    <h2 className="mt-4">Добро пожаловать на дистанционный тур!</h2>
                    <h3 className="mt-3">Тур будет доступен 02.12 с 09:00</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
}