<template>
  <div class="cart block">
    <Case>
      <H2 class="cart__title block__title">Оформление заказа</H2>
      <template v-if="products && products.length > 0">
        <div class="cart__list">
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Сорт</th>
                <th>Толщина</th>
                <th>Ширина</th>
                <th>Длина</th>
                <th>м3</th>
                <th>м2</th>
                <th>шт.</th>
                <th>Цена (м2)</th>
                <th>м3</th>
                <th>м2</th>
                <th>шт.</th>
                <th>Итого</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr ref="tr" v-for="(product, index) in products" :key="product.id" :data-id="index">
                <td>{{ product.name }}</td>
                <td v-for="setting in product.settings" :key="setting.id">{{ setting.items.value }}</td>
                <td>0,3</td>
                <td>12</td>
                <td>{{ product.count }}</td>
                <td>{{ product.prices.items[1][0] }}</td>
                <td>
                  <Field class="cart__input" mods="xs, border, center" type="tel" />
                </td>
                <td>
                  <Field class="cart__input" mods="xs, border, center" type="tel" />
                </td>
                <td>
                  <Field class="cart__input" mods="xs, border, center" type="tel" />
                </td>
                <td class="nowrap">{{ (product.count * product.prices.items[0][0]) }} руб.</td>
                <td>
                  <div class="cart__button-remove" @click="removeItem(event, index, product.count, product.prices.items[0][0])"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.09119 16C4.42193 16 0.636719 12.4183 0.636719 8C0.636719 3.58173 4.42193 0 9.09119 0C13.7604 0 17.5457 3.58173 17.5457 8C17.5457 12.4183 13.7604 16 9.09119 16ZM11.95 6.53145C12.311 6.18994 12.311 5.63629 11.95 5.29478C11.7696 5.12404 11.5331 5.03868 11.2966 5.03868C11.0601 5.03868 10.8236 5.12404 10.6432 5.29478L9.09119 6.76333L7.53925 5.29478C7.35881 5.12404 7.12231 5.03868 6.8858 5.03868C6.6493 5.03868 6.4128 5.12404 6.23236 5.29478C5.87145 5.63625 5.87145 6.18994 6.23236 6.53145L7.78434 8L6.23236 9.46855C5.87145 9.81006 5.87145 10.3637 6.23236 10.7052C6.59327 11.0467 7.17838 11.0467 7.53929 10.7052L9.09122 9.23667L10.6432 10.7052C11.0041 11.0467 11.5892 11.0467 11.9501 10.7052C12.311 10.3637 12.311 9.81006 11.9501 9.46855L10.3981 8L11.95 6.53145Z" fill="#D62424"/> </svg> </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cart__total">{{ toPriceFormat(totalSum) }} ₽</div>
        <div class="cart__order row">
          <div class="cart__col">
            <Field class="cart__field" mods="sm, border" type="text" title="Ваше имя" placeholder="Введите имя" name="name" required="true" />
            <Field class="cart__field" mods="sm, border" type="tel" title="Контактный телефон" placeholder="Введите телефон" name="phone" required="true" />
            <Field class="cart__field" mods="sm, border" type="textarea" title="Комментарий к заказу" placeholder="Введите комментарий" name="" />
          </div>
          <div class="cart__col">
            <div class="cart__checks">
              <div class="cart__checks-title">Способ доставки</div>
              <div class="cart__checks-list">
                <Check 
                  class="cart__checks-item" 
                  index="0"
                  mods="radio"
                  :name="order.settings.pay.name" 
                  value="Оплата наличными"
                  v-model:checked="order.settings.pay.value">
                </Check>
                <Check 
                  class="cart__checks-item" 
                  mods="radio"
                  :name="order.settings.pay.name" 
                  value="Выставить счет"
                  v-model:checked="order.settings.pay.value">
                </Check>
              </div>
            </div>
            <div class="cart__checks">
              <div class="cart__checks-title">Способ оплаты</div>
              <div class="cart__checks-list">
                <Check 
                  class="cart__checks-item" 
                  index="0"
                  mods="radio"
                  :name="order.settings.delivery.name" 
                  value="Самовывоз из Санкт-Петербург, г. Пушкин, пос. Лесное, д. 33, лит. А"
                  v-model:checked="order.settings.delivery.value">
                </Check>
                <Check 
                  class="cart__checks-item" 
                  mods="radio"
                  :name="order.settings.delivery.name" 
                  value="Доставка по Санкт-Петербургу"
                  v-model:checked="order.settings.delivery.value">
                </Check>
                <Check 
                  class="cart__checks-item" 
                  mods="radio"
                  :name="order.settings.delivery.name" 
                  value="Доставка по Ленинградской области"
                  v-model:checked="order.settings.delivery.value">
                </Check>
              </div>
            </div>
          </div>
          <div class="cart__col cart__col_full">
            <Button class="cart__button-submit" mods="md, green">Оформить заказ</Button>
            <div class="cart__desc">Нажимая на кнопку “Оформить заказ” Вы даете свое согласие на обработку персональных данных с соответствии с политикой обработки персонльных данных</div>
          </div>
        </div>
      </template>
      <div v-else class="cart__alert">Корзина пуста.</div>
    </Case>
  </div>
</template>
<script src="./Cart.js"></script>
<style src='./Cart.scss'></style>
