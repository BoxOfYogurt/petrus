import { useState } from "react";

export const useForm = (initialState: any) => {
  const [formData, setFormData] = useState(initialState);

  const formDispatch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { formData, formDispatch };
};
