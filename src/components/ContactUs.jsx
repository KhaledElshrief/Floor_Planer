import React, { useState } from "react";
import TopNav from "./TopNav";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    message: "",
  });
  let userToken = localStorage.getItem("token");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Replace 'your-api-endpoint' with the actual API endpoint
    const apiEndpoint =
      "https://grackle-notable-hardly.ngrok-free.app/api/contact_message/";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message sent successfully");
        // Reset the form
        setFormData({
          message: "",
        });
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <TopNav />
      <div className=" flex items-center justify-center bg-gray-100 text-center p-32 rounded">
        <div className="bg-white shadow-md rounded p-10">
          <h2 className="text-3xl font-semibold mb-6 text-center text-[#c29525]">
            Contact Us
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center "
          >
            {/* <div className="mb-4 flex flex-col items-start p-2">
              <label
                className="block text-gray-800 text-xl font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input  "
                required
              />
            </div>
            <div className="mb-4 flex flex-col items-start p-2">
              <label
                className="block text-gray-800 text-xl font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
            </div> */}
            <div className="mb-4 flex flex-col items-start p-2">
              <label
                className="block text-gray-800 text-xl font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="input h-32 w-[330px] rounded"
                required
              />
            </div>
            <button type="submit" className="btn-primary  rounded">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
