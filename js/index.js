import { modalProduct, catalogList } from './elements.js'
import { openModal } from './openModal.js'
import { renderListProduct } from './renderListProduct.js'
import { navigationListController } from './navigationListController.js'
import { cartInit } from './cart.js'

// const burgerMax = {
//   title: 'Бургер сытный',
//   price: '1000',
//   weight: '5000',
//   calories: '15000',
//   description: 'Большой бургер, съешь сам или поделись с компанией',
//   image: 'img/megaburger.jpg',
//   ingredients: [
//     'Пшеничная булочка',
//     'Мега котлета из говядины',
//     'Много сыра',
//     'Листья салата',
//     'Чипотл'
//   ]
// }

catalogList.addEventListener('click', (event) => {
  const target = event.target
  if (target.closest('.product__detail')
    || target.closest('.product__image')) {
    const id = target.closest('.product').dataset.idProduct
    openModal(id)
  }
})

modalProduct.addEventListener('click', (event) => {
  const target = event.target
  if (target.closest('.modal__close')
    || target === modalProduct) {
    modalProduct.classList.remove('modal_open')
  }

})

const init = () => {
  renderListProduct()
  navigationListController(renderListProduct)
  cartInit()
}

init()
