// import {useState} from "react"
import axios, { isCancel } from "axios"

export const CustomApiHandlePost =  (url:string,data:object)=>{
   
    // const [error,setError] = useState(false)
    // const [loading,setLoading] = useState(false)
console.log("in side customapi");

 
        const controller = new AbortController();

        return  (async()=>{
            try {
                console.log("before responseData")
                const  response = await axios.post(url,{...data,signal:controller.signal})
                
                const responseData = response.data
                console.log("responseData after")
                return responseData
                
            } catch (err:unknown) {

                // setError(true)
                console.log("error",err);
                
                if(isCancel(err)){
                    console.log("Hello World")
                    console.log(err.message);
                    return err
                    
                }
                return err;
            }

        })()

        // console.log("in side customapi end", responseData);
        // return responseData

   

    


}


