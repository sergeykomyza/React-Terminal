import React from 'react'
import './home.sass'

import Menu from '../menu/Menu'

import slide1 from '../img/home/home_slider_1.jpg'
import slide2 from '../img/home/home_slider_2.jpg'
import logo from '../img/home/Logo.png'
import buttonArrow from '../img/home/icon_arrow.png'

import SwiperCore, { Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.scss";
import "swiper/components/a11y/a11y.scss";
import "swiper/components/controller/controller.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import "swiper/components/effect-cube/effect-cube.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import "swiper/components/lazy/lazy.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/thumbs/thumbs.scss";
import "swiper/components/zoom/zoom.scss";
SwiperCore.use([Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs]);

const slideStyle1 = {
	width: "100%",
	height: "100vh",
	background: " linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + slide1 + ") ",
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}
const slideStyle2 = {
	width: "100%",
	height: "100vh",
	background: " linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(" + slide2 + ") ",
	backgroundPosition: 'center center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}

function Home() {

	const params = {
		effect: "fade",
		speed: 1000,
		roundLengths: true,
		slidesOffsetBefore: 0,
		navigation: {
			nextEl: '.home .next',
			prevEl: '.home .prev'
		},
		pagination: {
			el: ".slider-nav__mobile",
			clickable: true
		},
		breakpoints: {
            992: {
                pagination: {
					el: ".count__inner",
					type: "fraction",
					renderFraction: function (currentClass, totalClass) {
						return (
							'<span class="' +
							currentClass +
							'"></span>' +
							" / " +
							'<span class="' +
							totalClass +
							'"></span>'
						);
					}
				}
            }
        }
	}

	return (
		<div>
			<Menu />
			<div className="home">
				<div className="home__slider slider-home">
					<div className="slider-home__header header">
						<img src={logo} alt="logo" className="header__logo" />
						<div className="header__contacts">
							<a className="header__phone" href="tel:+74957301890"><span>(495)</span>730-1890</a>
							<a className="header__mail" href="mailto:info@dgterminal.ru">info@dgterminal.ru</a>
						</div>
					</div>
					<Swiper {...params} >
						<SwiperSlide style={slideStyle1}>
							<div className="slider-home__title animate__animated animate__slideInLeft">
								Авиа перевозки<br />опасных грузов
							</div>
							<p className="slider-home__text">
								Самый быстрый способ доставить груз<br />в пункт назначения. Мы предлагаем<br />лучшие условия для своих
								клиентов.
							</p>
							<a className="button slider-home__button" href="/">
								подробнее
								<img className="button__icon" src={buttonArrow} alt="arrowIcon" />
							</a>
						</SwiperSlide>
						<SwiperSlide style={slideStyle2}>
							<div className="slider-home__title animate__animated animate__slideInLeft">
								Авто перевозки<br />опасных грузов
							</div>
							<p className="slider-home__text">
								Самый быстрый способ доставить груз<br />в пункт назначения. Мы предлагаем<br />лучшие условия для своих
								клиентов.
							</p>
							<a className="button slider-home__button" href="/">
								подробнее
								<img className="button__icon" src={buttonArrow} alt="arrowIcon" />
							</a>
						</SwiperSlide>
					</Swiper>
					{/* navigation slider */}
					<div className="slider-home__nav slider-nav">
						<div className="slider-nav__control control">
							<div className="control__prev prev">
								<div className="prev__arrow"></div>
							</div>
							<div className="control__count count">
								<div className="pagination-wrapper">
									<div className="count__inner">
										<span className="swiper-pagination-current"></span> /
										<span className="swiper-pagination-total"></span>
									</div>
								</div>
							</div>
							<div className="control__next next">
								<div className="next__arrow"></div>
							</div>
						</div>
						<div className="visible-992">
							<div className="slider-nav__mobile"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home