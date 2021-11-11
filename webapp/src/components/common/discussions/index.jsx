import { StatsPanelHeader } from '../../basic'
import { Buttons } from '../../basic'

import './style.scss'

const Discussions = () => {


    return (
        <div className="discussions card-p">
            <div className="card-mrg-all">
                <StatsPanelHeader>Discussions</StatsPanelHeader>
                <div className="discussions-body">
                    <div className="blog-comments__item card-p-16">
                        <div className="blog-comments__avatar">
                            <img src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/1.jpg" alt="" className="" />
                        </div>
                        <div className="blog-comments__content">
                            <div className="blog-comments__meta">
                                <a href="">James Johnson </a>
                                on
                                <a href=""> Hello World!</a>
                                <span className="text-muted"> - 3 days ago</span>
                                <p className="text-muted">Well, the way they make shows is, they make one show ...</p>
                            </div>
                            <div className="blog-comments__actions">
                                <Buttons white><i className="fas fa-check text-success"></i> Approve</Buttons>
                                <Buttons white><i className="fas fa-times text-danger"></i> Reject</Buttons>
                                <Buttons white><i className="fas fa-ellipsis-v text-white"></i> Edit</Buttons>
                            </div>
                        </div>
                    </div>
                    <div className="blog-comments__item card-p-16">
                        <div className="blog-comments__avatar">
                            <img src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/2.jpg" alt="" className="" />
                        </div>
                        <div className="blog-comments__content">
                            <div className="blog-comments__meta">
                                <a href="">James Johnson </a>
                                on
                                <a href=""> Hello World!</a>
                                <span className="text-muted"> - 4 days ago</span>
                                <p className="text-muted">Well, the way they make shows is, they make one show ...</p>
                            </div>
                            <div className="blog-comments__actions">
                                <Buttons white><i className="fas fa-check text-success"></i> Approve</Buttons>
                                <Buttons white><i className="fas fa-times text-danger"></i> Reject</Buttons>
                                <Buttons white><i className="fas fa-ellipsis-v text-white"></i> Edit</Buttons>
                            </div>
                        </div>
                    </div>
                    <div className="blog-comments__item card-p-16">
                        <div className="blog-comments__avatar">
                            <img src="https://designrevision.com/demo/shards-dashboard-lite/images/avatars/3.jpg" alt="" className="" />
                        </div>
                        <div className="blog-comments__content">
                            <div className="blog-comments__meta">
                                <a href="">James Johnson </a>
                                on
                                <a href=""> Hello World!</a>
                                <span className="text-muted"> - 5 days ago</span>
                                <p className="text-muted">Well, the way they make shows is, they make one show ...</p>
                            </div>
                            <div className="blog-comments__actions">
                                <Buttons white><i className="fas fa-check text-success"></i> Approve</Buttons>
                                <Buttons white><i className="fas fa-times text-danger"></i> Reject</Buttons>
                                <Buttons white><i className="fas fa-ellipsis-v text-white"></i> Edit</Buttons>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="discussions__footer card-p-16">
                    <Buttons white>View All Comments</Buttons>
                </div>
            </div>
        </div>
    )
}

export default Discussions