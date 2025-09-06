import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactPage = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">Get in Touch</h1>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-6 mb-16 text-center">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-110 transition-transform duration-300">
          <MdEmail className="text-3xl mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-600 dark:text-gray-300">wahba.sh.pk@gmail.com</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-110 transition-transform duration-300">
          <MdPhone className="text-3xl mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-gray-600 dark:text-gray-300">+92 348 98 48 136</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:scale-110 transition-transform duration-300">
          <MdLocationOn className="text-3xl mx-auto text-primary mb-2" />
          <h3 className="font-semibold text-lg">Location</h3>
          <p className="text-gray-600 dark:text-gray-300">Peshawar, Pakistan</p>
        </div>
      </div>

      {/* Contact Form */}
      <form className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-3xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 gap-4 ">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          rows={5}
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button
          type="submit"
          className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/80 transition-colors duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
