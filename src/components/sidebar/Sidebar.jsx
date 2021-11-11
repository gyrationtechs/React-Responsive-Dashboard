import { AttachMoney, 
    ChatBubbleOutline, 
    DynamicFeed, 
    Feedback, 
    GifOutlined, 
    LineStyle, 
    Mail, 
    MailOutline, 
    Message, 
    MessageOutlined, 
    Money, 
    PermIdentity, 
    Person, 
    PersonOutline, 
    Report, 
    ReportOff, 
    Storefront, 
    Timeline, 
    TrendingUp, 
    WorkOutline } from '@material-ui/icons';
import {Link} from "react-router-dom"
import './sidebar.css';
import SidebarList from './SidebarList';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <SidebarList 
                    title="Dashboard" 
                    active="active"
                    listOne={<Link to="/" className="link">Home</Link>} 
                    listTwo="Analytics"
                    listThree="Sales"
                    sidebarIconOne={<LineStyle className="sidebarIcon"/>}
                    sidebarIconTwo={<Timeline className="sidebarIcon"/>}
                    sidebarIconThree={<TrendingUp className="sidebarIcon"/>}         
                    />
                </div>
                <div className="sidebarMenu">
                    <SidebarList 
                    title="Quick Menu" 
                    listOne={<Link to="/users" className="link">Users</Link>} 
                    listTwo={<Link to="/products" className="link">Products</Link>}
                    listThree="Transactions"
                    listFour="Reports"
                    sidebarIconOne={<PermIdentity className="sidebarIcon"/>}
                    sidebarIconTwo={<Storefront className="sidebarIcon"/>}
                    sidebarIconThree={<AttachMoney className="sidebarIcon"/>}         
                    sidebarIconFour={<ReportOff className="sidebarIcon"/>}         
                    />
                </div>
                <div className="sidebarMenu">
                    <SidebarList 
                    title="Notifications" 
                    listOne="Mail" 
                    listTwo="Feedback"
                    listThree="Messages"
                    sidebarIconOne={<MailOutline className="sidebarIcon" />}
                    sidebarIconTwo={<DynamicFeed className="sidebarIcon" />}
                    sidebarIconThree={<ChatBubbleOutline className="sidebarIcon" />}         
                    />
                </div>
                <div className="sidebarMenu">
                    <SidebarList 
                    title="Staff" 
                    listOne="Manage" 
                    listTwo="Analytics"
                    listThree="Reports"
                    sidebarIconOne={<WorkOutline className="sidebarIcon"/>}
                    sidebarIconTwo={<Timeline className="sidebarIcon"/>}
                    sidebarIconThree={<Report className="sidebarIcon"/>}         
                    />
                </div>
            </div> 
        </div>
    )
}
