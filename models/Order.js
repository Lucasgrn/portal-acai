import { db } from "../database"
const ObjectId = db.Schema.ObjectId
const OrderSchema = new db.Schema({
  user: {
    type: ObjectId,
    ref: 'User'
  },
  status: {
    type: String,
    enum: ['Aceito', 'Em preparação', 'Saiu para entrega', 'Concluído']
  },
  items: [{
    item: {
      type: ObjectId,
      ref: 'Item'
    },
    freeComp: [{
      type: String
    }],
    payComp: [{
      type: ObjectId,
      ref: 'Complement'
    }],
    qnt: {
      type: Number,
      default: 1
    }
  }],
  paymentMethod: {
    type: String
  },
  total: {
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

const Order = db.models.Order || db.model('Order', OrderSchema)
export { Order }