/* eslint-disable react/prop-types */
const UserCard = ({ activeButton, handleChangePeriod }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <img className="avatar" src="/image-jeremy.png" alt="user-image" />
        <span>Report for</span>
        <h1 className="username">
          Jeremy <br /> Robson
        </h1>
      </div>
      <div className="time-period-buttons">
        <button
          data-type="daily"
          type="button"
          className={activeButton === "daily" ? "active" : ""}
          onClick={handleChangePeriod}
        >
          Daily
        </button>
        <button
          data-type="weekly"
          type="button"
          className={activeButton === "weekly" ? "active" : ""}
          onClick={handleChangePeriod}
        >
          Weekly
        </button>
        <button
          data-type="monthly"
          type="button"
          className={activeButton === "monthly" ? "active" : ""}
          onClick={handleChangePeriod}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default UserCard;
