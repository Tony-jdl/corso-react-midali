import React, { useState, useContext } from "react";
import { ProvaContext } from "../stores/ProvaContext";

function CardForm({ addCity }) {
  const [formData, setFormData] = useState({
    title: "",
    imgUrl: "",
    description: "",
    isVisited: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCity = {
      key: Math.random(),
      isVisited: formData.isVisited,
      title: formData.title,
      imgUrl: formData.imgUrl,
      description: formData.description,
    };
    addCity(newCity);
  };

  const handleChangeInput = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const {count, setCount} = useContext(ProvaContext);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mb-10 bg-slate-900 rounded-md m-15 p-5 text-gray-200"
    >
      <div className="flex flex-col">
        <label>Città {count}</label>
        <input
          className="text-black"
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex flex-col">
        <label>URL Immagine</label>
        <input
          className="text-black"
          type="text"
          name="imgUrl"
          value={formData.imgUrl}
          onChange={handleChangeInput}
        />
      </div>
      <div className="flex flex-col">
        <label>Descrizione</label>
        <textarea
          className="text-black"
          name="description"
          value={formData.description}
          onChange={handleChangeInput}
        />
      </div>
      <div>
        <label>Visitata</label>
        <input
          type="checkbox"
          name="isVisited"
          checked={formData.isVisited}
          onChange={handleChangeInput}
        />
      </div>
      <div className="bg-gray-400 rounded-md">
        <button type="submit">Aggiungi Card</button>
      </div>
    </form>
  );
}

export default CardForm;
