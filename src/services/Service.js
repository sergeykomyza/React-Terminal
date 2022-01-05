import React, {useState} from 'react'

import ModalService from '../modals/ModalService'

export const Service = (props) => {

	const [modalActive, setModalActive] = useState(false)

	return(
		<div>
			<div className="services__item service" onClick={()=>setModalActive(true)}>
				<div className="service__border service__border--top"></div>
				<div className="service__num">{props.num}</div>
				<img className="service__img" src={props.icon} alt={props.name} />
				<div className="service__name">{props.name}</div>
				<div className="service__text">Перевозим все известные типы опасных грузов.</div>
				<div className="service__button"><span>+</span></div>
				<div className="service__border service__border--bottom"></div>
			</div>

			<ModalService active = {modalActive} setActive={setModalActive}>
				<img className="modal__img" src={props.icon} alt={props.name} />
				<h6 className="modal__title">Заказать доставку</h6>
			</ModalService>

		</div>
		
	)
}