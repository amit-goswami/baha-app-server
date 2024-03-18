import mongoose from 'mongoose'

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
  nextOtpWillBeSentIn: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('user', UserSchema)

export default User