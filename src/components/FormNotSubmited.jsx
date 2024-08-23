import Button from "./Button"
import { useNavigate } from "react-router-dom"
export default function FormNotSubmitted(){
    
    return(
        <div className="bg-gradient-to-r from-indigo-500 shadow-2xl flex  h-screen justify-center items-center">
        <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
            <div class="p-6">
                <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Something Went wrong!
                </h5>
                <p>fill the from once again</p>
            </div>
            <div class="p-6 pt-0">
                <Button link="/" name="Redirect to Form"/>
            </div>  
        </div>
        </div>
    )
}