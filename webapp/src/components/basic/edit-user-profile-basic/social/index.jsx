import { Input } from 'antd'
import './style.scss'

const Social = () => {


    return (
        <>
            <div className="form-row mx-24">
                <div className="form-row-title">
                    <h6>Social</h6>
                    <p className="text-muted">Setup your social profiles info.</p>
                </div>
            </div>
            <div className="form-row mx-24 col-3">
                <div className="form-group">
                    <label htmlFor="socialFacebook">Facebook</label>
                    <Input id="socialFacebook" className="form-control" prefix={<i className="fab fa-facebook-f"></i>} />
                </div>
                <div className="form-group">
                    <label htmlFor="socialTwitter">Twitter</label>
                    <Input id="socialTwitter" className="form-control" prefix={<i className="fab fa-twitter"></i>} />
                </div>
                <div className="form-group">
                    <label htmlFor="socialGitHub">GitHub</label>
                    <Input id="socialGitHub" className="form-control" prefix={<i className="fab fa-github"></i>} />
                </div>
            </div>
            <div className="form-row mx-24 col-3">
                <div className="form-group">
                    <label htmlFor="socialVK">VK</label>
                    <Input id="socialVK" className="form-control" prefix={<i className="fab fa-vk"></i>} />
                </div>
                <div className="form-group">
                    <label htmlFor="socialDribbble">Dribbble</label>
                    <Input id="socialDribbble" className="form-control" prefix={<i className="fab fa-dribbble"></i>} />
                </div>
                <div className="form-group">
                    <label htmlFor="socialSlack">Slack</label>
                    <Input id="socialSlack" className="form-control" prefix={<i className="fab fa-slack"></i>} />
                </div>
            </div>
        </>
    )
}

export default Social