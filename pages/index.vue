<template>
  <div class="container">
    <Header>
      <Navigation />
    </Header>

    <Description />

    <FormApplication ref="form" />

    <Conditions />

    <section class="form-feedback" />

    <section class="map" />

    <footer class="footer" />
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import Header from '~/components/Header.vue'
import Conditions from '~/components/Conditions.vue'
import Description from '~/components/Description.vue'
import FormApplication from '~/components/FormApplication.vue'

export default {
  components: {
    Navigation,
    Header,
    Description,
    FormApplication,
    Conditions
  }
}
</script>
