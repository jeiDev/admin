import IqChart from "~/components/others/charts/iq-chart"

const Column3Home = () => {

    return (
        <div className="col-lg-12">
            <IqChart
                title="Users"
                id="iq-chart-user"
                chart={{
                    category: "country",
                    valueY: "visits",
                    items: [{
                        country: "USA",
                        visits: 2025,
                        color: "#1e3d73"
                    }, {
                        country: "China",
                        visits: 1882,
                        color: "#fe517e"
                    }, {
                        country: "Japan",
                        visits: 1809,
                        color: "#99f6ca"
                    }, {
                        country: "Germany",
                        visits: 1322,
                        color: "#ffbf43"
                    }, {
                        country: "UK",
                        visits: 1122,
                        color: "#9267ff"
                    }, {
                        country: "France",
                        visits: 1114,
                        color: "#1e3d73"
                    }, {
                        country: "India",
                        visits: 984,
                        color: "#fe517e"
                    }, {
                        country: "Spain",
                        visits: 711,
                        color: "#99f6ca"
                    }, {
                        country: "Netherlands",
                        visits: 665,
                        color: "#ffbf43"
                    }, {
                        country: "Russia",
                        visits: 580,
                        color: "#9267ff"
                    }, {
                        country: "South Korea",
                        visits: 443,
                        color: "#1e3d73"
                    }, {
                        country: "Canada",
                        visits: 441,
                        color: "#fe517e"
                    }]
                }}
            />
        </div>
    )
}

export default Column3Home