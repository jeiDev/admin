import Layout from "~/components/layouts"
import SidebarEmail from "~/components/pages/email/sidebar"
import MainEmail from "~/components/pages/email/main"

const Inbox = () => {

    return (
        <Layout 
            title="Email"
        >
            <div className="row">
                <div className="col-lg-3">
                    <SidebarEmail />
                </div>
                <div className="col-lg-9 mail-box-detail">
                    <MainEmail />
                </div>
            </div>
        </Layout>
    )
}

export default Inbox