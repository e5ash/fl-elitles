export default {
  name: 'Catalog',
  data() {
    return {
      items: [
        {
          title: 'Вагонка штиль',
          image: ''
        },
        {
          title: 'Имитация бруса',
          image: ''
        },
        {
          title: 'Планкен прямой',
          image: ''
        },
        {
          title: 'Планкен скошенный',
          image: ''
        },
        {
          title: 'Доска пола',
          image: ''
        },
        {
          title: 'Доска палубная',
          image: ''
        },
        {
          title: 'Доска террасная',
          image: ''
        },
        {
          title: 'Лага для террасной доски',
          image: ''
        },
        {
          title: 'Доска обрезная',
          image: ''
        },
        {
          title: 'Мебельный щит',
          image: ''
        },
        {
          title: 'Паркетная доска',
          image: ''
        },
        {
          title: 'Браширование древесины',
          image: ''
        },
        {
          title: 'Покраска пиломатериалов на производстве',
          image: ''
        },
        {
          title: 'Крепёж',
          image: ''
        },
        {
          title: 'Масло для наружных и внутренних работ',
          image: ''
        },
      ]
    }
  },
  methods: {
    getItems() {
      let arr;
      
      console.log(this.limit);
      console.log(this.items.slice(0, 5));
      if (this.limit) {
        arr = this.items.slice(0, limit);
      } else {
        arr = this.items;
      }

      return arr;
    }
  },
  props: {
    title: String,
    limit: Number
  }
}
