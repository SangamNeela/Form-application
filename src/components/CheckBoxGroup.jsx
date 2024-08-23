import { useFormContext } from 'react-hook-form';

export default function CheckboxGroup({ name, options,heading }) {
    const { register} = useFormContext();

    return(
        <div >
            <div className='mb-2'>
                <label>{heading}</label>
            </div>
            <div className='flex flex-wrap .small gap-3'>
            {options.map((option,index)=>(
                // <div key={index}>
                //     <div className="flex items-center me-4">
                //         <input  id="checkbox" {...register(name)} type="checkbox" value={option.value} className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"/>
                //         <label htmlFor="checkbox" className="ms-2 text-sm font-medium text-black">{option.label}</label>
                //     </div>
                // </div>
                <div className="form-control ">
                    <label className="cursor-pointer ">
                        <input type="checkbox"  {...register(name)} value={option.value} className="checkbox" />
                        <span className="label-text">{option.label}</span>
                    </label>
                </div>
            ))}
            </div>
        </div>
    )

}