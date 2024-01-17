import { db } from "../database"
const ObjectId = db.Schema.ObjectId
const ComplementSchema = new db.Schema({
  name: {
    type: String,
    require: true,
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

const Complement = db.models.Complement || db.model('Complement', ComplementSchema)
export { Complement }