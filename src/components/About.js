import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My Name Is Pedro Gutierrez. I am a .NET developer. I build websites with ASP.NET core, Python, Bootstrap React and Tailwindcss.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like Angular, React, Tailwindcss, Bootstrap, and many more.
          </p>

          <p>In backend I know ASP.NET, Django, PostgreSQL, SQLserve, MySQL and Java.</p>

          <p>
            Proactive and self-motivated learner with a strong passion for software development, complemented by a background in biomedical engineering. Skilled in project management techniques, adept at supporting team operations, coordinating projects, and meeting design and programming requirements.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;