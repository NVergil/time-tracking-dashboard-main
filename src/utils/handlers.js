import { useState } from "react";

export const useActiveButton = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleChangePeriod = (e) => {
    const dataType = e.target.dataset.type;
    setActiveButton(dataType);
  };

  return { activeButton, setActiveButton, handleChangePeriod };
};

export const handleCardInfo = (data, activeButton) => {
  const {
    title,
    imgUrl,
    color,
    timeframes: {
      [activeButton]: { current, previous },
    },
  } = data;

  let lapse;

  switch (activeButton) {
    case "daily":
      lapse = "Day";
      break;
    case "weekly":
      lapse = "Week";
      break;
    case "monthly":
      lapse = "Month";
      break;
  }

  return { title, imgUrl, color, current, previous, lapse };
};
