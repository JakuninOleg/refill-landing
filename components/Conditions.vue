<template>
  <section class="section conditions">
    <div class="section__content">
      <h3 class="heading-3">
        Условия займа под залог автомобиля
      </h3>
      <div class="hashtags">
        <span class="hashtag">#деньгивыгодно</span>
        <span class="hashtag">#лучшее</span>
        <span class="hashtag">#деньгиподавто</span>
      </div>
      <div class="conditions__icons-item">
        <span class="conditions__icon-box">
          <Passport clas="conditions__icon" />
        </span>
        <p>Гражданство РФ, возраст 21–70 лет</p>
      </div>
      <div class="conditions__icons-item">
        <span class="conditions__icon-box">
          <Calendar clas="conditions__icon" />
        </span>
        <p>Срок – до 36 месяцев</p>
      </div>
      <div class="conditions__icons">
        <div class="conditions__icons-item">
          <span class="conditions__icon-box">
            <Accept clas="conditions__icon" />
          </span>
        </div>
        <p>Досрочное погашение без переплаты и штрафов</p>
      </div>
      <div class="conditions__icons-item">
        <span class="conditions__icon-box">
          <Car clas="conditions__icon" />
        </span>
        <p>Год выпуска авто – не старше 15 лет, регистрация РФ</p>
      </div>
      <div class="conditions__icons-item">
        <span class="conditions__icon-box">
          <Document clas="conditions__icon" />
        </span>
        <p>Документы для оформления: паспорт, СТС, ПТС, нотариальная доверенность РФ (если не собственник)</p>
      </div>
      <div class="conditions__icons-item">
        <span class="conditions__icon-box">
          <Crash clas="conditions__icon" />
        </span>
        <p>Состояние автомобиля – без сильных повреждений, технически исправным</p>
      </div>
      <img
        :srcset="require('~/assets/images/car.png').srcSet"
        alt="Автомобиль"
        class="conditions__image"
      >
    </div>
  </section>
</template>

<script>
import Accept from '@/assets/icons/Accept.svg'
import Calendar from '@/assets/icons/Calendar.svg'
import Car from '@/assets/icons/Car.svg'
import Crash from '@/assets/icons/Crash.svg'
import Document from '@/assets/icons/Document.svg'
import Passport from '@/assets/icons/Passport.svg'

export default {
  components: {
    Accept,
    Calendar,
    Car,
    Crash,
    Document,
    Passport
  }
}
</script>
