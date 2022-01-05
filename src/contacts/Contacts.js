import React from 'react'

import './contacts.sass'

import Menu from '../menu/Menu'

import iconPhone from '../img/contacts/phone_icon.png'
import iconDog from '../img/contacts/dog_icon.png'
import iconChair from '../img/contacts/chair_icon.png'
import iconMessage from '../img/contacts/message_icon.png'
import iconMarker from '../img/contacts/marker_icon.png'
import iconNavigator from '../img/contacts/navigator_icon.png'

import file from '../politica.pdf'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

function Contacts() {

	const [showMap, setShowMap] = React.useState(false)
	React.useEffect(() => {
		const timeOut = setTimeout(() => setShowMap(true), 3000);
		return () => clearTimeout(timeOut);
	}, [])

	return (
		<div>
			<Menu />
			<section className="contacts" id="contacts">
				<h1 className="contacts__title title">Контакты</h1>
				<h2 className="contacts__tagtitle tagtitle">
					Свяжитесь с нами<br />любым удобным способом.</h2>
				<div className="contacts__datas">
					<div className="contacts__item data">
						<img className="data__icon" src={iconPhone} alt="phone_icon" />
						<div className="data__info data__info--s info-data">
							<a className="info-data__text" href="tel:+74957301890"><span>(495)</span>730-1890</a>
						</div>
					</div>
					<div className="contacts__item data">
						<img className="data__icon" src={iconDog} alt="dog_icon" />
						<div className="data__info data__info--s info-data">
							<a className="info-data__text" href="mailto:info@dgterminal.ru">info@dgterminal.ru</a>
						</div>
					</div>
					<div className="contacts__item data">
						<img className="data__icon" src={iconChair} alt="chair_icon" />
						<div className="data__info data__info--b info-data">
							<p className="info-data__text">
								124340, г.Москва, а/п "Шереметьево",<br />К-340, Шереметьевское шоссе д.5 стр.1,<br />офис №204</p>
						</div>
					</div>
				</div>
				<div className="contacts__feedback">
					<div className="contacts__order"><img src={iconMessage} alt="message_icon" />
						<form className="contacts__form form" id="form" action="#">
							<input className="form__input" type="text" placeholder="Ваше имя" />
							<input className="form__input" type="text" placeholder="Ваш телефон" />
							<input className="form__input" type="text" placeholder="Ваш email" />
							<input className="form__input" type="text" placeholder="Тема обращения" />
							<textarea className="form__textarea" placeholder="Ваше обращение"></textarea>
							<div className="form__agree">
								<div className="button form__button">отправить</div>
								<p className="form__text">
									Нажимая кнопку заказать, вы даете согласие
									на <a href={file} >обработку персональных данных</a>
								</p>
							</div>
						</form>
					</div>
					<div className="contacts__coord coord">
						<img className="coord__icon" src={iconMarker} alt="marker_icon" />
						<div className="coord__map" id="map">
							{ showMap &&
								<YMaps>
									<Map defaultState={{ center: [55.983857, 37.420725], zoom: 13 }} width="100%" height="100%" >
										<Placemark geometry={[55.983857, 37.420725]} />
									</Map>
								</YMaps>
							}
						</div>
						<button className="coord__button"><img src={iconNavigator} alt="navigator_icon" />проложить маршрут</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contacts