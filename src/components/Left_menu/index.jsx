import "./styles.css";
import { MenuItem } from "../MenuItem";
import Img from "../../images/cachorro.png";
import Amigos from "../../images/icones/amigos.png";
import Empregos from "../../images/icones/empregos.png";
import Grupos from "../../images/icones/grupos.png";
import Marketplace from "../../images/icones/Marketplace.png";
import Salvos from "../../images/icones/salvos.png";
import Watch from "../../images/icones/watch.png";
import VerMais from "../../images/icones/Vermais.png";
import CoinMaster from "../../images/icones/coinmaster.png";
import Perguntados from "../../images/icones/perguntados.png";
import DragonCity from "../../images/icones/dragoncity.jpeg";

export const LeftMenu = () => {
  return (
    <div className="LeftMenu">
      <div className="LeftMenu_content">
        <MenuItem text="Wesley kaihara" src={Img} />
        <MenuItem text="Amigos" src={Amigos} />
        <MenuItem text="Marketplace" src={Marketplace} />
        <MenuItem text="Salvos" src={Salvos} />
        <MenuItem text="Empregos" src={Empregos} />
        <MenuItem text="Watch" src={Watch} />
        <MenuItem text="Grupos" src={Grupos} />
        <MenuItem text="Ver mais" src={VerMais} />
        <hr className="Linha" />
        <h2 className="LeftMenu_atalhos">Seus atalhos</h2>
        <MenuItem text="Coin Master" src={CoinMaster} />
        <MenuItem text="Perguntados" src={Perguntados} />
        <MenuItem text="Dragon City" src={DragonCity} />
      </div>
    </div>
  );
};
