import React, {useEffect} from "react";
import { Link } from 'react-router-dom';

const Nav = (props) => {
  const {
    sections=[],
    setCurrentSection,
    currentSection,
  } = props;

  //update browser title with section name
  useEffect(() => {
    document.title = currentSection.name;
  }, [currentSection]);

  return (
    <header>
      <div className="container">
        <div className="row">
          <h2>
            Fabricio Bustamante
          </h2>
        </div>
        <nav>
            <div className="row">
              <div className="col">
                <Link to="/">
                  <span className=''>About</span>
                </Link>
              </div>
              {sections.map((section) => (
                <div
                  className={`col ${currentSection.name === section.name && 'navActive'}`} key={section.name}
                  onClick={() => { setCurrentSection(section)}}
                >
                  <Link to={`/${section.name}`}>{section.name}</Link>
                </div>
              ))}
            </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
