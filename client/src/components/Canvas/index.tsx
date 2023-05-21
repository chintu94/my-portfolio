import { useRef, useState } from 'react';
import './style.scss';
import { mouse } from '../../interface';

function Canvas() {
  const [mousePos, setMousePos] = useState<mouse>({
    x: undefined,
    y: undefined,
  })
  const mycanvas = useRef<HTMLCanvasElement>(null);
  const ctx = mycanvas.current?.getContext('2d');
  function particls(){
    if (
      mycanvas.current === null || typeof(mousePos.x) !== 'number' || typeof(mousePos.y) !== 'number' || !ctx
      ) return;
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(mousePos.x, mousePos.y, 50, 0, Math.PI * 2);
    ctx.fill();
  }
  return (
    <canvas
      ref={mycanvas}
      className='mycanvas'
      onClick={(event) => {
        const target = event.target as HTMLCanvasElement;
        setMousePos({
          x: event.clientX - target.offsetLeft,
          y: event.clientY - 81,
        })
        console.log('x', event.clientX - target.offsetLeft)
        console.log('y', event.clientY - 81)
        // console.log('clientYy', event.clientY)
        // console.log('offsetTop', target.offsetTop)
        particls();
      }}
    >
    </canvas>
  )
};

export default Canvas;