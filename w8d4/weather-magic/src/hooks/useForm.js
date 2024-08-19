import { useState } from "react";

export default function useForm(initialFormData, onSubmit){
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData)
    setFormData(initialFormData)
  };

  return {formData, handleChange, handleSubmit}
}