import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different" data-aos="fade-right">
          🌐My Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/95869206/156205052-f08f250b-e53d-4273-b990-af52d3e14a9c.png"
                  alt="Flatheads"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Flatheads Replica</h2>
              <p>
                This is a clone of Flatheads .com. It is an e-commerce platform
                where users may purchase various types of sneakers. Main
                functionalities were : Register/Login using JWT, Sorting and
                Filtering in the backend, Cart and Payment and many more.
              </p>
              <div>
                <SiHtml5 />
                <IoLogoJavascript />
                <SiNodedotjs />
                <SiExpress />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://flatheads-official.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Deployment
                  </span>
                </a>
                <a
                  href="https://github.com/jeevan243/flatheads"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    Source Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Purplle Clone  */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/67849097/146674910-ca9d9f02-b7bd-40dc-a0e6-89e9046ee47c.jpg"
                  alt="Purplle Clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Purplle Clone</h2>
              <p>
                Purplle is an online store selling cosmetics, fragrances, skin,
                and hair care products. It gives an online space to beauty and
                wellness needs that showcases some of the beauty brands and
                products. It's a team project completed executed in 5 days.
              </p>
              <div>
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://purplle.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Deployment
                  </span>
                </a>
                <a
                  href="https://github.com/Duwesh/Purplle.com_web_clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    Source Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Flathead Frontend  */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/67849097/150683219-017c3ee0-76bc-4d63-90ea-3dbb91a076cc.png"
                  alt="Flatheads Clone"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Flatheads Clone</h2>
              <p>
                This is clone of Flatheads.com, It is an e-commerce platform
                where users may purchase various types of sneakers. Where we
                have used HTML, CSS and Advance Javascript to acheive this. It's
                a team project completed executed in 5 days.
              </p>
              <div>
                <IoLogoJavascript />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://flatheads-clone-gamma.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Deployment
                  </span>
                </a>
                <a
                  href="https://github.com/Duwesh/Flatheads-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    Source Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Weather App  */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/67849097/158363501-a7dd3fec-ae8a-4361-99ce-826e5e5183c5.png"
                  alt="Weather App"
                />
              </div>
            </div>

            <div className="project_information" data-aos="fade-right">
              <h2>PWA Weather App</h2>
              <p>
                This is a beautiful progressive web app where you can fetch data
                from api and get the latest and real time wether data and you
                can download this is app also. This is a basic app which will
                introduce you to the world of progressive web app
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://free-weather-gyan.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Deployment
                  </span>
                </a>
                <a
                  href="https://github.com/Duwesh/PWA-Weather-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    Source Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* covid 19 tracker  */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://camo.githubusercontent.com/758789925c77a28be1006b2684038407dafa31eb22fb8dfbc615f355d760cf20/68747470733a2f2f692e6962622e636f2f583837427156592f53637265656e73686f742d323032302d30342d31332d61742d31302d31342d35382e706e67"
                  alt="Covid-19 Tracker"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Covid-19 Tracker</h2>
              <p>
                I have build and deploy a corona tracker application. Covered
                topics: React.js, Chart.js, Material UI to fetch data from an
                API and display it in a very minimalistic way and much more.
              </p>
              <div>
                <SiHtml5 />
                <DiCss3 />
                <IoLogoJavascript />
              </div>
              <div>
                <a
                  href="https://free-covid-tracker.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    Deployment
                  </span>
                </a>
                <a
                  href="https://github.com/Duwesh/Covid-Tracker"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    Source Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
