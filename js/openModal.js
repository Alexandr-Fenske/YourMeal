import { API_URL, PREFIX_PRODUCT } from './const.js'
import {
  modalProductTitle,
  modalProductImage,
  modalProductDescription,
  ingredientsList,
  ingredientsCalories,
  modalProductPriceCount,
  modalProduct,
  modalProductBtn,
} from './elements.js'
import { getData } from './getData.js'

export const openModal = async (id) => {
  const product = await getData(`${API_URL}${PREFIX_PRODUCT}/${id}`)
  modalProductTitle.textContent = product.title
  modalProductImage.src = `${API_URL}/${product.image}`
  modalProductDescription.textContent = product.description
  ingredientsCalories.textContent = `${product.weight}г, ккал ${product.calories}`
  modalProductPriceCount.textContent = product.price

  ingredientsList.textContent = ''

  const ingredientsListItems = product.ingredients.map(item => {
    const li = document.createElement('li')
    li.classList.add('ingredients__item')
    li.textContent = item
    return li
  })
  ingredientsList.append(...ingredientsListItems)
  modalProductBtn.dataset.idProduct = product.id

  modalProduct.classList.add('modal_open')
}