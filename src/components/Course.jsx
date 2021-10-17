import  Cheerio  from 'cheerio';
import react, { useState } from 'react'
import CourseService from '../API/CourseService';
import Conjugation from './Conjugation';
import Phrase from './Phrase';

function Course() {
    let [phrases, setPhrases] = useState([])
    let [conjugations, setConjugations] = useState([])


    async function loadCourse(){
       
        const response = await CourseService.getAll()  
        try{
            var $ = Cheerio.load(response.data)
            phrases = []
            conjugations = []
             $("phrase").each((idx, el) => {
                phrases.push({
                    id: idx,
                    text: $(el).text()
                })
            })  
            
            
            $("conjugation").each((idx, el) => {
                conjugations.push({
                    id: idx,
                    infinitive: $(el).attr("verb") ,
                    type: $(el).attr('type'),
                  //  baseForm: $(el).attr('baseForm'),
                    language: 'es'
                })
            })
           
        } catch(err) {
            console.log(err)
        } 
        setPhrases(phrases)
        setConjugations(conjugations)

        
    }
  
  return (
    <div className="Course">
        <h1>Phrases</h1>
        {
        phrases.map(phrase=>
            <Phrase phrase={phrase} key={phrase.id} />
        )
        }
            <h1>Conjugations</h1>

        {
        conjugations.map(conjugation=>
            <Conjugation infinitive={conjugation.infinitive.toLowerCase()} type={conjugation.type} language={conjugation.language}  key={conjugation.id} />
        )
        }        
        
        <button onClick={loadCourse}>Обновить информацию о курсе</button>
    </div>
  );
}

export default Course;
