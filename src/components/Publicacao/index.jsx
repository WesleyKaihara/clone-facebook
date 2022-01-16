import "./styles.css";

import Cachorro from "../../images/cachorro.png";
import PublicIcon from "@mui/icons-material/Public";
import Image from "../../images/status1.jpeg";
import haha from "../../images/reactions/haha.png";
import like from "../../images/reactions/like.svg";
import wow from "../../images/reactions/wow.png";

export const Publicacao = (props) => {
  return (
    <div className="Publicacao">
      <div className="Publicacao_info">
        <img src={Cachorro} alt="Perfil" className="Publicacao_perfil" />
        <div>
          <h3 className="Publicacao_name">{props.name}</h3>
          <div className="Publicacao_time_info">
            <p className="Publicacao_time">{props.time}</p>
            <PublicIcon fontSize="2px" />
          </div>
        </div>
      </div>
      <img src={Image} alt="Publicacao" className="Publicacao_img" />
      <div className="Publicacao_actions_info">
        <div className="Publicacao_reactions">
          <img src={haha} alt="haha" className="reaction" />
          <img src={wow} alt="wow" className="reaction" />
          <img src={like} alt="like" className="reaction" />
        </div>
        <div className="Publicacao_comments_info">
          <p className="Publicacao_comments_item">187 comentários</p>
          <p className="Publicacao_comments_item">5 compartilhamentos</p>
        </div>
      </div>
      <hr className="Publicacao_linha" />
      <div className="Publicacao_actions">
        <button className="Action_button">Curtir</button>
        <button className="Action_button">Comentar</button>
        <button className="Action_button">Compartilhar</button>
      </div>
    </div>
  );
};
