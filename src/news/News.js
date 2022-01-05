import React from 'react'
import './news.sass'

import Menu from '../menu/Menu'

import { New } from './New'

import new1 from '../img/news/new_1.png'
import new2 from '../img/news/new_2.png'
import new3 from '../img/news/new_3.png'

import sign from '../img/news/Badges.png'

import SwiperCore, { Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
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

function News() {
	
	const params = {
		slidesPerView: 3,
		spaceBetween: 30,
		navigation: {
			nextEl: '.news .next',
			prevEl: '.news .prev'
		},
		pagination: {
			el: ".nav-news__dots",
			clickable: true
		},
		breakpoints: {
            1201: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            993: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            565: {
                slidesPerView: 2,
                spaceBetween: 10
            },
			300: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
	}

	const state = {
		news: [
			{newImg: new1, newTitle: 'news title', newText: 'loremlorem loremloremlorem loremloremloremlorem loremloremlorem'},
			{newImg: new2, newTitle: 'news title', newText: 'loremloremloremlorem loremloremlorem loremloremloremloremlorem'},
			{newImg: new3, newTitle: 'news title', newText: 'loremloremloremlorem loremloremlorem loremloremloremloremlorem'},
			{newImg: new1, newTitle: 'news title', newText: 'loremloremloremlorem loremloremloremlorem loremloremloremlorem'},
			{newImg: new1, newTitle: 'news title', newText: 'loremloremloremloremlorem loremloremlorem loremloremloremlorem'},
			{newImg: new1, newTitle: 'news title', newText: 'loremloremloremloremlorem loremloremlorem loremloremloremlorem'}
		]
	}

	return (
		<div>
			<Menu />
			<section class="news" id="news">
				<h1 class="news__title title">Новости</h1>
				<h2 class="news__tagtitle tagtitle">События и достижения</h2>
				<p class="news__text">
					Самый быстрый способ доставить груз в пункт назначения.<br />Мы предлагаем лучшие условия для своих клиентов.
				</p>
				<div class="news__slider slider-news">
					<Swiper {...params}>
						{
							state.news.map((item, i) => {
								return(
									<SwiperSlide>
										<New img={item.newImg} title={item.newTitle} text={item.newText} key={i} />
									</SwiperSlide>
								)
							})
						}
					</Swiper>
				</div>
				<div class="news__nav nav-news">
					<div class="nav-news__prev prev">
						<div class="prev__arrow"></div>
					</div>
					<div className="nav-news__dots"></div>
					<div class="nav-news__next next">
						<div class="next__arrow"></div>
					</div>
				</div>
				<div class="news__bottom">
					<button class="button news__button">архив новостей</button>
					<img class="news__signs" src={sign} alt="signs" />
				</div>
			</section>
		</div>
	)
}

export default News