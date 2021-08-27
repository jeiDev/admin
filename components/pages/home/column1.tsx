import SocialCard from "~/components/others/cards/social-card"

const Column1Home = () => {

    return (
        <>
            <div className="col-md-6 col-lg-3">
                <SocialCard
                    color="primary"
                    label="Referencia"
                    value="650"
                    social="ri-facebook-fill"
                />
            </div>
            <div className="col-md-6 col-lg-3">
                <SocialCard
                    color="danger"
                    label="Referencia"
                    value="480"
                    social="ri-google-fill"
                />
            </div>
            <div className="col-md-6 col-lg-3">
                <SocialCard
                    color="info"
                    label="Referencia"
                    value="320"
                    social="ri-twitter-fill"
                />
            </div>
            <div className="col-md-6 col-lg-3">
                <SocialCard
                    color="danger"
                    label="Referencia"
                    value="650"
                    social="ri-youtube-fill"
                />
            </div>
        </>
    )
}

export default Column1Home