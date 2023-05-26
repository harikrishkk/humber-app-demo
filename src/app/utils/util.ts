
export const getCartTotal = (cart: any[]) => {
  return cart.reduce((acc, item) => {
    return acc = acc + (item.price * item.quantity)
  }, 0)
}
