import React, {useState} from 'react'
import './services.sass'

import ModalService from '../modals/ModalService'

import { Service } from './Service'

import Menu from '../menu/Menu'

import icon1 from '../img/services/danger_icon_001.png'
import icon2 from '../img/services/danger_icon_002.png'
import icon3 from '../img/services/danger_icon_003.png'
import icon4 from '../img/services/danger_icon_004.png'
import icon5 from '../img/services/danger_icon_005.png'
import icon6 from '../img/services/danger_icon_006.png'
import icon7 from '../img/services/danger_icon_007.png'
import icon8 from '../img/services/danger_icon_008.png'
import icon9 from '../img/services/danger_icon_009.png'
import icon10 from '../img/services/danger_icon_010.png'
import icon11 from '../img/services/danger_icon_011.png'
import icon12 from '../img/services/danger_icon_012.png'

import track from '../img/services/Truck.png'

import serviceImg1 from '../img/services/services_1.png'
import serviceImg2 from '../img/services/services_2.png'
import serviceImg3 from '../img/services/services_3.png'

function Services() {

	const state = {
		services: [
			{ serviceNum: '1', serviceIcon: icon2, serviceName: 'Взрывчатые вещества' },
			{ serviceNum: '2', serviceIcon: icon6, serviceName: 'Газы' },
			{ serviceNum: '3', serviceIcon: icon3, serviceName: 'Легковоспламеняющиеся жидкости' },
			{ serviceNum: '4', serviceIcon: icon7, serviceName: 'Легковоспламеняющиеся твердые вещества' },
			{ serviceNum: '5', serviceIcon: icon11, serviceName: 'Легковоспламеняющиеся твердые вещества' },
			{ serviceNum: '6', serviceIcon: icon8, serviceName: 'Легковоспламеняющиеся твердые вещества' },
			{ serviceNum: '7', serviceIcon: icon5, serviceName: 'Окисляющие вещества' },
			{ serviceNum: '8', serviceIcon: icon1, serviceName: 'Токсичные и инфекционные вещества' },
			{ serviceNum: '9', serviceIcon: icon4, serviceName: 'Токсичные и инфекционные вещества' },
			{ serviceNum: '10', serviceIcon: icon10, serviceName: 'Радиоактивные материалы' },
			{ serviceNum: '11', serviceIcon: icon9, serviceName: 'Коррозионные вещества' },
			{ serviceNum: '12', serviceIcon: icon12, serviceName: 'Прочие опасные вещества' }
		]
	}

	const [modalActive, setModalActive] = useState(false)

	return (
		<div>
			<Menu />
			<section className="services">
				<h1 className="services__title title">Услуги</h1>
				<h2 className="services__tagtitle tagtitle">Перевозки опасных грузов</h2>
				<p className="services__text">
					Перевозим все известные типы опасных грузов. Все перевозки осуществдяются в соответствии с международными стандартами <br />безопасности.
				</p>
				<div className="services__items">
					{
						state.services.map((item, i) => {
							return (
								<Service num={item.serviceNum} icon={item.serviceIcon} name={item.serviceName} key={i} />
							)
						})
					}
				</div>
				<button className="services__button button">заказать</button>
				<img className="services__img" src={track} alt="truck" />
				<div className="services__more">
					<div className="services__order order-service">
						<img className="order-service__img" src={serviceImg1} alt="service" />
						<div className="order-service__name">Упаковка груза</div>
						<div className="order-service__text">Правильно упакуем груз и подготовим его к отправке</div>
						<button className="order-service__button button" onClick={()=>setModalActive(true)}>заказать</button>
					</div>
					<div className="services__order order-service">
						<img className="order-service__img" src={serviceImg2} alt="service" />
						<div className="order-service__name">Продажа упаковочного материала</div>
						<div className="order-service__text">У нас вы можете приобрести упаковку любого типа и для любого груза.</div>
						<button className="order-service__button button" onClick={()=>setModalActive(true)}>купить</button>
					</div>
					<div className="services__order order-service">
						<img className="order-service__img" src={serviceImg3} alt="service" />
						<div className="order-service__name">Оформление документов для перевозки опасных грузов</div>
						<div className="order-service__text">Подготовим и проверим все документы перед отправкой. </div>
						<button className="order-service__button button" onClick={()=>setModalActive(true)}>заказать</button>
					</div>
				</div>
			</section>
			<ModalService active = {modalActive} setActive={setModalActive}>
				<h6 className="modal__title">Заказать услугу</h6>
			</ModalService>
		</div>
	)
}

export default Services