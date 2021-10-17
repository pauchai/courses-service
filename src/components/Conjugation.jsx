import React, { useState } from 'react'
import ConjugationService from '../API/ConjugationService'
import "./Conjugation.css"
import { ConjugationTable } from './ConjugationTable'



const Conjugation = ({infinitive, language, type, baseForm = "infinitive"}) => {

    let [conjugationInfo, setConjugationInfo] = useState({})

    async function clickButton(e) {
        try{
            const response = await ConjugationService.getConjugation(infinitive, language)
            conjugationInfo = response.data.output
            
            conjugationInfo.infinitive = infinitive
            setConjugationInfo(conjugationInfo)

        } catch(err){
            console.log(err)
        }
    }
    return (
        <div className="Conjugation">
                <strong>{infinitive}</strong>({type})
                <div>
                    <button onClick={clickButton}>show conjugation present</button>
                    {conjugationInfo.infinitive === undefined ? 
                     ""
                    :
                      <ConjugationTable conjugationInfo={conjugationInfo.Indicativo[type]} infinitive={infinitive} diffFormBase={baseForm}/>
                    }
                    
                </div>
                
            
            
            
        </div>
    )
}
export default Conjugation