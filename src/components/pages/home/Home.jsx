import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import { userData } from '../../../dummyData'
import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import WidgetLg from '../../widgetLg/WidgetLg'
import WidgetSm from '../../widgetSm/WidgetSm'
import './home.css'

export default function Home() {
    return (
        <div className="home">
            <div className="featuredList">

                <FeaturedInfo
                    title="Revenue"
                    price="$2,415"
                    rate="-11.4"
                    arrow={<ArrowDownward className="featuredIcon negative"/>}
                />
                <FeaturedInfo
                    title="Sales"
                    price="$4,415"
                    rate="-1.4"
                    arrow={<ArrowDownward className="featuredIcon negative"/>}
                />
                <FeaturedInfo
                    title="Cost"
                    price="$2,225"
                    rate="+2.4"
                    arrow={<ArrowUpward className="featuredIcon"/>}
                />
            </div>
            <Chart title="User Analytics" data={userData} dataKey="Active User" grid />
            <div className="widgetArea">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
