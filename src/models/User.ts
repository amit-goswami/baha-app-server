import mongoose from 'mongoose'
import { USER_ROLES } from '../types/shared.interface'

const { Schema } = mongoose

const UserSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  mobileNumber: {
    type: String,
    unique: true
  },
  isMobileVerified: {
    type: Boolean,
    default: false
  },
  lastOtpSentAt: {
    type: Date
  },
  role: {
    type: String,
    default: USER_ROLES.USER
  }
})

const User = mongoose.model('user', UserSchema)

export default User
