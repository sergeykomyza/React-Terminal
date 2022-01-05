import React from 'react'
import './about.sass'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Fancybox from "../fancybox.js"

import logo from '../img/about/Logo.png'
import airportIcon from '../img/about/icon_airport.png'
import manIcon from '../img/about/icon_man.png'
import globeIcon from '../img/about/icon_globe.png'
import license1 from '../img/about/license-1-min.jpg'
import license2 from '../img/about/license-2-min.jpg'
import license3 from '../img/about/license-3-min.jpg'
import license4 from '../img/about/license-4-min.jpg'
import license5 from '../img/about/license-5-min.jpg'
import license6 from '../img/about/license-6-min.jpg'
import license7 from '../img/about/license-7-min.jpg'


import Menu from '../menu/Menu'

function About() {
	return (
		<div>
			<Menu />
			<section className="about" id="about">
				<h1 className="about__title title">О компании</h1>
				<h2 className="about__tagtitle tagtitle">ООО “Ди Джи Терминал”</h2>
				<img className="about__logo" src={logo} alt="" />
				<p className="about__text">
					Самый быстрый способ доставить груз в пункт назначения.<br />Мы предлагаем лучшие условия для своих клиентов. Самый быстрый<br />способ доставить груз в пункт назначения. Мы предлагаем лучшие<br />условия для своих клиентов.</p>
				<div className="about__items">
					<div className="about__item item-about">
						<div className="item-about__icon"><img src={airportIcon} alt="icon_airport" /></div>
						<p className="item-about__text">
							Офисы<br />в крупнейших<br />аэропортах Москвы</p>
					</div>
					<div className="about__item item-about">
						<div className="item-about__icon"><img src={manIcon} alt="icon_man" /></div>
						<p className="item-about__text">
							Сертифицированный<br />персонал</p>
					</div>
					<div className="about__item item-about">
						<div className="item-about__icon"><img src={globeIcon} alt="icon_globe" /></div>
						<p className="item-about__text">
							Перевозки<br />опасных грузов<br />по всему миру</p>
					</div>
				</div>
				<Fancybox>
					<div className="about__licensed">
						<a data-fancybox="gallery" href={license4} className="about__license"><img src={license4} alt="license-7" /></a>
						<a data-fancybox="gallery" href={license5} className="about__license"><img src={license5} alt="license-1" /></a>
						<a data-fancybox="gallery" href={license6} className="about__license"><img src={license6} alt="license-2" /></a>
						<a data-fancybox="gallery" href={license7} className="about__license"><img src={license7} alt="license-3" /></a>
						<a data-fancybox="gallery" href={license1} className="about__license"><img src={license1} alt="license-4" /></a>
						<a data-fancybox="gallery" href={license2} className="about__license"><img src={license2} alt="license-5" /></a>
						<a data-fancybox="gallery" href={license3} className="about__license"><img src={license3} alt="license-6" /></a>
					</div>
				</Fancybox>
				<Link className="about__button button" to="/contacts">посмотреть контакты</Link>
			</section>
		</div>
	)
}

export default About