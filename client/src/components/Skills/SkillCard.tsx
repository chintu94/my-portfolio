
import { skillCardType } from '../../interface';
import './styles.scss';

function SkillCard({ name, percent, type }: skillCardType) {
  
  return (
    <div className="skill-card">
      <h4>{name}</h4>
      <div className="skill-bar">
        <div
          className={`progress ${type}`}
          data-percent={percent}
        />
        <span>{`${percent}%`}</span>
      </div>
    </div>
  )
}

export default SkillCard;