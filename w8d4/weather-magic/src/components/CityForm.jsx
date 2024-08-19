import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const { onSubmit } = props;

  const initialData = { cityName: "" };
  const { formData, handleChange, handleSubmit } = useForm(initialData, onSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cityName"
        placeholder="Enter the city name"
        onChange={handleChange}
        value={formData.cityName}
      />
      <button>Fetch weather!</button>
    </form>
  );
}
