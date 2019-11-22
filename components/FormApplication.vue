<template>
  <section class="form-application">
    <div class="form-application__content">
      <header>
        <h3 class="heading-3">
          Быстрое получение денег под Залог ПТС
        </h3>
        <div class="hashtags">
          <span class="hashtag">#простополучить</span>
          <span class="hashtag">#моментальноденьги</span>
          <span class="hashtag">#займденег</span>
        </div>
      </header>
      <article>
        <div class="form-application__step">
          <span class="form-application__step-number">1</span>
          <span
            class="form-application__step-text"
          >Отправьте заявку и получите предварительное одобрение по телефону</span>
        </div>
        <form class="form">
          <input type="text" class="form__name form__input" placeholder="Ваше имя">
          <input type="text" class="form__phone form__input" placeholder="Ваш телефон">
          <Button class="btn btn--red no-padding">Отправить заявку</Button>
          <div class="form__agreement">
            <input type="checkbox" checked class="form__checkbox"><span class="tick"></span><span class="grey-dark checkbox-span">Нажимая кнопку, вы даете свое согласие на обработку и хранение своих&nbsp;</span>
            <span><a class="hyperlink" href="https://zdeslegko.ru/static/documents/politics.pdf" target="blank">персональных данных.</a></span>
          </div>
        </form>
        <div class="form-application__step">
          <span class="form-application__step-number">2</span>
          <span
            class="form-application__step-text"
          >Приезжайте в офис для оценки авто и заключения договора</span>
        </div>
        <div class="form-application__step">
          <span class="form-application__step-number">3</span>
          <span class="form-application__step-text">Получайте деньги и подарочную карту Лукойл</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
import Button from '~/components/Button.vue'

export default {
  components: {
    Button
  }
}
</script>
