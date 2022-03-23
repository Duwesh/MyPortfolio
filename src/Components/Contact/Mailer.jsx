import React, { useRef } from "react";
import emailjs from "emailjs-com";
// import bootstrapStyle from "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "../../Context/theme";
import "./Mailer.css";

export const Mailer = () => {
  // const form = useRef();
  const [{ themename }] = React.useContext(ThemeContext);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m58pr57",
        "template_uwnk3o2",
        e.target,
        "Hax-ctbW1LZ5n7dPz"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Thanks for Contacting!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <div classNameNameName="container">
        <form onSubmit={sendEmail}>
          <div
            style={{
              backgroundColor: "transparent",
              textAlign: "center",
              margin: "auto",
              width: "70%",
              margin: "auto",
            }}
          >
            <br />
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                style={{
                  border: "1px solid dodgerblue",
                  width: "90%",
                  padding: "5px",
                }}
              />
            </div>
            <br />
            <div>
              <input
                type="email"
                classNameNameName="form-control"
                placeholder="Email Address"
                name="email"
                required
                style={{
                  border: "1px solid dodgerblue",
                  width: "90%",
                  padding: "5px",
                }}
              />
            </div>
            <br />
            <div className="message_text">
              <textarea
                id=""
                rows="8"
                placeholder="Your message"
                name="message"
                required
                style={{ border: "1px solid dodgerblue", margin: "auto" }}
              ></textarea>
            </div>
            <br />
            <div className="submit_btn">
              <input
                className="btn_submit"
                type="submit"
                value="Send Message"
                style={{
                  backgroundColor: "teal",
                  borderRadius: "5px",
                  padding: "5px 10px",
                }}
              ></input>
            </div>
          </div>
        </form>

        {/*  */}
      </div>
    </div>
  );
};
