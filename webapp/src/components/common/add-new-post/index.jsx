import { Input, Select } from 'antd'

import './style.scss'

const AddNewPostCommon = () => {

    const handleDiv = e => {
        console.log(e)
    }

    const { Option } = Select;

    return (
        <div className="add-new-post card-p">
            <div className="card-mrg-all card-p-16">
                <Input placeholder="Your Post Title" className="add-new-post__input" />
                <div className="toolbar-controller">
                    <span className="toolbar-formats">
                        <Select defaultValue="Normal" className="toolbar-select" dropdownClassName={"toolbar-select-dropdown"} dropdownMatchSelectWidth={false}>
                            <Option className="toolbar-select-option" value="Heading 1">Heading 1</Option>
                            <Option className="toolbar-select-option" value="Heading 2">Heading 2</Option>
                            <Option className="toolbar-select-option" value="Heading 3">Heading 3</Option>
                            <Option className="toolbar-select-option" value="Heading 4">Heading 4</Option>
                            <Option className="toolbar-select-option" value="Heading 5">Heading 5</Option>
                            <Option className="toolbar-select-option" value="Normal">Normal</Option>
                        </Select>
                    </span>
                    <span className="toolbar-formats">
                        <button className="t-bold"><i className="fas fa-bold"></i></button>
                        <button className="t-italic"><i className="fas fa-italic"></i></button>
                        <button className="t-underline"><i className="fas fa-underline"></i></button>
                        <button className="t-strike"><i className="fas fa-strikethrough"></i></button>
                    </span>
                    <span className="toolbar-formats">
                        <button className="t-blockquote"><i className="fas fa-quote-right"></i></button>
                        <button className="t-code-block"><i className="fas fa-code"></i></button>
                    </span>
                    <span className="toolbar-formats">
                        <button className="t-header">H1</button>
                        <button className="t-header">H2</button>
                    </span>
                    <span className="toolbar-formats">
                        <button className="t-list"><i className="fas fa-list-ol"></i></button>
                        <button className="t-list"><i className="fas fa-list"></i></button>
                    </span>
                    <span className="toolbar-formats">
                        <button className="t-script"><i className="fas fa-subscript"></i></button>
                        <button className="t-script"><i className="fas fa-superscript"></i></button>
                    </span>
                    <span className="toolbar-formats">
                        <button className="t-indent"><i className="fas fa-outdent"></i></button>
                        <button className="t-indent"><i className="fas fa-indent"></i></button>
                    </span>
                </div>
                <div id="editor-container" className="add-new-post__editor">
                    <div
                        onChange={e => handleDiv(e)}
                        className="t-editor"
                        contentEditable="true"
                        data-gramm="false"
                        data-placeholder="Words can be like x-rays if you use them properly..."
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default AddNewPostCommon