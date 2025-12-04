import React, {useState, type FormEvent} from "react";
import Button from "./button.tsx";

interface ContactFormProps {
  accessKey: string;
}

const ContactForm = ({ accessKey }: ContactFormProps) => {
  const [result, setResult] = useState("");
  
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    console.log("Submitting form...");
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success!" : "Error");
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <form className="w-full grid grid-cols-2 gap-x-10 gap-y-[50px]" onSubmit={onSubmit} method="POST">
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Name"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Email"
          />
        </label>
        <label htmlFor="subject">
          <input
            type="text"
            name="subject"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Subject"
          />
        </label>
        <label htmlFor="phone">
          <input
            type="number"
            name="phone"
            className="col-span-1 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
            placeholder="Phone"
          />
        </label>
        <textarea
          name="message"
          className="col-span-2 border-b w-full border-black outline-none py-3 text-base lg:text-[22px] lg:leading-[33px] tracking-tight font-jost text-text-gray"
          cols={30}
          rows={10}
          placeholder="Hello, I am interested in..."
        ></textarea>

        <p>{result}</p>

        <div className="w-full flex justify-end col-span-2">
          <Button text="Submit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
