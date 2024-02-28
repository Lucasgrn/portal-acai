import { db } from "../database"
const ObjectId = db.Schema.ObjectId
const OrderSchema = new db.Schema({
  name: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  address: {
    street: {
      type: String,
      require: true
    },
    number: {
      type: String,
      require: true,
      default: 'S/N'
    },
    complement: {
      type: String
    }
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

const Order = db.models.Order || db.model('Order', OrderSchema)
export { Order }