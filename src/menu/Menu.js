import React, {useState} from 'react'
import './menu.sass'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import barLogoIcon from '../img/home/bar_logo.png'
import barPhoneIcon from '../img/home/bar_phone_icon.png'
import barMessageIcon from '../img/home/bar_message_icon.png'
import barCalcIcon from '../img/home/bar_calc_icon.png'
import barFacebookIcon from '../img/home/bar_facebook_icon.png'
import menuArrow from '../img/home/menu_arrow.png'

function Menu() {

	const [isShow, setIsShow] = useState(true)
	const toggleMenu = () => setIsShow(!isShow)

	return (
		<div>
			{/* левый сайдбар */}
			<div className="bar animate__animated">
				<div className="bar__top">
					<Link className="hidden-992" to="/"><img className="bar__logo" src={barLogoIcon} alt="logo" /></Link>
					<div className="bar__item open-menu"><span>МЕНЮ</span>
						<div className="bar__btn" onClick={toggleMenu}><span></span><span></span><span></span></div>
					</div>
				</div>
				<div className="bar__center">
					<div className="bar__item"><span>ЗАКАЗАТЬ ЗВОНОК</span>
						<button className="bar__btn" data-toggle="modal" data-target="#order-call"><img src={barPhoneIcon} alt="bar_phone_icon" /></button>
					</div>
					<div className="bar__item hidden-992"><span>ОБРАТНАЯ СВЯЗЬ</span>
						<button className="bar__btn" data-toggle="modal" data-target="#modal-feedback"><img src={barMessageIcon} alt="bar_message_icon" /></button>
					</div>
					<div className="bar__item hidden-992"><span>РАССЧИТАТЬ СТОИМОСТЬ</span>
						<button className="bar__btn" data-toggle="modal" data-target="#modal-calc"><img src={barCalcIcon} alt="bar_calc_icon" /></button>
					</div>
				</div>
				<a className="bar__social" href="/"><img src={barFacebookIcon} alt="bar_facebook_icon" /></a>
				<a className="visible-992" href="/"><img src={barLogoIcon} alt="logo" /></a>
			</div>
			{/* меню (выезжает по клику) */}
			<nav className={isShow ? 'navigation' : 'navigation navigation--open'}>
				<div className="navigation__top">
					<img className="navigation__logo hidden-992" src={barLogoIcon} alt="" />
					<ul className="navigation__menu menu">
						<li className="menu__item">
							<img className="menu__arrow" src={menuArrow} alt="arrow" />
							<Link className="menu__link" to="/">главная</Link>
						</li>
						<li className="menu__item">
							<img className="menu__arrow" src={menuArrow} alt="arrow" />
							<Link className="menu__link" to="/about">о компании</Link>
						</li>
						<li className="menu__item">
							<img className="menu__arrow" src={menuArrow} alt="arrow" />
							<Link className="menu__link" to="/services">услуги</Link>
						</li>
						<li className="menu__item">
							<img className="menu__arrow" src={menuArrow} alt="arrow" />
							<Link className="menu__link" to="/news">новости</Link>
						</li>
						<li className="menu__item">
							<img className="menu__arrow" src={menuArrow} alt="arrow" />
							<Link className="menu__link" to="/contacts">контакты</Link>
						</li>
					</ul>
				</div>
				<div className="navigation__button close-menu" onClick={toggleMenu}><span className="close-menu__word">МЕНЮ</span><span
					className="close-menu__icon">X</span></div>
				<div className="navigation__bottom">
					<div className="navigation__contacts contacts-nav">
						<div className="contacts-nav__item"><span>Позвонить нам:</span><a className="contacts-nav__phone"
							href="tel:+74957301890">(495)7301890</a></div>
						<div className="contacts-nav__item"><span>Написать нам:</span><a className="contacts-nav__mail"
							href="mailto:info@dgterminal.ru">info@dgterminal.ru</a></div>
					</div><a className="navigation__social" href="/"><img src="img/home/bar_facebook_icon.png" alt="" /></a>
					<div className="navigation__develop develop">
						Разработка и поддержка сайта<br /><a className="develop__logo" href="https://scrum360.ru">студия<img src="img/home/logo_scrum360_white.svg" alt="" /></a></div>
				</div>
			</nav>
		</div>
	)
}

export default Menu