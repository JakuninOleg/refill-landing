<template>
  <section class="section description">
    <div class="section__content grid">
      <header class="description__header">
        <h3 class="heading-3">
          Пользуйтесь автомобилем бесплатно и заправляйтесь на АЗС Лукойл
        </h3>
        <div class="hashtags">
          <span class="hashtag">#бензинподарок</span>
          <span class="hashtag">#деньгиподавто</span>
          <span class="hashtag">#честныйзайм</span>
        </div>
      </header>
      <article class="description__body">
        <ul class="description__list">
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">от 100 000 рублей наличными или на карту</span>
          </li>
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">без подтверждения дохода</span>
          </li>
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">получение денег в день обращения</span>
          </li>
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">высокий процент одобрения</span>
          </li>
          <li class="description__list-item">
            <BulletYellow />
            <span class="description__list-span">с любой кредитной историей</span>
          </li>
        </ul>
        <ul class="description__list">
          <li class="description__list-item description__list-item--bold">
            <BulletRed />
            <span
              class="description__list-span"
            >Подарочная карта Лукойл – оплачивайте топливо, а также другие товары на любой АЗС Лукойл</span>
          </li>
          <li class="description__list-item description__list-item--bold">
            <BulletRed />
            <span class="description__list-span">Гарантия и надежность. Входим в реестр ЦБ РФ</span>
          </li>
        </ul>
      </article>
    </div>
    <img
      :srcset="require('~/assets/images/hose.png').srcSet"
      alt="Шланг"
      class="description__image"
    >
  </section>
</template>

<script>
import BulletYellow from '@/assets/icons/bullet-yellow.svg'
import BulletRed from '@/assets/icons/bullet-red.svg'

export default {
  components: {
    BulletYellow,
    BulletRed
  }
}
</script>
