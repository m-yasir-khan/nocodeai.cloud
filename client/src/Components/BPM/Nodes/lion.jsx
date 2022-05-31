import React from 'react';
import useImage from 'use-image';
import {Image,Rect ,Circle,Arrow,Star} from 'react-konva';

function URLImage ({ comp }) {
    const [x,setX] = React.useState(comp.x);
    const [y,setY] = React.useState(comp.y);
    const [isDragging,setIsDragging] = React.useState(false);
    const [isSelected,setIsSelected] = React.useState("red");
    const [opacity,setOpacity] = React.useState(1.0);
    const shapeRef = React.useRef(null);

    const handleClick = (e) => {
      // logs clicked Konva.Circle instance
      console.log(e.target);
    //  shapeRef.current.fill = "blue";
     // setIsSelected("blue");
      setOpacity(0.3);
    //  console.log('element');
      //shapeRef.current.remove();
    }

    const onDragEnd = (e) => {
      // logs clicked Konva.Circle instance
            setIsDragging(false);
            setX(e.target.x());
            setY( e.target.y()); 
    }

     const onDragStart = (e) => {
      // logs clicked Konva.Circle instance
      setIsDragging(true);
    }
    
    document.addEventListener('click', function(event) {
   console.log("element",document.contains(shapeRef.current));
   
   //var isClickInsideElement = shapeRef.current.contains(event.target);
   //if (!isClickInsideElement) {
       //Do something click is outside specified element
    //   setOpacity(1.0);
  // }
      
  });

   //console.log(comp,"==>comp");
   if(comp.type == "rectangle")
   {
        return (<Rect x={x} y={y} width={100} height={100} fill={isSelected}  draggable ref={node => shapeRef.current = node} opacity={opacity}
        shadowBlur={10} 
        onDragStart={onDragStart}   
        onDragEnd={onDragEnd}
        onClick={handleClick}

        />
        );  
    }
    else if(comp.type == "circle")
    {
        console.log("drawing circle2");
        return ( <Circle x={comp.x} y={comp.y} radius={50} draggable ref={node => shapeRef.current = node} opacity={opacity}
          onDragStart={onDragStart}   
          onDragEnd={onDragEnd}
          onClick={handleClick}
            fill={isSelected} />);
    }
    else if(comp.type == "arrow_R")
    {
      //  console.log("drawing arrow");
        return ( <Arrow x={comp.x} y={comp.y}  draggable ref={node => shapeRef.current = node} opacity={opacity}
          points={ [0, 0, 200, 0]} pointerLength={20} pointerWidth={20} fill="black" stroke="black" strokeWidth={4}
          onDragStart={onDragStart}   
          onDragEnd={onDragEnd}
          onClick={handleClick}
          />);
    }
    else if(comp.type == "arrow_L")
    {
      //  console.log("drawing arrow");
        return ( <Arrow x={comp.x} y={comp.y}  draggable ref={node => shapeRef.current = node} opacity={opacity}
          points={ [0, 0, -200, 0]} pointerLength={20} pointerWidth={20} fill="black" stroke="black" strokeWidth={4}
          onDragStart={onDragStart}   
          onDragEnd={onDragEnd}
          onClick={handleClick}
          />);
    }
    else if(comp.type == "arrow_Up")
    {
      //  console.log("drawing arrow");
        return ( <Arrow x={comp.x} y={comp.y}  draggable ref={node => shapeRef.current = node} opacity={opacity}
          points={ [0, 0, 0, -200]} pointerLength={20} pointerWidth={20} fill="black" stroke="black" strokeWidth={4}
          onDragStart={onDragStart}   
          onDragEnd={onDragEnd}
          onClick={handleClick}
          />);
    }
    else if(comp.type == "arrow_Dn")
    {
      //  console.log("drawing arrow");
        return ( <Arrow x={comp.x} y={comp.y}  draggable ref={node => shapeRef.current = node} opacity={opacity}
          points={ [0, 0, 0, 200]} pointerLength={20} pointerWidth={20} fill="black" stroke="black" strokeWidth={4}
          onDragStart={onDragStart}   
          onDragEnd={onDragEnd}
          onClick={handleClick}
          />);
    }
    else if(comp.type == "star")
    {
      //  console.log("drawing arrow");
        return ( <Star x={comp.x} y={comp.y}  draggable ref={node => shapeRef.current = node} opacity={opacity}
          numPoints={6} innerRadius={40} outerRadius={70} fill="yellow" stroke="red" strokeWidth={4}
          onDragStart={onDragStart}   
          onDragEnd={onDragEnd}
          onClick={handleClick}
          />);
    }
    
  };
  export default URLImage;