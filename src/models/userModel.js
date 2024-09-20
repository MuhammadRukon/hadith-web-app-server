const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, Required: true },
  email: { type: String, Required: true, Unique: true },
  role: { type: String, Required: true, default: "user" },
  bookmarks: [
    {
      type: Schema.Types.ObjectId,
      ref: "hadith",
    },
  ],
});

const User = model("User", userSchema);
module.exports = User;
