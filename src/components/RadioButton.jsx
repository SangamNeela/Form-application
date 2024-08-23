import { useFormContext } from "react-hook-form"
export default function RadioButton(){
    const { register} = useFormContext();
    return(
        <>
        <div className="mb-2">
        <label htmlFor="" className="">Gender</label>
        </div>
        <div className=" flex  gap-x-2" id="small">
            <div className="w-full flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" value="Male" {...register("gender",{ required: true })} className=" h-4  bg-gray-100   dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" required/>
                <label htmlFor="bordered-radio-1" className=" py-4 ms-2 text-sm font-medium text-black">Male</label>
            </div>
            <div className="w-full flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input  id="bordered-radio-2" type="radio" value="Female" {...register("gender",{ required: true })} className=" h-4  bg-gray-100 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" required/>
                <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-black">Female</label>
            </div>
            <div className="w-full flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                <input  id="bordered-radio-2" type="radio" value="Other" {...register("gender",{ required: true })} className=" h-4  bg-gray-100 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600" required/>
                <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-black">Other</label>
            </div>
        </div>
        </>
    )
}