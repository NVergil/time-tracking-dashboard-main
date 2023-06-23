import { useState } from "react";

export const useActiveButton = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleChangePeriod = (e) => {
    const dataType = e.target.dataset.type;
    setActiveButton(dataType);
  };

  return { activeButton, setActiveButton, handleChangePeriod };
};
