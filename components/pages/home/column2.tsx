import PercentageCard from "~/components/others/cards/percentage-card"
import PublicationShortList from "~/components/others/publication/short-list"

const Column2Home = () => {

    return (
        <>
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
            <div className="col-lg-6">
                <PublicationShortList 
                    title="Publicaciones"
                    items={[
                        {
                            title: "Mansion", 
                            description: "Vendo mansion barata", 
                            price:  12434,
                            status: 1,
                            image: "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768"
                        },
                        {
                            title: "Mansion 2", 
                            description: "Vendo mansion barata", 
                            price:  12434,
                            status: 0,
                            image: "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768"
                        },
                        {
                            title: "Mansion 3", 
                            description: "Vendo mansion barata", 
                            price:  12434,
                            status: 0,
                            image: "https://pix10.agoda.net/hotelImages/9065853/-1/142d78192fda46d5b58e14c9d3f2fe51.jpg?s=1024x768"
                        }
                    ]}
                />
            </div>
        </>
    )
}

export default Column2Home