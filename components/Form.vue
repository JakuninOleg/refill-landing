<template>
  <form class="form">
    <input type="text" class="form__name form__input" placeholder="Ваше имя">
    <InputPhone />
    <Button class="btn btn--red no-padding">
      Отправить заявку
    </Button>
    <div class="form__agreement">
      <input v-model="checked" type="checkbox" class="form__checkbox">
      <span class="tick" />
      <span
        class="grey-dark checkbox-span"
      >Нажимая кнопку, вы даете свое согласие на обработку и хранение своих&nbsp;</span>
      <span>
        <a
          class="hyperlink"
          href="https://zdeslegko.ru/static/documents/politics.pdf"
          target="blank"
        >персональных данных.</a>
      </span>
    </div>
  </form>
</template>

<script>
import Button from '~/components/Button.vue'
import InputPhone from '~/components/InputPhone.vue'

export default {
  components: {
    Button,
    InputPhone
  },
  data: () => {
    return {
      checked: true
    }
  }
}
</script>
