import axios from "axios";
import cheerio from "cheerio"

export default class CourseService {
     static async  getAll() {
         try {
            let response = axios.get("http://localhost:8000/course_info",
            {
                params: {lesson_no: 3}
            }
            
            )
            return response
         } catch (e){
             console.log(e)
         }

     }
}
