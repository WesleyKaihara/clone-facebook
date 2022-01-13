import Facebook from "../../images/logos/logofacebook.png";
import HomeIcon from "@mui/icons-material/Home";
import AmigosIcon from "@mui/icons-material/PeopleAlt";
import WatchIcon from "@mui/icons-material/OndemandVideo";
import StoreIcon from "@mui/icons-material/Storefront";
import GamesIcon from "@mui/icons-material/SportsEsports";
import AppsIcon from "@mui/icons-material/Apps";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Perfil from "../../images/cachorro.png";

import "./styles.css";

export const Header = (props) => {
  return (
    <header className="header">
      <div className="header_input_content">
        <img src={Facebook} alt="LogoFacebook" className="logo_img" />
        <input
          type="text"
          placeholder={" Pesquisar no Facebook"}
          className="header_input"
        />
      </div>
      <div className="Home">
        <ul className="home_abas">
          <li className="home_aba">
            <HomeIcon className="header_icon" />
          </li>
          <li className="home_aba">
            <AmigosIcon className="header_icon" />
          </li>
          <li className="home_aba">
            <WatchIcon className="header_icon" />
          </li>
          <li className="home_aba">
            <StoreIcon className="header_icon" />
          </li>
          <li className="home_aba">
            <GamesIcon className="header_icon" />
          </li>
        </ul>
      </div>
      <div className="header_config">
        <div className="header_perfil">
          <img src={Perfil} alt="Perfil" className="header_perfil_img" />
          <p className="header_perfil_name">{props.name}</p>
        </div>

        <ul className="header_config_circle">
          <li className="header_config_item">
            <AppsIcon />
          </li>
          <li className="header_config_item">
            <ChatIcon />
          </li>
          <li className="header_config_item">
            <NotificationsIcon />
          </li>
          <li className="header_config_item">
            <ArrowDropDownIcon />
          </li>
        </ul>
      </div>
    </header>
  );
};
