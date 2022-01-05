import React from 'react'

export const New = (props)=> {
	return(
		
		<a class="slider-news__item new" href="article.html">
			<div class="new__img">
				<img src={props.img} alt={props.title} />
				<div class="new__date">25.10.2020</div>
			</div>
			<div class="new__title">{props.title}</div>
			<div class="new__text">{props.text}</div>
		</a>
		
	)
}