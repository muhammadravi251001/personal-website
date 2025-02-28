import React from "react";
import Container from "react-bootstrap/Container";
import Typist from "react-typist-component";
import { Jumbotron } from "./migration"; // Assuming Jumbotron is imported correctly

const MainBody = React.forwardRef(({ gradient, title, message, icons }, ref) => {
  return (
    <Jumbotron
      fluid
      id="home"
      style={{
        background: `linear-gradient(136deg, ${gradient})`,
        backgroundSize: "1200% 1200%",
      }}
      className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
    >
      <div id="stars"></div>
      <Container className="text-center">
        <h1 ref={ref} className="display-1">
          {title}
        </h1>
        <Typist>
          <div className="lead typist">{message}</div>
        </Typist>
        <div className="p-5">
          {icons.map((icon, index) => (
            <a
              key={`social-icon-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              href={icon.url}
              aria-label={`My ${icon.image.split("-")[1]}`}
            >
              {icon.image.startsWith("fa-") ? (
                <i className={`fab ${icon.image} fa-3x socialicons`} />
              ) : (
                <img
                  src={
                    icon.image === "huggingface-icon"
                      ? "https://cdn-lfs.huggingface.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/942cad1ccda905ac5a659dfd2d78b344fccfb84a8a3ac3721e08f488205638a0?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.svg%3B+filename%3D%22hf-logo.svg%22%3B&response-content-type=image%2Fsvg%2Bxml&Expires=1719070113&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxOTA3MDExM319LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5odWdnaW5nZmFjZS5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzk0MmNhZDFjY2RhOTA1YWM1YTY1OWRmZDJkNzhiMzQ0ZmNjZmI4NGE4YTNhYzM3MjFlMDhmNDg4MjA1NjM4YTA%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=QVHhLMOy0CCv09WqdWhx5tdi37BxK878-MLZoSAlkqYrBlP5-s-PUzQImEYOc1Gm8t8jmcgnKGodvB6Vbu1JVUrf%7EtRqcWxm8SGXA9T0F%7Eh5Aoq%7E0EeDqDSH1zVA54Wf2WFCo0NA%7EhL6G2AGS2UzHKikYoXl7rNWPGVYzrd4%7E58dVjkYlMDhX15FHpKpWnMEj6g5Xey7-tjOa7UuwIi3Bb5YLA6tjEPT22CFkFI49LbCWFQGZ7zHgzCjv4Z5QWjKi0Ktixh5-j89eKUz1OekHRxo%7EjaInP4Z-FbWNOGi5gsX0oRymaP5GPzA-7WImhp%7E%7EslIjtCMMGoXvUwp%7EGkZnA__&Key-Pair-Id=K3ESJI6DHPFC7"
                      : `/icons/${icon.image}.png`
                  }
                  alt={icon.image}
                  className={`fab ${icon.image} fa-3x socialicons`}
                />
              )}
            </a>
          ))}
        </div>
        <a
          className="btn btn-outline-light btn-lg "
          href="#aboutme"
          role="button"
          aria-label="Learn more about me"
        >
          More about me
        </a>
      </Container>
    </Jumbotron>
  );
});

export default MainBody;
