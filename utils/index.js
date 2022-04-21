export function toPriceFormat(value) {
  return value.toLocaleString('ru');
}

export function getLsCount() {
  let count = localStorage.getItem('count');
  if (count) {
    return Number(count);
  } else {
    return 0;
  }
}

export function setLsCount(value) {
  localStorage.setItem('count', getLsCount() + value);
}

export function updateLsCount(value) {
  localStorage.setItem('count', value);
}

export function getLsSum() {
  let count = localStorage.getItem('sum');
  if (count) {
    return Number(count);
  } else {
    return 0;
  }
}

export function setLsSum(value) {
  localStorage.setItem('sum', getLsSum() + value);
}

export function updateLsSum(value) {
  localStorage.setItem('sum', value);
}

export function getLsProducts() {
  let products = localStorage.getItem('products');
  if (products) {
    return JSON.parse(products);
  } else {
    localStorage.setItem('products', '[]');
    return [];
  }
}

export function setLsProducts(item) {
  let products = getLsProducts();
  products.push(item);
  localStorage.setItem('products', JSON.stringify(products));
}

export function updateLsProducts(value) {
  localStorage.setItem('products', JSON.stringify(value));
}

export function scrollTop() {
  // window.scrollTo(0,0);
  document.body.scrollIntoView({behavior: 'smooth', block: 'start'});
}

export function toLink(href, before, after) {
    if (before) {
      before();
    }

    scrollTop();
    this.$router.push(href);

    if (after) {
      after();
    }
}
