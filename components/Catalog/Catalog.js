const imagesPath = '/assets/images/catalog/';

export default {
  name: 'Catalog',
  data() {
    return {
      items: [
        {
          title: 'Вагонка штиль',
          image: imagesPath + 'vagonka-shtil.jpg'
        },
        {
          title: 'Имитация бруса',
          image: imagesPath + 'imitacija-brusa.jpg'
        },
        {
          title: 'Планкен прямой',
          image: imagesPath + 'planken-prjamoj.jpg'
        },
        {
          title: 'Планкен скошенный',
          image: imagesPath + 'planken-skoshennyj.jpg'
        },
        {
          title: 'Доска пола',
          image: imagesPath + 'doska-pola.jpg'
        },
        {
          title: 'Доска палубная',
          image: imagesPath + 'doska-palubnaja.jpg'
        },
        {
          title: 'Доска террасная',
          image: imagesPath + 'doska-terrasnaja.jpg'
        },
        {
          title: 'Лага для террасной доски',
          image: imagesPath + 'laga-dlja-terrasnoj-doski.jpg'
        },
        {
          title: 'Доска обрезная',
          image: imagesPath + 'doska-obreznaja.jpg'
        },
        {
          title: 'Мебельный щит',
          image: imagesPath + 'mebelnyj-shhit.jpg'
        },
        {
          title: 'Паркетная доска',
          image: imagesPath + 'parketnaja-doska.jpg'
        },
        {
          title: 'Браширование древесины',
          image: imagesPath + 'brashirovanie-drevesiny.jpg'
        },
        {
          title: 'Покраска пиломатериалов на производстве',
          image: imagesPath + 'pokraska-pilomaterialov.jpg'
        },
        {
          title: 'Крепёж',
          image: imagesPath + 'krepjozh.jpg'
        },
        {
          title: 'Масло для наружных и внутренних работ',
          image: imagesPath + 'maslo.jpg'
        },
      ]
    }
  },
  computed: {
    limitValue() {
      if (this.limit) {
        return Number(this.limit);
      } else {
        return this.items.length;
      }
    }
  },
  methods: {
    getItems() {
      let arr;

      arr = this.items.slice(0, this.limitValue);

      return arr;
    }
  },
  props: {
    title: String,
    limit: Number,
  }
}
