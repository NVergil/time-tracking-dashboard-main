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
          <svg
            width="21"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
            className="ellipsis"
          >
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#currentColor"
              fillRule="evenodd"
            />
          </svg>
        </div>
        <div className="_2">
          <p className="current-time">{current}hrs</p>
          <p className="previous-lapse">
            Last {lapse} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
