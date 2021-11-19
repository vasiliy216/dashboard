import { Input } from 'antd';

import { StatsPanelHeader } from '../../basic'
import { Buttons } from '../../basic'

import './style.scss'

const SendMessage = () => {
    
    const { TextArea } = Input;

    return (
        <div className="send-message">
            <div className="card-mrg-all">
                <StatsPanelHeader>Send Message</StatsPanelHeader>
                <form className="send-message-body">
                    <TextArea 
                        className="send-message-textarea form-control"
                    />
                    <Buttons primary>Send Message</Buttons>
                </form>
            </div>
        </div>
    )
}

export default SendMessage