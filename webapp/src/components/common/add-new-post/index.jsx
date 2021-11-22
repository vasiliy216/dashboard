import { useState } from 'react'
import { Input } from 'antd'
import ReactQuill from 'react-quill'
import '../../../../node_modules/react-quill/dist/quill.snow.css'
import './style.scss'

const AddNewPostCommon = () => {

    const [body, setBody] = useState('');

    const handleBody = e => {
        setBody(e)
    }

    return (
        <div className="add-new-post card-p">
            <div className="card-mrg-all card-p-16">
                <Input placeholder="Your Post Title" className="add-new-post__input" />
                <ReactQuill
                    className="add-new-post__editor"
                    placeholder="Words can be like x-rays if you use them properly..."
                    modules={modules}
                    formats={formats}
                    onChange={handleBody}
                    value={body}
                />
            </div>
        </div>
    )
}
const modules = {
    toolbar: [
        [{ header: [1, 2, 3, 4, 5, 0] }],
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        [{ header: "1" }, { header: "2" }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
    ]
};

const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "code-block",
    "script"
]

export default AddNewPostCommon