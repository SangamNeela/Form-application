import { useContext } from "react"
import { FormContext } from "../contextAPI/context"
import FormNotSubmitted from "../components/FormNotSubmited";
export default function Response(){
    const formContext=useContext(FormContext);
    if(formContext.data===null){
        return (<FormNotSubmitted/>)
    }
    const {name,profession,email,skills,gender,terms}=formContext.data;
    console.log("from response page ",formContext.data);
    
    return(
        <div className="bg-gradient-to-r from-indigo-500 h-screen flex justify-center items-center">
            <div className=" relative flex justify-center items-center w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-none p-4">
                <div className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
                    <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt="Tania Andrew"
                    className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />

                    <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5
                        className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                        </h5>
                        
                    </div>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                        The {profession}
                    </p>
                    </div>
                </div>
                <div className="p-2 mb-6 w-full rounded-lg bg-slate-300 ">
                    <p className="w-full font-md text-black "><b>email</b>: {email}</p>
                    <hr className="text-white border-2 mt-2 mb-2"/>
                    <p className="w-full font-md text-black"><b>Skills</b>:
                        {skills && skills.map((skill,index)=>{
                            if(skills.length-1===index){
                                return <span> {skill} .</span>
                            }
                            return <span> {skill},</span>
                        })}
                    </p>
                    <hr className="text-white border-2 mt-2 mb-2"/>
                    <p className="w-full font-md text-black"><b>Gender</b>: {gender}</p>
                    <hr className="text-white border-2 mt-2 mb-2"/>
                    <p className="w-full font-md text-black"><b>Terms and Conditions</b>:
                        {terms==="true"?<> Accepted</>:<> Not Accepted</>}
                    </p>
                </div>
            </div>  
        </div>
    )
}