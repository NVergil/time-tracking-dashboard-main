/* eslint-disable react/prop-types */
import { handleCardInfo } from "../utils/handlers";

const Card = ({ data, activeButton }) => {
  const { title, imgUrl, color, current, previous, lapse } = handleCardInfo(
    data,
    activeButton
  );

  return (
    <div className="card-container">
      <div className="top-design" style={{ background: color }}>
        <img src={imgUrl} alt="work-icon" className="logo" />
      </div>
      <div className="time-container">
        <div className="title">
          <p>{title}</p>
          <img src="/src/assets/icon-ellipsis.svg" alt="" />
        </div>
        <p className="current-time">{current}hrs</p>
        <p className="previous-lapse">
          Last {lapse} - {previous}hrs
        </p>
      </div>
    </div>
  );
};

export default Card;
