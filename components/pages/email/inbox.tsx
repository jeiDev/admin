import List from "./list"
import Message from "./message"

const Inbox = () => {

    return (
        <div className="iq-email-listbox">
            <div className="tab-content">
                <div className="tab-pane fade active show" id="mail-inbox" role="tabpanel">
                    <ul className="iq-email-sender-list">
                        <List />
                        <Message />
                    </ul>
                </div>

                <div className="tab-pane fade" id="mail-starred" role="tabpanel">
                    <ul className="iq-email-sender-list">
                        hello
                    </ul>
                </div>
            </div>
        </div>
    )
} 

export default Inbox