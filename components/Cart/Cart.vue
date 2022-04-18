<template>
  <div class="cart block">
    <div class="case">
      <div class="cart__title block__title h2">Оформление заказа</div>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Field class="cart__input" mods="xs, white" type="tel" />
              </td>
              <td>
                <Field class="cart__input" mods="xs, white" type="tel" />
              </td>
              <td>
                <Field class="cart__input" mods="xs, white" type="tel" />
              </td>
              <td>
                <div class="cart__button-remove"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="cart__total"></div>
      <div class="cart__order">
        <div class="cart__col">
          <Field class="cart__field" mods="md, white" type="text" title="Ваше имя" placeholder="Введите имя" name="name" required="true" />
          <Field class="cart__field" mods="md, white" type="tel" title="Контактный телефон" placeholder="Введите телефон" name="phone" required="true" />
          <Field class="cart__field" mods="md, white" type="textarea" title="Комментарий к заказу" placeholder="Введите комментарий" name="" />
        </div>
        <div class="cart__col">
          <div class="cart__checks">
            <div class="cart__checks-title"></div>
            <div class="cart__checks-list">
              <!-- <Check  -->
              <!--   class="cart__checks-item"  -->
              <!--   v-for="(item, index) in setting.items.list"  -->
              <!--   :key="item.id"  -->
              <!--   :index="index"  -->
              <!--   :name="setting.items.name"  -->
              <!--   :value="item" -->
              <!--   v-model:checked="setting.items.value"> -->
              <!-- </Check> -->
            </div>
          </div>
        </div>
        <div class="cart__col">
          <Button class="cart__button-submit" mods="md, green">Оформить заказ</Button>
          <div class="cart__desc">Нажимая на кнопку “Оформить заказ” Вы даете свое согласие на обработку персональных данных с соответствии с политикой обработки персонльных данных</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./Cart.js"></script>
<style src='./Cart.scss'></style>
