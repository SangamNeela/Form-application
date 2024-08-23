import { useFormContext } from 'react-hook-form';

export default function DropDown({ name, options }){
    const { register} = useFormContext();
    
    return(
        <div className='gap-x-3'>
      <label className="block mb-2 text-sm  text-gray-900 text-black">Main Profession:</label>
      <select {...register(name)} className='border-2 border-black'>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
    )
}