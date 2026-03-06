import React from "react";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#f5f3ef] w-full">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE */}
        <div>

          <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>

          <p className="text-gray-500 text-sm mb-10 max-w-md">
            Have a question about products, orders, or anything else?
            Reach out to our team, we're happy to help and ready to respond quickly.
          </p>

          {/* Address + Email */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">

            <div className="bg-white p-6 rounded-md border">
              <FaMapMarkerAlt className="text-gray-500 mb-3" />
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="text-sm text-gray-500">
                Abc, city, street, country
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border">
              <FaEnvelope className="text-gray-500 mb-3" />
              <h4 className="font-semibold mb-2">Email Address</h4>
              <p className="text-sm text-gray-500">
                hello@campstore.com
              </p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-white p-6 rounded-md border">
            <h4 className="font-semibold mb-4">Business Hours</h4>

            <div className="grid grid-cols-3 text-sm text-gray-600 gap-4">

              <div>
                <p className="font-medium">Monday - Friday</p>
                <p>09:00 am - 08:00 pm</p>
              </div>

              <div>
                <p className="font-medium">Saturday</p>
                <p>09:00 am - 06:00 pm</p>
              </div>

              <div>
                <p className="font-medium">Sunday</p>
                <p>09:00 am - 05:00 pm</p>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE CONTACT FORM */}
        <div className="bg-white p-8 rounded-md border">

          <h3 className="text-lg font-semibold mb-1">Contact Form</h3>
          <p className="text-sm text-gray-500 mb-6">
            It takes less than a minute. We'll contact you shortly.
          </p>

          <form className="space-y-4">

            <div>
              <label className="text-sm">Full Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-md px-3 py-2 mt-1 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="User@gmail.com"
                className="w-full border rounded-md px-3 py-2 mt-1 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm">Phone Number</label>
              <input
                type="text"
                placeholder="+44 000 0000 000"
                className="w-full border rounded-md px-3 py-2 mt-1 outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="text-sm">Special Notes</label>
              <textarea
                rows="4"
                placeholder="Write your message here"
                className="w-full border rounded-md px-3 py-2 mt-1 outline-none focus:border-green-500"
              />
            </div>

            <button className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition">
              Submit Now →
            </button>

          </form>

        </div>

      </div>

      {/* MAP SECTION */}
      <div className="w-full h-[420px]">

        <iframe
          title="map"
          src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0"
        ></iframe>

      </div>

    </div>
  );
};

export default ContactUs;