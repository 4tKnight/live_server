const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    is_online: {
        type: Boolean,
        default: true,
    },
    is_deleted:  {
        type: Boolean,
        default: false,
    },

}, {
    timestamps: true,
    collection: "all_users"
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;