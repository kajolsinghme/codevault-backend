import mongoose from "mongoose";

const snippetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    language: String,
    tags: [String],
  },
  { timestamps: true },
);

export default mongoose.model("Snippet", snippetSchema);
