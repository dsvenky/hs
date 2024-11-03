import { useState } from "react";
import appt from "../assets/appointment dental bg.jpg";

export const ContactForm = () => {
  const [form, setForm] = useState({ email: "", name: "" });

  function handleOnChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <div className="mt-5 max-w-md w-full mx-auto backdrop-blur-lg rounded-md">
      <form
        onSubmit={handleSubmit}
        className="shadow-md shadow-slate-600 p-10 rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="name" className="text-blue-900 text-lg block">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleOnChange}
            className="hover:border-slate-500 w-full h-10 focus:border-blue-500 focus:outline-none border-2 rounded-lg pl-4 placeholder:pl-6"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="text-blue-900 text-lg block">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleOnChange}
            className="hover:border-slate-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg w-full h-10 pl-4 placeholder:pl-6"
            pattern="+91[0-9]{10}"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-blue-900 text-lg block">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
            className="hover:border-slate-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg w-full h-10 pl-4 placeholder:pl-6"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-blue-900 text-lg block">
            Message/Inquiry
          </label>
          <textarea
            name="message"
            placeholder="Messages / Inquiry"
            onChange={handleOnChange}
            className="hover:border-slate-500 border-2 focus:border-blue-500 focus:outline-none rounded-lg w-full pl-4 min-h-[4rem] placeholder:pl-6 pt-2"
          />
        </div>
        <button
          className="mt-3 bg-orange-500 p-2 rounded-md w-full h-10"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export const AppointmentForm = () => {
  const [form, setForm] = useState({ email: "", name: "" });

  function handleOnChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", form);
  };

  return (
    <div className="mt-10 max-w-4xl mx-auto flex flex-col md:flex-row backdrop-blur-lg rounded-lg shadow-md shadow-slate-600">
      <form onSubmit={handleSubmit} className="p-10 flex-1">
        <h3 className="text-center p-2 text-4xl text-blue-900">
          Book Appointment For Dentist...
        </h3>
        <div className="mb-4">
          <label htmlFor="name" className="text-blue-900 text-lg block">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleOnChange}
            className="hover:border-slate-500 w-full h-10 focus:border-blue-500 focus:outline-none border-2 rounded-lg pl-4 placeholder:pl-6"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="text-blue-900 text-lg block">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleOnChange}
            className="hover:border-slate-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg w-full h-10 pl-4 placeholder:pl-6"
            pattern="+91[0-9]{10}"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-blue-900 text-lg block">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
            className="hover:border-slate-500 focus:border-blue-500 focus:outline-none border-2 rounded-lg w-full h-10 pl-4 placeholder:pl-6"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="text-blue-900 text-lg block">
            Date
          </label>
          <input
            type="date"
            name="date"
            onChange={handleOnChange}
            className="hover:border-slate-500 focus:outline-none border-2 rounded-lg w-full h-10 pl-4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="text-blue-900 text-lg block">
            Time
          </label>
          <input
            type="time"
            name="time"
            onChange={handleOnChange}
            className="hover:border-slate-500 focus:outline-none border-2 rounded-lg w-full h-10 pl-4"
          />
        </div>
        <button
          className="mt-3 bg-orange-500 p-2 rounded-md w-full h-10"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="mt-10 md:mt-0 flex justify-center items-center">
        <img
          src={appt}
          alt="Appointment"
          className="w-full max-w-xs h-auto rounded-xl"
        />
      </div>
    </div>
  );
};
