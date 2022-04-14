export default {
  name: 'Advantages',
  data() {
    return {
      items: [
        {
          title: 'Непосредственный производитель продукции',
          image: ''
        },
        {
          title: 'Большое <br>количество товаров <br>в наличии',
          image: ''
        },
        {
          title: 'Работаем с физ. и юр. лицами, с НДС и без НДС',
          image: ''
        },
        {
          title: 'Изделия соответ-ствуют нормативам <br>и ГОСТам',
          image: ''
        },
        {
          title: 'Принимаем оплату безналичным и наличным расчетом',
          image: ''
        },
      ]
    }
  },
  props: {
    classParent: String
  }
}
