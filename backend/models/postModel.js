import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  cocktailName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  
  
  dateCreated: {
    type: Array,
    required: false,
  },
});

const Post = mongoose.model('Post', postSchema);

export default Post;
