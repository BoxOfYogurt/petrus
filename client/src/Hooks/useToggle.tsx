import { useState } from "react";

export const useToggle = (value: boolean) => {
  const [switchValue, setSwitchValue] = useState<boolean | null>(value);

  const handleSwitch = (value: boolean) => {
    setSwitchValue(!switchValue);
  };

  return { switchValue, handleSwitch };
};
