import React, { useEffect, useRef, useState } from 'react';
import DiffTools from '../tools/DiffTools';
import "./ConjugationTableItem.css"

export default function ConjugationTableItem({diffBase, value}) {
    //const [html, setHtml] = useState (DiffTools.getDiffHtml(diffBase, value))
    const divRef = useRef (null)
    useEffect(() => {
      divRef.current.innerHTML = DiffTools.getDiffHtml(diffBase, value)
    }, [])
    return (
        <div ref={divRef} className="animconj"></div>
        
    )
}
