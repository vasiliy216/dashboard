import { Input } from 'antd'
import './style.scss'

const Social = (props) => {

    const {
        data,
        ChangeData
    } = props

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
                    <Input
                        id="socialFacebook"
                        className="form-control"
                        prefix={<i className="fab fa-facebook-f"></i>}
                        value={data.social.facebook}
                        onChange={e => ChangeData({ ...data, social: { ...data.social, facebook: e.target.value } })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="socialTwitter">Twitter</label>
                    <Input
                        id="socialTwitter"
                        className="form-control"
                        prefix={<i className="fab fa-twitter"></i>}
                        value={data.social.twitter}
                        onChange={e => ChangeData({ ...data, social: { ...data.social, twitter: e.target.value } })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="socialGitHub">GitHub</label>
                    <Input
                        id="socialGitHub"
                        className="form-control"
                        prefix={<i className="fab fa-github"></i>}
                        value={data.social.github}
                        onChange={e => ChangeData({ ...data, social: { ...data.social, github: e.target.value } })}
                    />
                </div>
            </div>
            <div className="form-row mx-24 col-3">
                <div className="form-group">
                    <label htmlFor="socialVK">VK</label>
                    <Input
                        id="socialVK"
                        className="form-control"
                        prefix={<i className="fab fa-vk"></i>}
                        value={data.social.vk}
                        onChange={e => ChangeData({ ...data, social: { ...data.social, vk: e.target.value } })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="socialDribbble">Dribbble</label>
                    <Input
                        id="socialDribbble"
                        className="form-control"
                        prefix={<i className="fab fa-dribbble"></i>}
                        value={data.social.dribbble}
                        onChange={e => ChangeData({ ...data, social: { ...data.social, dribbble: e.target.value } })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="socialSlack">Slack</label>
                    <Input
                        id="socialSlack"
                        className="form-control"
                        prefix={<i className="fab fa-slack"></i>}
                        value={data.social.slack}
                        onChange={e => ChangeData({ ...data, social: { ...data.social, slack: e.target.value } })}
                    />
                </div>
            </div>
        </>
    )
}

export default Social