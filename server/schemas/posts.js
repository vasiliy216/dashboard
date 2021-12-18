import mongoose from 'mongoose'

import { differenceInMinutes  } from "date-fns";

const PostsSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        image: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UploadFile",
        },
        user: {
            type: Object,
            required: true
        },
        categories: {
            type: Array,
        },
        status: {
            type: Boolean,
            default: true
        },
        visibility: {
            type: Boolean,
            default: true
        },
        schedule: {
            type: Date,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
)

PostsSchema.virtual("is_show").get(function () {
    return differenceInMinutes(new Date(), this.schedule) > 0;
});

PostsSchema.set("toJSON", {
    virtuals: true,
});

const PostsModal = mongoose.model('Post', PostsSchema);

export default PostsModal;