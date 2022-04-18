export default {
  name: 'Card',
  data() {
    return {
      prices: {
        main: 3000,
        items: [
          [1000, 'за шт.'],
          [1100, 'за м²'],
          [3300, 'за м³'],
        ]
      },
      settings: [
        {
          title: 'Сорт',
          items: {
            name: 'sort',
            type: 'radio',
            value: '',
            list: ['сорт 1', 'сорт 2', 'сорт 3' ]
          }
        },
        {
          title: 'Толщина, мм',
          items: {
            name: 'thickness',
            type: 'radio',
            value: null,
            list: ['25', '40', '50' ]
          }
        },
        {
          title: 'Ширина, мм',
          items: {
            name: 'width',
            type: 'radio',
            value: null,
            list: ['100', '150', '200' ]
          }
        },
        {
          title: 'Длина, мм',
          items: {
            name: 'length',
            type: 'radio',
            value: null,
            list: ['6000']
          }
        },
        {
          title: 'Влажность',
          desc: 'Естественная'
        },
      ]
    }
  },
  methods: {
    toPriceFormat(value) {
      return value.toLocaleString('ru');
    }
  }
}
