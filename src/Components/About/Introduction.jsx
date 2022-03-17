import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              {/* <div style={{ backgroundImage: `url(${coverImage})` }}> */}
          
              {/* </div> */}
              <img
                src="https://user-images.githubusercontent.com/67849097/158870172-73e12aa4-85f3-4444-9609-67ae871c2055.jpg"
                alt="Images"
              />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="different">Duwesh Kumar </span> from{" "}
                <span className="different"> Guwahati, Assam</span>.
              </h4>
              <h4>
                ⚡ I enjoy developing websites and have a keen interest in
                solving problems and coming up with effective solutions.
              </h4>
              <br />
              <h4>
                ⚡ Enjoy building responsive websites (frontend) using ReactJS,
                Bootstrap etc.
              </h4>
              <br />
              <h4>
                ⚡ Experience in working on multiple Backened platforms like
                Node, Express, MongoDB, Postman.
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
