import { Input } from 'antd';

import { StatsPanelHeader } from '../../basic'
import { Buttons } from '../../basic'

import './style.scss'

const NewDraft = () => {

    const { TextArea } = Input;

    return (
        <div className="new-draft card-p">
            <div className="card-mrg-all h-100">
                <StatsPanelHeader>New Draft</StatsPanelHeader>
                <div className="new-draft-body card-p-16">
                    <div className="quick-post-form">
                        <div className="form-group">
                            <Input placeholder="Brave New World" className="new-draft-input form-control" />
                        </div>
                        <div className="form-group">
                            <TextArea
                                placeholder="Words can be like X-rays if you use them properly..."
                                autoSize
                                className="new-draft-textarea form-control"
                            />
                        </div>
                        <div className="form-group mb-0">
                            <Buttons primary>Create Draft</Buttons>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewDraft