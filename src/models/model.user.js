import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        fname: {
            type: String,
            required: [true, "Please provide first name"],
            trim: true,
        },
        lname: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required."],
            trim: true,
            lowercase: true,
            unique: true,
        },
        username: {
            type: String,
            required: [true, "Username is required."],
            trim: true,
            lowercase: true,
            unique: true,
            minlength: [3, "Minimum 3 characters required."],
            maxlength: [15, "Maximum 15 characters allowed."],
        },
        password: {
            type: String,
            required: true,
            minlength: [8, "Minimum 8 characters required."],
            maxlength: [64, "Maximum 64 characters allowed."],
        },
        roles: {
            type: String,
            enum: ["User", "Admin"],
            default: "User",
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        emailVerificationToken: String,
        emailVerificationTokenExpires: Date,

        resetPasswordToken: String,
        resetPasswordTokenExpires: Date,

        refreshToken: String,
        refreshTokenExpires: Date,
    },
    {
        timestamps: true,
    },
);

// ✅ Indexes
userSchema.index({ email: 1 });
userSchema.index({ username: 1 });


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

export const User = mongoose.model("User", userSchema);
