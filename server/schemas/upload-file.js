import mongoose from 'mongoose'

const UploadFileSchema = new mongoose.Schema(
    {
        filename: String,
        size: Number,
        ext: String,
        url: String,
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true,
    }
)

const UploadFileModal = mongoose.model('UploadFile', UploadFileSchema);

export default UploadFileModal;