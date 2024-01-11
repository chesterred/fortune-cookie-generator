
import React, { useRef, useEffect } from 'react';


const CanvasWithText= ({ backgroundImage, text, width, height }) => {
  const canvasRef = useRef(null);

  const wrapText = (context, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = context.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (canvas && context) {
      const image = new Image();
      image.src = backgroundImage;
      image.onload = () => {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(image, 0, 0, width, height);
        context.font = '40px Tahoma';
        context.fillStyle = 'black';
        
        // 设置自动换行的参数
        const maxWidth = 800; // 最大宽度
        const lineHeight = 55; // 行高
        const x = 100; // 起始 x 坐标
        const y = 440; // 起始 y 坐标

        wrapText(context, text, x, y, maxWidth, lineHeight);
      };
    }
  }, [backgroundImage, text, width, height]);

  return <canvas ref={canvasRef} className='max-w-full h-auto' />;
};

export default CanvasWithText;
