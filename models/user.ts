import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  is_admin: {
    type: Boolean,
    default: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

UserSchema.pre("save", async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password ?? "", 10);
    this.password = hashedPassword;
    next();
  } catch (error) {}
});

const User = model("User", UserSchema);

export default User;
