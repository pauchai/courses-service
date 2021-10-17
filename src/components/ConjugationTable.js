import React from 'react'
import ConjugationTableItem from './ConjugationTableItem'

export const ConjugationTable = ({conjugationInfo, infinitive, diffFormBase}) => {

        conjugationInfo.infinitive = infinitive
    
    return (
        
        <div className="ConjugationTable">            
            <ConjugationTableItem diffBase={conjugationInfo[diffFormBase]} value={conjugationInfo['1s']} />            
            <ConjugationTableItem diffBase={conjugationInfo[diffFormBase]} value={conjugationInfo['2s']} />            
            <ConjugationTableItem diffBase={conjugationInfo[diffFormBase]} value={conjugationInfo['3s']} />            
            <ConjugationTableItem diffBase={conjugationInfo[diffFormBase]} value={conjugationInfo['1p']} />            
            <ConjugationTableItem diffBase={conjugationInfo[diffFormBase]} value={conjugationInfo['2p']} />            
            <ConjugationTableItem diffBase={conjugationInfo[diffFormBase]} value={conjugationInfo['3p']} />            


        </div>
    )
}
