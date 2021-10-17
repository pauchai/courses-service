import axios from "axios";

export default class ConjugationService {

     static async  getConjugation(infinitive, language = "es") {
         try {
            let response = axios.post(
                "http://localhost:8001/conjugate",
                
                {
                    language: language,
                    infinitive: infinitive 
                }                
                
            )
            return response
         } catch (e){
             console.log(e)
         }

     }
}
