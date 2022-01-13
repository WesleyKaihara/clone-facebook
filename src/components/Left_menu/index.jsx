import "./styles.css";
import { MenuItem } from "../MenuItem";
import Img from "../../images/cachorro.png";
export const LeftMenu = () => {
  return (
    <div className="LeftMenu">
      <div className="LeftMenu_content">
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
        <hr className="Linha" />
        <h2 className="LeftMenu_atalhos">Seus atalhos</h2>
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
        <MenuItem text="Marketplace" src={Img} />
      </div>
    </div>
  );
};
