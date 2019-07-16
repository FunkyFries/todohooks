import { useState } from "react";

export default (initialVal: any) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = () => {
    setValue((prevValue: boolean) => !prevValue);
  };
  return [value, handleChange];
};
