import React, { useState } from "react";
import * as Icon from "react-feather";
import FsLightbox from "fslightbox-react";

function Portfolio(props) {
  const [toggler, setToggler] = useState(false);
  const {title, releaseDate, tech, engine, subtitle, role, genre, responsibilities, imageUrl, largeImageUrl, url, git} = props.content;
  
  const handleToggler = (value) => {
    setToggler(value);
  }

  return (
    <div className={props.isVisible ? "mi-portfolio mi-portfolio-visible" : "mi-portfolio"}>
      <div className="mi-portfolio-image">
        <img src={imageUrl} alt={title} />
        <ul>
          {!largeImageUrl ? null : <li>
            <button onClick={() => handleToggler(!toggler)}>
              <Icon.ZoomIn/>
            </button>
          </li>}
          { url ? <li>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              <Icon.Link/>
            </a>
          </li> : null}
          { git ? <li>
            <a rel="noopener noreferrer" target="_blank" href={git}>
              <Icon.GitHub/>
            </a>
          </li> : null}
        </ul>
      </div>
      {!url ? <h5>{title}</h5> : <h5>
        <a rel="noopener noreferrer" target="_blank" href={url}>
          {title}
        </a>
      </h5>}
      {tech ? <h6><b>Technologies: </b>{tech}</h6> : null}
      {subtitle ? <h6><b>About: </b>{subtitle}</h6> : null}
      {releaseDate ? <h6><b>Release Date: </b>{releaseDate}</h6> : null}
      {role ? <h6><b>Role: </b>{role}</h6> : null}
      {genre ? <h6><b>Genre: </b>{genre}</h6> : null}
      {engine ? <h6><b>Engine: </b>{engine}</h6> : null}
      {responsibilities ? <h6><b>Responsibilities: </b>{responsibilities}</h6> : null}
      {!largeImageUrl ? null : <FsLightbox
        toggler={toggler}
        sources={largeImageUrl}
        />
      }
    </div>
  );
}

export default Portfolio;
