import React from "react";
import luzma from "../assets/luzmashop/luzmashop-img.png";
import imss from "../assets/imss/imss-2-img.png";
import paymentAPI from "../assets/payment/payment-img.png";
import movies from "../assets/moviesMVC/movies-img.png";

const Projects = () => {
  const projects = [
    {
        img: luzma,
        title: "LuzmaShop",
        desc: " A E-commerce. Built with ASP.NET, Angular 16, EFcore, SQLserver and Bootstrap",
        live: "",
        code: "https://github.com/Agramonn/LuzmaShop",
      },
      {
        img: imss,
        title: "Medical Device Inventory.",
        desc: "System for the control and management of medical devices. Built with Djgando, Bootstrap, JavaScript and PostgreSQL",
        live: "https://tome.app/agramon/stockmed-clqdbck1g00vko661a3wxd6d9",
        code: "https://github.com/Agramonn/Medical-Devices-Managment-system/",
      },
      {
        img: paymentAPI,
        title: "Payment API",
        desc: "ASP.NET core web project, solved with Angular and .NET",
        live: "",
        code: "https://github.com/Agramonn/PaymentAPI",
      },
      {
        img: movies,
        title: "App MVC Movies",
        desc: "Designed and developed an MVC web application named MVC Movies using ASP.NET Core 8, adhering to the Model-View-Controller (MVC) architectural pattern",
        live: "",
        code: "https://github.com/Agramonn/MvcMovies",
      },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my best projects. I have built these with ASP.NET core,
            Angular and Bootstrap. Check them out.
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  {project.live !== '' && (
                    <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                    >
                      More info
                    </a>
                  )}
                    
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;