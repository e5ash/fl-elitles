const imagesPath = 'assets/images/catalog/';

export default {
  name: 'Offer',
  data() {
    return {
      items: [
        {
          image: imagesPath + 'doska-palubnaja.jpg'
        },
        {
          image: imagesPath + 'doska-terrasnaja.jpg'
        },
        {
          image: imagesPath + 'laga-dlja-terrasnoj-doski.jpg'
        },
        {
          image: imagesPath + 'doska-obreznaja.jpg'
        },
        {
          image: imagesPath + 'mebelnyj-shhit.jpg'
        },
      ]
    }
  }
}
