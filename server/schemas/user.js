import mongoose from 'mongoose'
import { generatorPasswordHash } from '../utility/index.js'

import { differenceInMinutes  } from "date-fns";

const UserSchema = new mongoose.Schema(
    {
        user_name: {
            type: String,
            default: ""
        },
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
            default: ""
        },
        phone_number: {
            type: String,
            default: ""
        },
        avatar: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UploadFile",
        },
        background_photo: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UploadFile",
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
            type: Array,
        },
        social: {
            type: Object,
            default: {
                facebook: '',
                twitter: '',
                github: '',
                vk: '',
                dribbble: '',
                slack: ''
            }
        },
        link: {
            type: String,
            default: ''
        },
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

UserSchema.virtual("is_online").get(function () {
    return differenceInMinutes(new Date(), this.last_seen) < 5;
});

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