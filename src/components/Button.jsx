import { useNavigate } from "react-router-dom";
export default function Button({name,link}){
    const navigate=useNavigate();
    function handleRouteHome(){
        navigate(link);
    }
    if(link){
        return(
            <div>
                <button type="submit" onClick={handleRouteHome} className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    {name}
                </button>   
            </div>
        )
    }
    return(
        <div>
            <button type="submit" className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                {name}
            </button>   
        </div>
    )
}