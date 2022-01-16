import "./styles.css";

import Status1 from "../../images/status1.jpeg";
export const Status = () => {
  return (
    <div className="Status">
      <div className="status_item">
        <img src={Status1} alt="Status" className="status_img" />
        <p></p>
      </div>

      <div className="status_item">
        <img src={Status1} alt="Status" className="status_img" />
        <p className="status_name">Wesley Kaihara</p>
      </div>

      <div className="status_item">
        <img src={Status1} alt="Status" className="status_img" />
        <p className="status_name">Wesley Kaihara</p>
      </div>

      <div className="status_item">
        <img src={Status1} alt="Status" className="status_img" />
        <p className="status_name">Wesley Kaihara </p>
      </div>
    </div>
  );
};
