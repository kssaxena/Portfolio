import Mr_saxena_logo from "../assets/Mr_saxena_logo.png";
import { ABOUT_TEXT } from "../AllConstants/AllConstants";

const About = () => {
  const Image = [
    {
      id: "0",
      url: "https://res.cloudinary.com/dr5lcwbsx/image/upload/v1721488798/Portfolio/photo_jv2aiq.jpg",
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4 ">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img src={Image[0].url} className="rounded-xl w-1/2" alt="about_logo" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-center">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
