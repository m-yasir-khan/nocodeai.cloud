import React from 'react';
import {Rect } from 'react-konva';

function Rectangle ({ rectangle }) {
   // const [img] = useImage(image.src);
    return (
        <Rect
        x={rectangle.x}
        y={rectangle.y}
        width={rectangle.width}
        height={rectangle.height}
        fill={rectangle.color}
        shadowBlur={10}
      />
    );
  };
  export default Rectangle;