import mongoose from 'mongoose'
import { generatorPasswordHash } from '../utility/index.js'

const UserSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            default: ""
        },
        last_name: {
            type: String,
            default: ""
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        location: {
            type: String,
        },
        phone_number: {
            type: String,
            default: ""
        },
        avatar: {
            type: String,
            default: null
        },
        background_photo: {
            type: String,
            default: null
        },
        is_public_email: {
            type: Boolean,
            default: true
        },
        bio: {
            type: String,
            default: ""
        },
        tags: {
            type: String,
            default: ""
        },
        social: {
            type: Array
        },
        // active: {
        //     type: Boolean
        // },
        confirmed: {
            type: Boolean,
            default: false
        },
        confirmed_hash: {
            type: String
        },
        last_seen: {
            type: Date,
            default: new Date()
        },
    },
    {
        timestamps: true
    }
)

UserSchema.set("toJSON", {
    virtuals: true,
});

UserSchema.pre('save', async function (next) {
    var user = this;

    if (!user.isModified('password')) return next();

    user.password = await generatorPasswordHash(user.password);
    user.confirmed_hash = await generatorPasswordHash(new Date().toString());
})

const UserModal = mongoose.model('User', UserSchema);

export default UserModal;