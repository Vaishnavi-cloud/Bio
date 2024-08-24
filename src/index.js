import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skillview = [
  {
    skill: "Html/Css",

    color: "pink",
    level: "strong",
  },
  {
    skill: "python",

    color: "orange",
    level: "intermediate",
  },

  {
    skill: "java",

    color: "green",
    level: "strong",
  },
  {
    skill: "react",
    // emoji: "👶",
    color: "blue",
    level: "beginner",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="img.jpeg" alt="Vaishnavi G" />;
}

function Intro() {
  return (
    <div>
      <h1>Vaishnavi G</h1>
      <p>
        A front end developer. Love to learn and explore thing by self interest{" "}
      </p>
    </div>
  );
}

function SkillList() {
  return (
    // <div className="skill-list">
    //   <Skill skill="Html/Css" emoji="💪" color="pink" />
    //   <Skill skill="python" emoji="💪" color="orange" />
    //   <Skill skill="java" emoji="💪" color="green" />
    //   <Skill skill="react" emoji="👶" color="green" />
    // </div>

    <div className="skill-list">
      {skillview.map((see) => (
        <Skill
          skill={see.skill}
          emoji={see.emoji}
          color={see.color}
          level={see.level}
        />
      ))}
    </div>
  );
}

//even className and style in jsx is called as a prop
function Skill({ skill, color, level }) {
  return (
    //sapn means 1 element
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      {/* // this ternary is quite good when we have 2 conditions but here we are using three suvh as beginner,intermediate,advance */}
      {/* <> {props.level === "strong" ? <span> {props.emoji} </span> : "👶"}</> */}

      <span>
        {/* //short circuit for easier use */}
        {level === "beginner" && "👶"}
        {level === "intermediate" && "😊"}
        {level === "strong" && "💪"}
      </span>
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
