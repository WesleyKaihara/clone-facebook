import "./styles.css";

import { MenuItem } from "../MenuItem";
import Img from "../../images/cachorro.png";

export const RightMenu = () => {
  return (
    <div className="RightMenu">
      <div>
        <h2 className="RightMenu_Atalhos">Patrocinado</h2>
        <hr className="Linha" />
        <div>
          <h2 className="RightMenu_Atalhos">Contatos</h2>
        </div>
        <MenuItem text="Wesley kaihara" src={Img} />
        <MenuItem text="Wesley kaihara" src={Img} />
        <MenuItem text="Wesley kaihara" src={Img} />
        <MenuItem text="Wesley kaihara" src={Img} />
        <MenuItem text="Wesley kaihara" src={Img} />
        <MenuItem text="Wesley kaihara" src={Img} />
        <MenuItem text="Wesley kaihara" src={Img} />
        <MenuItem text="Wesley kaihara" src={Img} />
        <hr className="Linha" />
        <h2 className="RightMenu_Atalhos">Conversas em grupo</h2>
      </div>
    </div>
  );
};
