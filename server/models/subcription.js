const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  subscriptionPlan: {
    type: String,
    enum: ['Free', 'Bronze', 'Silver', 'Gold'],
    default: 'Free',
  },
  subscriptionExpiry: {
    type: Date,
    default: null,
  },
  allowedWatchTime: {
    type: Number,
    default: 5, // 5 mins for free plan
  }
});

module.exports = mongoose.model('User', userSchema);
