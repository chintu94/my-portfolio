import { skills, tools, testing } from "../../constants";
import SkillCircle from "./SkillCircle";
import { setting, testing as testIcon, tool } from "../../assets/icons";
import './styles.scss';

function Skills() {
  return (
    <section className="skills-section-grid container">
      <div className="dev-test">
        <div className="dev">
          <h2>
            <img src={setting} alt="dev" className="black-png" />
            <span>DEVELOPMENT</span>
          </h2>
          <ul className="dev-list">
            {skills.map(({ name, percent, type, icon }) => (
              <SkillCircle
                name={name}
                percent={percent}
                type={type}
                icon={icon}
              />
            ))}
          </ul>
        </div>
        <div className="tests">
          <h2>
            <img src={testIcon} alt="Testing" />
            <span>Testing</span>
          </h2>
          <div className="test-types">
            {testing.map(({ type, className, tools}) => (
              <div className={className}>
                <h4>{type}</h4>
                <ul>
                  {tools.map(tool => <li>{tool}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tools">
        <h2>
          <img src={tool} alt="dev" className="black-png" />
          <span>TOOLS</span>
        </h2>
        <ul>
          {tools.map(({ name, icon }) => (
            <li>
              <img src={icon} alt={name} />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default Skills;