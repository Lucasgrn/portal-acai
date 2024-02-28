import { Order } from "../../models/Order"

export default async function createOrder(data) {
  const {
    user,
    items,
    paymentMethod,
    obs,
    payback,
    delivery,
    total
  } = data
  try {
    const order = await Order.create({
      user,
      items,
      paymentMethod,
      obs,
      payback,
      delivery,
      total
    })
    console.log(order)
    return order
  } catch (error) {
    console.log(error)
    return error
  }
}