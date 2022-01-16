import "./styles.css";

import Cachorro from "../../images/cachorro.png";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

export const MainPensando = () => {
  return (
    <div className="MainPensando">
      <div className="Pensado_input_content">
        <img src={Cachorro} alt="Perfil" className="Pensando_perfil" />
        <input
          type="text"
          name="Pensando"
          placeholder="O que você está pensando,Wesley?"
          className="Pensando_input"
        />
      </div>
      <hr className="Pensando_linha" />
      <div className="Pensando_itens">
        <div className="Pensando_item">
          <LiveTvIcon className="Pensando_icon" />
          <p>Video ao vivo</p>
        </div>
        <div className="Pensando_item">
          <PhotoLibraryIcon className="Pensando_icon" />
          <p>Foto/video</p>
        </div>
        <div className="Pensando_item">
          <InsertEmoticonIcon className="Pensando_icon" />
          <p>Sentimento/atividade</p>
        </div>
      </div>
    </div>
  );
};
