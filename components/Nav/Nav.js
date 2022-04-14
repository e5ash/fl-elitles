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
      classParent: this.classParent ? this.classParent : ''
    }
  },
  props: {
    classParent: String
  }
}
