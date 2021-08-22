import classNames from "classnames"
import { PercentageCardPropsI } from "~/interfaces/card.interface"

const PercentageCard = (props: PercentageCardPropsI) => {
    const {label, title, value, subValue, nextValue, color, percentage} = props

    return (
        <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div className="iq-card-body">
                <div className="top-block d-flex align-items-center justify-content-between">
                    <h5>{title}</h5>
                    <span className={classNames("badge", `badge-${color}`)}>{label}</span>
                </div>
                <h3>{subValue}<span className="counter">{value}</span>{nextValue}</h3>
                <div className="d-flex align-items-center justify-content-between mt-1">
                    <p className="mb-0">Total Revenue</p>
                    <span className={`text-${color}`}>{percentage}%</span>
                </div>
                <div className="iq-progress-bar mt-3">
                    <span className={`bg-${color}`} data-percent={percentage} style={{transition: "width 2s ease 0s", width: 0}}></span>
                </div>
            </div>
        </div>
    )
}

export default PercentageCard