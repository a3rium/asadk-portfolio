"use client";
import React, { FormEvent } from "react";

const ContactForm = () => {
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    const apiKey = process.env.NEXT_PUBLIC_WEB3FORM_KEY;

    formData.append("access_key", apiKey as string);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // console.log(json);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="block max-w-sm md:max-w-md border-[1px] p-2 border-primary"
      >
        <div className="mb-6 relative group mt-3">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm md:text-base text-white bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-0 peer"
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm md:text-base text-secondary duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Name:
          </label>
        </div>
        <div className="mb-6 relative group">
          <input
            type="text"
            id="company"
            name="company"
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm md:text-base text-white bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-0 peer"
          />
          <label
            htmlFor="company"
            className="peer-focus:font-medium absolute text-sm md:text-base text-secondary duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Comany:
          </label>
        </div>
        <div className="mb-6 relative group">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm md:text-base text-white bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-0 peer"
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm md:text-base text-secondary duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email:
          </label>
        </div>
        <div className="mb-6 relative group">
          <textarea
            id="message"
            name="message"
            placeholder=" "
            required
            className="block py-2.5 px-0 w-full text-sm md:text-base text-white bg-transparent border-0 border-b-[1px] appearance-none focus:outline-none focus:ring-0 peer"
          ></textarea>
          <label
            htmlFor="message"
            className="peer-focus:font-medium absolute text-sm md:text-base text-secondary duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Message:
          </label>
        </div>
        <div className="mb-5">
          <button
            type="submit"
            className="text-secondary ring-1 ring-secondary hover:bg-primary font-medium rounded-lg text-sm md:text-base w-full px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
