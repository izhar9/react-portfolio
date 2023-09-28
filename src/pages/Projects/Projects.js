import React from "react";
import todo from "../../assets/images/todo.png";
import dashboard from "../../assets/images/e-dashboard.png";
import guess from "../../assets/images/guess the number.png";
import "./Projects.css";
import Swing from "react-reveal/Swing";

const Projects = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top recent projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top 3 recent project with live links and source code
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Swing>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={todo} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">TodoList</h5>
                  </div>
                  <a
                    href="https://github.com/izhar9/TodoList.git"
                    className="btn ad-btn"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img src={dashboard} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">E-DashBoard</h5>
                  </div>
                  <a
                    href="https://github.com/izhar9/E-DashBoard.git"
                    className="btn ad-btn"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Web</span>
                  <img src={guess} alt="project3" />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JAVASCRIPT</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Guess-The-Number</h5>
                  </div>
                  <a
                    href="https://guess-the-number2.netlify.app/"
                    className="btn ad-btn"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Swing>
        </div>
      </div>
    </>
  );
};

export default Projects;
