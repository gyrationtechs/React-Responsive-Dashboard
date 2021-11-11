// import { ArrowDownward } from "@material-ui/icons"
import "./featuredInfo.css"

export default function FeaturedInfo(props) {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">{props.title}</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{props.price}</span>
                    <span className="featuredMoneyRate">{props.rate} {props.arrow}</span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
        </div>
    )
}
