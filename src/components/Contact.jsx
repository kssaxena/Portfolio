import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const isFormFilled = () => {
    return form.message !== "" && form.email !== "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        {
          from_email: form.email,
          from_message: form.message,
        },
        process.env.PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Email sent successfully!");
          setForm({ email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-20 flex flex-col items-center justify-center gap-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-10 font-agile w-full bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-4xl text-transparent uppercase tracking-widest bg-red-500"
      >
        Contact
      </motion.h2>
      <section className="flex w-full justify-between items-center gap-5">
        <motion.img
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          src={`https://ik.imagekit.io/jarvisai/My_Portfolio/code.jpeg?updatedAt=1753988850496`}
          className="w-3/4 rounded-2xl"
        />
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1.5 }}
          ref={formRef}
          className="lg:flex flex-col justify-center items-center flex-wrap gap-7 hidden w-full "
        >
          <h1>Text for frequent response..</h1>
          <input
            className="bg-transparent border-neutral-900 border-4 rounded-2xl text-center p-2 flex justify-center items-center text-white w-full"
            placeholder="Enter your Email address"
            type="email"
            required={true}
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <textarea
            className="bg-transparent border-neutral-900 border-4 rounded-2xl text-center p-2 flex justify-center items-center text-white w-full h-96"
            placeholder="Drop your query as well as your Contact Details.. "
            type="text"
            required={true}
            name="message"
            value={form.message}
            onChange={handleChange}
          />
          <button
            disabled={!isFormFilled()}
            type="submit"
            onClick={handleSubmit}
            className="bg-transparent border-neutral-900 border-4 rounded-2xl text-center p-2 flex justify-center items-center text-white w-fit px-5"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </motion.div>
      </section>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-7"
      >
        <Link
          to={`https://www.instagram.com/mr_saxena007?igsh=a3I5MWVveXBzb2Iw`}
          className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FiInstagram className="text-2xl text-red-500" />
        </Link>
        <Link
          to={`https://www.facebook.com/profile.php?id=100006677474839&mibextid=ZbWKwL`}
          className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FaFacebookF className="text-2xl text-cyan-500" />
        </Link>
        <Link
          to={`https://github.com/kssaxena`}
          className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FaGithub className="text-2xl text-white" />
        </Link>
        <Link
          to={`https://www.linkedin.com/in/kshitij-saxena-16baa5261/`}
          className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <FaLinkedinIn className="text-2xl text-blue-500" />
        </Link>
        <Link
          to={`kshitijsaxena9@gmail.com`}
          className="rounded-2xl border-4 border-neutral-800 p-2 hover:-translate-y-2 duration-300 ease-in-out"
        >
          <BiLogoGmail className="text-2xl text-red-500" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Contact;

// // 🛑 Warning: This code may cause uncontrollable motivation 🛑

// const getLifeAdvice = () => {
//   const moods = ["motivated", "chaotic", "sleep-deprived", "legendary", "mildly confused"];
//   const skills = ["React", "JavaScript", "Node.js", "Googling things like a pro", "Fixing bugs I created myself"];
//   const punchlines = [
//     "Hire me now, before I become the CEO of something cool 🚀",
//     "Debugging is just solving mysteries where you’re the murderer 🔍",
//     "Code so clean it squeaks ✨",
//     "If coffee = true, then productivity = infinity ☕",
//     "Console.log('Dreams into Reality'); 💡"
//   ];

//   const random = arr => arr[Math.floor(Math.random() * arr.length)];

//   return `Today I'm feeling ${random(moods)}, mastering ${random(skills)}. ${random(punchlines)}`;
// };

// console.log("👋 Hey there, curious human! Welcome to my portfolio.");
// console.log("🔥 Pro Tip: Great developers don't just write code... they write stories for computers.");
// console.log("💡 Here's today's wisdom for you:");

// setInterval(() => console.log(getLifeAdvice()), 4000);

// // Yes, this code is useless. But so was the first Hello World. Now look at us. 🤖
