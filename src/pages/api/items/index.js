import { Item } from "../../../models/Item";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const item = await Item.find()
        return res.status(200).json(item)
      } catch (error) {
        console.log(error)
        return error
      }

    case "POST":
      try {
        const item = await Item.create(req.body)
        return res.status(200).json(item)
      } catch (error) {
        console.log(error)
        return error
      }
  }
}