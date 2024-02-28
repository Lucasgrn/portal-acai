import { Order } from "../../../models/Order";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const order = await Order.find()
        return res.status(200).json(order)
      } catch (error) {
        console.log(error)
        return res.status(500).json({ error })
      }
    case "POST":
      try {
        
      } catch (error) {

      }
  }
}