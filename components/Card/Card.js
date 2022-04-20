import { toPriceFormat, setLsCount, setLsSum, setLsProducts, getLsProducts, scrollTop } from '~/utils';


export default {
  name: 'Card',
  
  data() {
    return {
      name: 'Доска обрезная сосна, ель',
      count: 1,
      prices: {
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
  computed: {
    price() {
      return this.count * this.prices.items[0][0];
    }
  },
  setup() {
    let totalCount = useState('totalCount');
    let totalSum = useState('totalSum');
    let products = useState('products');
    return {
      totalCount,
      totalSum,
      products
    }
  },
  methods: {
    toPriceFormat,
    setLsCount,
    setLsSum,
    setLsProducts,
    getLsProducts,
    scrollTop,
    addToCart() {
      let product = {
        name: this.name,
        count: this.count,
        prices: this.prices
      }

      product.settings = this.settings.filter((setting)=>{
        if (setting?.items?.value) 
          return setting.items.value;
      });

      this.totalCount += this.count;
      this.totalSum += this.price;

      this.setLsCount(this.count);
      this.setLsSum(this.price);
      this.setLsProducts(product);

      this.products = this.getLsProducts();
      
      this.scrollTop();
      this.$router.push('/order');
    }
  }
}
