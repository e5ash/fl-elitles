<template>
  <div>
    <Intro />
    <Catalog />
    <Offer />
    <Info title="О нас">
      <template #left>
        <div class="info__img img">
          <img src="~/assets/images/about-img.jpg" alt="">
        </div>
      </template>
      <template #right>
        <T1 class="info__text info__text_pt">
          <p>Идейные соображения высшего порядка, а также реализация намеченных плановых заданий влечет за собой процесс внедрения и модернизации новых предложений. Идейные соображения высшего порядка, а также реализация намеченных плановых заданий представляет собой интересный эксперимент проверки соответствующий условий активизации.</p> 
          <p>С другой стороны дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки форм развития. Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации форм развития. Не следует, однако забывать, что начало повседневной работы по формированию позиции требуют от нас анализа направлений прогрессивного развития. </p>
        </T1>
        <Button class="info__button" mods="md, green" href="/about">подробнее</Button>
      </template>
    </Info>
  </div>
</template>

<script>
  export default {
    head: {
      title: 'Главная'
    },
    setup() {
      definePageMeta({
        title: 'Главная'
      });
    }
  }
</script>
