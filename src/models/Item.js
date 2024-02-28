import { db } from "../database"
const ObjectId = db.Schema.ObjectId
const ItemSchema = new db.Schema({
  name: {
    type: String,
    require: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

const Item = db.models.Item || db.model('Item', ItemSchema)
export { Item }