import "./styles.css";
import Data from "./data.json";
import {
  MdMailOutline,
  MdPhone,
  MdOutlineExitToApp,
  MdOutlineAssignmentInd,
} from "react-icons/md";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function App() {
  return (
    <main>
      <div className="resume">
        <div className="head">
          <h1>
            {Data.name}
            <p>{Data.headline}</p>
          </h1>
          <ul>
            <li>
              <MdMailOutline />
              <b> Gmail :</b>
              <a href={Data.Gmail}> varkallaxmikant62@gmail.com</a>
            </li>
            <li>
              <MdPhone />
              <b> {"\t"}contact :</b>
              <a>
                {" "}
                {Data.contact[0]} / {Data.contact[1]}
              </a>
            </li>
            <li>
              <MdOutlineAssignmentInd />
              {"\t"}
              <b>website :</b>
              <a href={Data.website}> visite my portfolio</a>
            </li>
          </ul>
        </div>
        <p>{Data.summary}</p>
        <hr />
        <div className="col-2">
          <section>
            <h2>Experience</h2>

            <b>Web development(internship)</b>

            <div className="label">
              <strong>01-09-2020 </strong>
              <strong>01-09-2020</strong>
            </div>
            <p>
              Compony name- <b>seltown</b>
            </p>
            <p>
              Post- <b>front-end developer</b>
            </p>

            <p>
              redesigning the websites using HTML5, React.js, & other UI
              frameworks.or simple bootstrap in 4 people grups
            </p>

            <h2>Skills/Languages</h2>
            <div>
              <div className="Tags">
                {Data.Skills.map((item) => (
                  <strong key={item.id}>{item.name} </strong>
                ))}
              </div>
            </div>
            <hr />
            <h2>Projects</h2>
            <b>Mega Projects (Android apps)</b>
            <div className="Tags-b">
              <strong>{Data.Projects.MegaProject[0].name}</strong>
              <strong>{Data.Projects.MegaProject[1].name}</strong>
            </div>

            <b>Mini Projects (Websites)</b>
            <div className="Tags-b">
              {Data.Projects.MiniProject.map((item) => (
                <strong>{item.name} </strong>
              ))}
            </div>
          </section>
          <section>
            <h2>Education</h2>

            {Data.Education.map((i) => (
              <div className="card" key={i.id}>
                <b>{i.degree}</b>
                <div className="label">
                  <strong>{i.date.start} </strong>
                  <strong>{i.date.end}</strong>
                </div>
                <p>
                  institude name- <b>{i.institution}</b>
                </p>
                <p>
                  Area- <b>{i.area}</b>
                </p>
                <p>
                  Aeverage Marks- <b>{i.score}</b>
                </p>
              </div>
            ))}
          </section>
        </div>
        <hr />
        <div>
          <a href={Data.github}>
            {" "}
            <FiGithub /> Github account{" "}
          </a>
          <span> {"\t"}|</span>
          <a href={Data.linkedIn}>
            <FiLinkedin /> LinkedIn account{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
