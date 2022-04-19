import { toPriceFormat, updateLsProducts, updateLsCount, updateLsSum } from '~/utils';


export default {
  name: 'Cart',
  data() {
    return {
      order: {
        person: {
          name: '',
          phone: '',
          comment: ''
        },
        settings: {
          pay: {
            name: 'pay',
            value: ''
          },
          delivery: {
            name: 'delivery',
            value: ''
          }
        }
      }
    }
  },
  setup() {
    let products = useState('products');
    let totalSum = useState('totalSum');
    let totalCount = useState('totalCount');
    return {
      products,
      totalSum,
      totalCount
    }
  },
  methods: {
    toPriceFormat,
    updateLsProducts,
    updateLsCount,
    updateLsSum,
    removeItem(event, index, count, sum) {
      this.products.splice(index, 1);
      this.totalSum -= (sum * count);
      this.totalCount -= count;

      this.updateLsSum(this.totalSum);
      this.updateLsCount(this.totalCount);
      this.updateLsProducts(this.products);
    }
  },
  emits: ['removeItem']
}
