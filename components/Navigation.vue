<template>
  <nav class="nav">
    <a href="https://zdeslegko.ru">
      <Logo />
    </a>
    <Button class="btn btn--yellow justify-right align-center">
      Заказать обратный звонок
    </Button>
    <p class="telephone">
      +7 495 120 3 120
    </p>
  </nav>
</template>

<script>
import Button from '~/components/Button.vue'
import Logo from '@/assets/icons/logo.svg'

export default {
  components: {
    Button,
    Logo
  }
}
</script>
