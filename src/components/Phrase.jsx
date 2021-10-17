import React from 'react'

const Phrase = (props) => {
    return (
        <div className="Phrase">
            {props.phrase.text}
        </div>
    )
}
export default Phrase