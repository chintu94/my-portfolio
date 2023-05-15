import { skills } from "../../constants";
import SkillCard from "./skillCard";

function Skills() {
  return (
    <section className="container skills-section-grid">
      <div className="dev">
        <h2>DEVELOPMENT</h2>
        <div className="dev-list">
          {skills.map(({ name, percent, type }) => (
            <SkillCard
              name={name}
              percent={percent}
              type={type}
            />
          ))}
        </div>
      </div>
      <div className="tools">
        <h2>TOOLS</h2>
        <ul>
          <li>Git/Github</li>
          <li>Command Line</li>
          <li>Chrome DevTools</li>
          <li>Redux DevTools</li>
          <li>Postman</li>
          <li>VS code</li>
          <li>Jenkins</li>
        </ul>
      </div>
    </section>
  );
}
export default Skills;