<template>
  <header class="header">
    <div class="header__inner">
      <slot />
      <div class="header__inner-content">
        <span class="header__text--date">только до 28 декабря</span>
        <span class="header__text">для всех, кто хочет найти лучшее предложение</span>
        <h1 class="header__heading">
          Здесь заправляют бесплатно!
        </h1>
        <h2 class="header__heading--secondary">
          <span>дарим</span>
          <span class="block">до 100 литров бензина</span>
          <span class="header__text--pts">+ деньги под птс</span>
        </h2>
        <Button class="btn header__btn btn--red">
          Получить
        </Button>
      </div>
      <img :srcset="require('~/assets/images/gauge.png').srcSet" alt="Спидометр" class="header__image">
    </div>
  </header>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
  components: {
    Button
  }
}
</script>
