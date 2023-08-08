import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DownloadIcon from "@mui/icons-material/Download";

const SecondaryDropDownMenu = () => {
  const navs = [
    {
      title: "Notification Preferences",
      icon: <NotificationsIcon sx={{ fontSize: "18px" ,color:'#24292e' }} />,
      redirect: "https://www.MNFST.com/communication-preferences/push",
    },
    {
      title: "Sell on MNFST",
      icon: <BusinessCenterIcon sx={{ fontSize: "18px",color:'#24292e' }} />,
      redirect: "https://seller.MNFST.com/sell-online",
    },
    {
      title: "24x7 Customer Care",
      icon: <LiveHelpIcon sx={{ fontSize: "18px",color:'#24292e' }} />,
      redirect: "https://www.MNFST.com/helpcentre",
    },
    {
      title: "Advertise",
      icon: <TrendingUpIcon sx={{ fontSize: "18px",color:'#24292e' }} />,
      redirect: "https://advertising.MNFST.com",
    },
    {
      title: "Download App",
      icon: <DownloadIcon sx={{ fontSize: "18px" ,color:'#24292e'}} />,
      redirect: "https://www.MNFST.com/mobile-apps",
    },
  ];

  return (
    <div className="absolute w-60  right-[6.5rem] top-9 bg-white shadow-2xl rounded flex-col text-sm">
      {navs.map((item, i) => {
        const { title, icon, redirect } = item;

        return (
          <a
            className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t"
            href={'#'}
            key={i}
          >
            <span className="text-primary-blue">{icon}</span>
            {title}
          </a>
        );
      })}

      <div className="absolute right-1/2 -top-2.5">
        <div className="arrow_down"></div>
      </div>
    </div>
  );
};

export default SecondaryDropDownMenu;
