import { useState } from 'react'
import { Input } from 'antd'
import ReactQuill from 'react-quill'
import './style.scss'
import { database } from 'faker'

const AddNewPostCommon = (props) => {

    const {
        data,
        ChangeData
    } = props

    return (
        <div className="add-new-post card-p">
            <div className="card-mrg-all card-p-16">
                <Input 
                    placeholder="Your Post Title" 
                    className="add-new-post__input" 
                    value={data.title}
                    onChange={e => ChangeData({...data, title: e.target.value})}
                />
                <ReactQuill
                    className="add-new-post__editor"
                    placeholder="Words can be like x-rays if you use them properly..."
                    modules={modules}
                    formats={formats}
                    value={data.text}
                    onChange={body => ChangeData({...data, text: body})}
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
    "script",
]

export default AddNewPostCommon