import { useState } from "react";
import image from "../assets/contact.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "",
    timeline: "",
    minBudget: 150000,
    maxBudget: 500000,
    description: "",
    submittedAt: "", // Will store the timestamp
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Capture current timestamp in ISO format
    const timestamp = new Date().toISOString();

    // Include timestamp in form data
    const dataToSend = {
      ...formData,
      submittedAt: timestamp, // Adding timestamp to the request
    };

    try {
      const response = await fetch("https://home-decor-backend-uh0c.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          service: "",
          timeline: "",
          minBudget: 150000,
          maxBudget: 500000,
          description: "",
          submittedAt: "", // Reset timestamp
        });
      } else {
        setMessage(`Submission failed: ${data.error}`);
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center bg-gray-100 px-6 py-12">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl shadow-lg rounded-2xl overflow-hidden bg-white">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img src={image} alt="Decor" className="w-full h-full object-cover" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-6">
            Reach out via the form below, email us, or connect on social media.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />

            {/* Service Selection */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">Services Needed</label>
              <div className="flex gap-4">
                {["Residential", "Commercial", "Other Inquiry"].map((service) => (
                  <label key={service} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="service"
                      value={service}
                      checked={formData.service === service}
                      onChange={handleChange}
                      required
                      className="form-radio text-gray-800"
                    />
                    {service}
                  </label>
                ))}
              </div>
            </div>

            <input
              type="text"
              name="timeline"
              placeholder="Est. Project Timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:outline-none"
            />

            {/* Budget Section */}
            <div>
              <label className="block text-sm text-gray-700 mb-2">Estimated Budget Range</label>

              {/* Min Budget Input & Slider */}
              <div className="flex items-center gap-3">
                <span className="text-gray-600">Min:</span>
                <input
                  type="number"
                  name="minBudget"
                  value={formData.minBudget}
                  min="150000"
                  max={formData.maxBudget - 50000}
                  step="50000"
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg w-32"
                />
              </div>

              {/* Max Budget Input & Slider */}
              <div className="flex items-center gap-3 mt-3">
                <span className="text-gray-600">Max:</span>
                <input
                  type="number"
                  name="maxBudget"
                  value={formData.maxBudget}
                  min={formData.minBudget + 50000}
                  max="5000000"
                  step="50000"
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded-lg w-32"
                />
              </div>
            </div>

            <textarea
              name="description"
              placeholder="Describe your project..."
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:ring-2 focus:ring-gray-800 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {message && <p className="mt-4 text-gray-700">{message}</p>}

          <p className="mt-6 text-gray-600 text-sm">
            EMAIL US:{" "}
            <a href="mailto:homedecor@homedecor.com" className="text-gray-900 underline">
              homedecor@homedecor.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
