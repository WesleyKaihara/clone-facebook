import "./styles.css";

export const MenuItem = (props) => {
  return (
    <div className="MenuItem">
      <img src={props.src} alt="ItemImg" className="MenuItem_img" />
      <p className="MenuItem_text">{props.text}</p>
    </div>
  );
};
