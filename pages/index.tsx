import Layout from "~/components/layouts"
import PercentageCard from "~/components/others/cards/percentage-card"

const Profile = () => {
  return (
    <Layout
      title="Home"
    >
      <div className="row">
        <div className="col-lg-6">
          <div className="row">
            <div className="col-md-6">
              <PercentageCard
                title="Revenue"
                subValue="$"
                value={35000}
                label="Monthly"
                color="primary"
                percentage={35}
              />
            </div>
            <div className="col-md-6">
              <PercentageCard
                title="Orders"
                subValue="$"
                value={2500}
                label="Anual"
                color="warning"
                percentage={24}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <PercentageCard
                title="Leads"
                subValue="$"
                value={55000}
                label="Today"
                color="danger"
                percentage={50}
              />
            </div>
            <div className="col-md-6">
              <PercentageCard
                title="Lead Conversion Rate"
                value={35}
                nextValue="%"
                label="This Month"
                color="info"
                percentage={5}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    </Layout>
  )
}


export default Profile
