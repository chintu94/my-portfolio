import { useEffect, useState } from 'react';
import './styles.scss';
import { skillCardType } from '../../interface';

function SkillCircle({ name, percent, type, icon }: skillCardType) {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevValue) => {
        if (prevValue === percent) {
          clearInterval(progressInterval)
          return prevValue;
        }
        return prevValue += 1;
      })
    }, Number(percent) / 210 * 100)
  }, [percent])

  return (
    <li>
      <div className="outer">
        <div className="inner">
          <span>{progress}%</span>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="5rem" height="5rem">
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle cx="48" cy="48" r="43" stroke-linecap="round" className={type} />
      </svg>
      <img src={icon} alt={name} />
    </li>
  )
}

export default SkillCircle;