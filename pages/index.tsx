import Layout from "~/components/layouts"
import Column1 from "~/components/pages/home/column1"
import Column2 from "~/components/pages/home/column2"
import Column3 from "~/components/pages/home/column3"
import Column4 from "~/components/pages/home/column4"

const Profile = () => {
  return (
    <Layout
      title="Home"
    >
      <div className="row">
        <Column1 />
        <Column2 />
        <Column3 />
        <Column4 />
      </div>
    </Layout>
  )
}


export default Profile
