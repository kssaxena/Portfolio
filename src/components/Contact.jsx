import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <div className="flex flex-wrap items-center justify-center gap-7">
        <Link to={`/`} className="rounded-2xl border-4 border-neutral-800 p-2">
          <FiInstagram className="text-2xl text-red-500" />
        </Link>
        <Link to={`/`} className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaFacebookF className="text-2xl text-cyan-500" />
        </Link>
        <Link to={`/`} className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaGithub className="text-2xl text-white" />
        </Link>
        <Link to={`/`} className="rounded-2xl border-4 border-neutral-800 p-2">
          <FaLinkedinIn className="text-2xl text-blue-500" />
        </Link>
        <Link
          to={`kshitijsaxena9@gmail.com`}
          className="rounded-2xl border-4 border-neutral-800 p-2"
        >
          <BiLogoGmail className="text-2xl text-red-500" />
        </Link>
        <div className="flex flex-col justify-center items-center">
          <h1>Text for frequent reply</h1>
          <input
            className="bg-transparent border-neutral-900 border-4 rounded-2xl text-center p-2 flex justify-center items-center text-white w-full m-1"
            placeholder="Name"
            type="name"
            required={true}
          />
          <textarea
            className="bg-transparent border-neutral-900 border-4 rounded-2xl text-center p-2 flex justify-center items-center text-white w-full m-1"
            placeholder="Drop your query as well as your Contact Details.. "
            type="text"
            required={true}
          />
          <button className="bg-transparent border-neutral-900 border-4 rounded-2xl text-center p-2 flex justify-center items-center text-white w-fit px-5 m-1">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
