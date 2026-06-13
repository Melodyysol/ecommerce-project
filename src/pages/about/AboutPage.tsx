import { useEffect } from "react";
import Header from "../../components/Header";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

import DeveloperImage from "../../../dist/assets/developerImage.png";
const AboutPage = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <main>
      <Header />
      <section className="w-10/12 mx-auto mt-20 text-base-content">
        <h1 className="text-center text-4xl md:text-6xl font-bold" data-testId="header-message">
          We love{" "}
          <span className="bg-primary text-gray-300 rounded-2xl py-4 px-8 md:text-3xl">
            Comfy
          </span>
        </h1>
        <p className="mt-10 max-w-2xl mx-auto leading-loose text-lg">
          At Comfy, we are passionate about creating a cozy and inviting
          shopping experience for our customers. Our mission is to provide a
          wide range of high-quality products that bring comfort and joy to your
          everyday life. Whether you're looking for stylish home decor, cozy
          apparel, or unique gifts, we've got you covered. We believe that
          shopping should be a delightful experience, and we strive to make
          every visit to Comfy a memorable one. Thank you for being a part of
          our community!
        </p>
      </section>
      {/* Developer Section */}
      <section className="w-full my-20 bg-base-200 py-20">
        <div className="w-10/12 mx-auto text-base-content">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10">
            Meet the Developer
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
            <img
              src={DeveloperImage}
              alt="Developer"
              className="w-48 h-48 rounded-full object-cover"
              data-testId="developer-image"
            />
            <div>
              <h3 className="text-2xl font-semibold">Abdulwaris Atere</h3>
              <p className="mt-4 max-w-md leading-loose text-lg">
                Abdulwaris Atere is a passionate web developer with a love for
                creating intuitive and user-friendly applications. With a
                background in both frontend and backend development, Abdulwaris
                enjoys working on projects that challenge his skills and allow
                him to learn new technologies. When he's not coding, Abdulwaris
                loves hiking, cooking, and spending time with his family.
              </p>
            </div>
          </div>
        </div>
        {/* Contact Section */}
        <div className="w-10/12 mx-auto my-10 text-base-content">
          <h2 className="text-center text-3xl md:text-5xl font-bold mb-10">
            Get in Touch
          </h2>
          <p className="text-center text-lg mb-6">
            Have questions or want to say hello? Feel free to reach out!
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:issaabdulwaris212@gmail.com"
              className="btn btn-primary"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-base-300 text-base-content py-10">
        <div className="w-10/12 mx-auto text-center mb-4">
          <h2 className="text-2xl font-bold">Comfy</h2>
          <p className="mt-2">Your cozy online store for all things comfy.</p>
        </div>
        <div className="w-10/12 mx-auto text-center mb-4">
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="mt-2">Email: issaabdulwaris212@gmail.com</p>
          <p className="mt-1">Phone: +234 80 3825 7481</p>
          <div className="mt-1 flex justify-center gap-6 items-center">
            Socials:{" "}
            <a
              target="_blank"
              href="https://instagram.com/issaabdulwaris212/"
              className="link link-primary"
            >
              <FiInstagram />
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              href="https://www.linkedin.com/in/issa-abdulwaris-b4329639b/"
              className="link link-primary"
            >
              <FaLinkedinIn />
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              href="https://x.com/melody_shiller"
              className="link link-primary"
            >
              <BsTwitter />
            </a>{" "}
            |{" "}
            <a
              target="_blank"
              href="https://github.com/Melodyysol"
              className="link link-primary"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Comfy. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default AboutPage;
