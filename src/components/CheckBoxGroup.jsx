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