import { toLink } from '~/utils';

export default {
  name: 'Nav',
  data() {
    return {
      links: [
        {
          href: '/catalog',
          title: 'Каталог'
        },
        {
          href: '/about',
          title: 'О компании'
        },
        {
          href: '/delivery-pay',
          title: 'Доставка и оплата'
        },
        {
          href: '/contacts',
          title: 'Контакты'
        },
      ],
    }
  },
  setup() {
    let navOpen = useState('navOpen');
    return {
      navOpen
    }
  },
  methods: {
    toLink,
    closeNav() {
      if (this.navOpen) {
        this.navOpen = false;
      }
    }
  },
  props: {
    mods: String
  }
}
