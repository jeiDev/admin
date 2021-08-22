import classNames from "classnames"
import { SocialCardPropsI } from "~/interfaces"

const SocialCard = ({ color, value, label, social }: SocialCardPropsI) => {

    return (
        <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div className="iq-card-body p-0">
                <div className="social-media-block d-flex w-100">
                    <div className={classNames("iq-card-icon", `bg-${color}`, "mr-3")}>
                        <i className={social}></i>
                    </div>
                    <div className="data-block d-flex align-items-center justify-content-between">
                        <h2 className="line-height">{value}</h2>
                        <p className="mb-0 line-height pr-3">{label}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialCard