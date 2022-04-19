import { toPriceFormat, getLsCount, getLsSum, getLsProducts } from "~/utils";

export default {
  name: 'Crt',
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
  data() {
    return {
      count: 0
    }
  },
  methods() {
    toPriceFormat
  },
  mounted() {
    this.totalCount = getLsCount();
    this.totalSum = getLsSum();
    this.products = getLsProducts();

    console.log(this.products);
  },
  props: {
    classParent: String
  }
}
