import React from "react";

const Form = ({ addUser }) => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const user = {
      key: Math.random(),
      name: form.name,
      email: form.email,
    };
    addUser(user);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    const inputValue = value;
    setForm({ ...form, [name]: inputValue });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="form rounded-lg p-5 bg-slate-600 flex flex-col mb-10 w-80"
    >
      <h3 className="text-white">Form</h3>
      <p></p>
      <div className="flex p-2">
        <div className="text-white pr-2">
          <label htmlFor="name">Name: </label>
        </div>
        <input
          className="w-full"
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex p-2">
        <div className="text-white pr-2">
          <label htmlFor="email">Email: </label>
        </div>
        <input
          className="w-full"
          type="text"
          name="email"
          value={form.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex p-2">
        <div className="text-white pr-2">
          <label htmlFor="password">Password: </label>
        </div>
        <input
          className="w-full"
          type="password"
          name="password"
          value={form.password}
          onChange={handleInputChange}
        />
      </div>
      <button className="bg-slate-800 text-white" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
