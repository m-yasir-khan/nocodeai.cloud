import { useState, useEffect, useRef, useLayoutEffect } from 'react';

const CustomContextMenu = ({ targetId, options, classes, visible, onClick }) => {
  const [contextData, setContextData] = useState({ visible: false, posX: 0, posY: 0 });
  const contextRef = useRef(null);;
 
  useEffect(() => {
    const contextMenuEventHandler = (event) => {
      const targetElement = document.getElementById(targetId)
      if (targetElement && targetElement.contains(event.target)) {
        event.preventDefault();
        if (visible) {
          setContextData({ visible: true, posX: event.clientX, posY: event.clientY });
        }

      } else if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData({ ...contextData, visible: false })
      }
    }

    const offClickHandler = (event) => {
      if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData({ ...contextData, visible: false })
      }
    }

    document.addEventListener('contextmenu', contextMenuEventHandler)
    document.addEventListener('click', offClickHandler)
    return () => {
      document.removeEventListener('contextmenu', contextMenuEventHandler)
      document.removeEventListener('click', offClickHandler)
    }
  }, [contextData, targetId,visible])

  useLayoutEffect(() => {
    if (contextData.posX + contextRef.current?.offsetWidth > window.innerWidth) {
      setContextData({ ...contextData, posX: contextData.posX - contextRef.current?.offsetWidth })
    }
    if (contextData.posY + contextRef.current?.offsetHeight > window.innerHeight) {
      setContextData({ ...contextData, posY: contextData.posY - contextRef.current?.offsetHeight })
    }
  }, [contextData])

  return (
    <div ref={contextRef} className='contextMenu' style={{ display: `${contextData.visible ? 'block' : 'none'}`, left: contextData.posX, top: contextData.posY }}>
      <div className={`optionsList ${classes?.listWrapper}`}>
        {options.map((option) => (
          <li key={option} className={`optionListItem ${classes?.listItem}`} onClick={(e) => { onClick(e, option); setContextData({ ...contextData, visible: false }) }} >
            {option}
          </li>
        ))}
      </div>
    </div>
  );
}

export default CustomContextMenu;