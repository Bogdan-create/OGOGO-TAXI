import React from 'react'
import rider from '../../../assets/img/hero/rider-hero.webp'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__content flex">
                <div className="col-6 hero__item">
                    <h1 className="hero__title title">Огого такси это онлайн сервис вызова авто в Кыргызстане ! </h1>
                    <h3 className="hero__subtitle subtitle">Перемещайся по городу с комфортом.</h3>
                    <a href="#mobile" className="hero__btn btn">Скачать</a>
                </div>
                <div className="col-6 hero__item">
                    <img className="hero__img" src={rider} alt=""></img>
                </div>
            </div>
        </section>
    )
}

export default Hero
