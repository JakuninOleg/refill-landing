<template>
  <section class="section section__grey">
    <div class="section__content">
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
        <Form />
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
import Form from '~/components/Form.vue'

export default {
  components: {
    Form
  }
}
</script>
