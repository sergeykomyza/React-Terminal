import React from 'react'

import './modal.sass'

const ModalService = ({active, setActive, children}) => {
    return(
        <div 
            className={active ? 
                        "modal active" : 
                        "modal"} /*если active - true то добавляем класс active (т.е показываем окно). Иначе не убираем active(скрываем окно)*/
            onClick={() => setActive(false)}> {/*при нажатии на затемненную область окно должно закрыться*/}
            <div 
                className={active ? 
                            "modal__content modal__service animate__animated animate__fadeInDown active" : 
                            "modal__content modal__service animate__animated animate__fadeOutDown"}
                onClick={e => e.stopPropagation()}>{/*чтобы мод. окно не закрылось при нажатии на контентную часть прекращаем всплытие*/}
                {children}
            </div>
        </div>
    )
}

export default ModalService