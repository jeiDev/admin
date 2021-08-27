const ListMessage = () => {

    return (
        <li className="iq-unread">
            <div className="d-flex align-self-center">
                <div className="iq-email-sender-info">
                    <div className="iq-checkbox-mail">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="mailk" />
                            <label className="custom-control-label"></label>
                        </div>
                    </div>
                    <span className="ri-star-line iq-star-toggle text-warning"></span>
                    <a className="iq-email-title">Jopour Xiong (Me)</a>
                </div>
                <div className="iq-email-content">
                    <a className="iq-email-subject">Mackenzie Barryo (@MackenzieBarryo) has sent
                        you a direct message on Twitter! &nbsp;–&nbsp;
                        <span>@MackenzieBarryo - Very cool :) Nicklas, You have a new direct message.</span>
                    </a>
                    <div className="iq-email-date">08:00 am</div>
                </div>
                <ul className="iq-social-media">
                    <li><a href="#"><i className="ri-delete-bin-2-line"></i></a></li>
                    <li><a href="#"><i className="ri-mail-line"></i></a></li>
                    <li><a href="#"><i className="ri-file-list-2-line"></i></a></li>
                    <li><a href="#"><i className="ri-time-line"></i></a></li>
                </ul>
            </div>
        </li>
    )
}

export default ListMessage