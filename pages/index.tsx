import Layout from "~/components/layouts"
import Row1 from "~/components/pages/home/row-1"
import Row2 from "~/components/pages/home/row-2"

const Profile = () => {
  return (
    <Layout
      title="Home"
    >
      <div className="row">
        <Row1 />
        <Row2 />
      </div>
    </Layout>
  )
}


export default Profile
