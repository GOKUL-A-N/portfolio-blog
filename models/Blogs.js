import mongoose from 'mongoose';

const blogSchema = mongoose.Schema(
    {
      blogTitle: {
        type: String,
        required: true
      },
      blogContent: {
        type: [
          {
            content: String,
            highlight: String
          }
        ],
        required: true
      }
    },
    {
      timestamps: true
    }
  );

export const blogModel = mongoose.model('Blog', blogSchema);