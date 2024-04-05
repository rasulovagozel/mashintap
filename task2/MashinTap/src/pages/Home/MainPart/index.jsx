import React from 'react'
import cars from './imgs/carsonheading2.svg'
import style from "./mainPart.module.css"

const MainPart = () => {
  return (
    <section className={style.mainPart}>
        <div className={style.content}>
        <div className={style.texts}>
          <p className={style.first}>Azərbaycanda 100% etibarlı avtomobil icarəsi platforması</p>
          <h2>Avtomobil icarəyə götürməyin sürətli və asan yolu</h2>
          <p className={style.second}>Bizim avtomobil icarəsi onlayn sifariş sistemimiz avtomobil icarə etmək üçün hazırlanmışdır. Bu istifadəsi asan avtomobil icarəsi proqramı sizə idarə etməyə imkan verəcək.</p>

        </div>
        <img className={style.carimages} src={cars} alt="carimages" />
      </div>
     <div className={style.reserveButtons}>
     <button className={style.reserveButton}>İndi bron edin</button>
         <p className={style.showAllCars}>Bütün maşınlara baxın</p>
     </div>
    </section>
  )
}

export default MainPart