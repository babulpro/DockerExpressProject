import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  role: {
    type: String,
    default: 'user',
    enum: ['user', 'admin']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  joinDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Create a virtual for avatar color
userSchema.virtual('avatarColor').get(function() {
  const colors = ['#43cea2', '#185a9d', '#6a11cb', '#2575fc', '#ff6b6b'];
  return colors[this.name.length % colors.length];
});

// Transform output to include virtuals and remove version key
userSchema.set('toJSON', {
  virtuals: true,
  transform: function(doc, ret) {
    delete ret.__v;
    return ret;
  }
});

const User = mongoose.model('User', userSchema);

export default User;