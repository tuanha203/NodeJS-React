
import mongoose from 'mongoose'

/* name: 'Basir',
email: 'admin@example.com',
password: bcrypt.hashSync('1234', 8),
isAdmin: true, */

const userSchema = new mongoose.Schema({
   name: String,
   email:  {type: String, unique: true},
   password: String,
   isAdmin: {type: Boolean, default: false}
})

export default mongoose.model('user', userSchema);