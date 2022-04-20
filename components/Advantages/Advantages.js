const imagesPath = 'assets/images/advantages/';

export default {
  name: 'Advantages',
  data() {
    return {
      items: [
        {
          title: 'Непосредственный производитель продукции',
          image: imagesPath + 'saw.svg'
        },
        {
          title: 'Большое <br>количество товаров <br>в наличии',
          image: imagesPath + 'building.svg'
        },
        {
          title: 'Работаем с физ. и <br>юр. лицами, с НДС <br>и без НДС',
          image: imagesPath + 'doc.svg'
        },
        {
          title: 'Изделия соответ-ствуют нормативам <br>и ГОСТам',
          image: imagesPath + 'certificate.svg'
        },
        {
          title: 'Принимаем оплату безналичным и наличным расчетом',
          image: imagesPath + 'purse.svg'
        },
      ]
    }
  },
}
