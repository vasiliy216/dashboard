import { Cloudinary } from '../core/index.js'
import { UploadFileModal } from '../schemas/index.js'

export default class UploadFileController {
    create(req, res) {
        const userId = req.user._id
        const file = req.file

        console.log(file)

        Cloudinary.v2.uploader
            .upload_stream(
                { resource_type: 'auto' },
                (error, result) => {
                    if (error || !result) {
                        return res.status(500).json({
                            status: "error",
                            message: error || "upload error",
                        })
                    }

                    console.log(result)

                    const fileData = {
                        filename: result.original_filename,
                        size: result.bytes,
                        ext: result.format,
                        url: result.url,
                        user: userId
                    }

                    const uploadFile = new UploadFileModal(fileData)

                    uploadFile
                        .save()
                        .then(fileObj => {
                            res.json({
                                status: "success",
                                file: fileObj,
                            });
                        })
                        .catch(err => {
                            res.json({
                                status: "error",
                                message: err,
                            });
                        })
                }
            )
            .end(file.buffer);
    }
}