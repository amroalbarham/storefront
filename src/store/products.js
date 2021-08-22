const initialState = {
  products: [
    { name: 'TV', description: 'watch movies and news', category: 'electronics', inventoryCount: 1, price: 250, image: 'https://images.samsung.com/is/image/samsung/levant-uhd-tu8000-ua43tu8000uxtw-frontblack-229856295?$720_576_PNG$' },
    { name: 'PC', description: 'write code in javascript', category: 'electronics', inventoryCount: 2, price: 650, image: 'https://5.imimg.com/data5/SI/LI/FK/SELLER-8118327/gaming-desktop-pc-custom-built-cpu--500x500.jpg' },
    { name: 'Banana', description: 'nice food ', category: 'food', inventoryCount: 3, price: 15, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0yI5Q3TboYKp8vqxrEuj28XxaTptrHbjDd-Yk9R4h6GtbfSlkRmeFehSTuJhIF1Sfv8&usqp=CAU' },
    { name: 'apple', description: 'nice food', category: 'food', inventoryCount: 4, price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHf6Jyeaszdn-sJ6exsJSn5jqlzgrjTL9LuJWqy_fO7a-5pM5IZRYib0jQsMVZm-J_nc0&usqp=CAU' }
  ],
  activeProducts: []
}

export default function getItems(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'CHANGE_ACTIVE':
      const modified = state.products.filter(item => {
        return item.category === payload
      })
      return {
        products: state.products,
        activeProducts: modified
      }
    default:
      return state;
  }

}


export function getCategoryItems(name) {
  return {
    type: 'CHANGE_ACTIVE',
    payload: name
  }
}