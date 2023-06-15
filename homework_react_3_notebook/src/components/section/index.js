import React from "react";
import HomeWork from "../homeWork";

function Section(){
    return(
        <section className="section">
            <p>Завдання: Створити додаток список покупок.<br/>
                Кнопка "додати +" - Відкриває інпут і кнопку "зберегти" де ми вводимо нову позицію.<br/> після натиску зберегти має створитись нова позиція і виглядати так:<br/>Виводити список покупок з можливістю редагування.
                В кожній позиції покупки має бути Назва і знаки<br/>
                <span >✍️</span> - редагувати (Редагує)<br/>
                <span className='red'>❌</span> - видалити (Видаляє позицію)<br/>
                <span>✅</span> - куплено (Закреслює назву)
            </p>
            <HomeWork/>
        </section>
    )
};

export default Section;