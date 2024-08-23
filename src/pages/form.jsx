import { useForm,FormProvider } from "react-hook-form"
import Button from "../components/Button"
import RadioButton from "../components/RadioButton"
import DropDown from "../components/Dropdown"
import CheckboxGroup from "../components/CheckBoxGroup"
import { FaWpforms } from "react-icons/fa6";
import { useContext } from "react"
import { FormContext } from "../contextAPI/context"
import { useNavigate } from "react-router-dom"
export default function Form(){
    const methods=useForm()
    const navigate=useNavigate();
    const formContext=useContext(FormContext);
    console.log("form context = ",formContext)

    function handleFormSubmit(values){
        console.log("values = ",values);
        formContext.setData(values);
        navigate(`/response`);
    }

    
    return(
        
        <>
        <div className="bg-gradient-to-r from-indigo-500 flex justify-center items-center">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow w-full m-2">
            <FormProvider {...methods}>
            <form className="max-w-sm mx-auto w-full space-y-5" onSubmit={methods.handleSubmit(handleFormSubmit)}>
            <div className="text-center flex justify-center items-center gap-2">
                <h1 className="text-2xl font-semibold font-sans underline">
                    Registration Form
                </h1>
                <FaWpforms className="text-2xl"/>
            </div>
            <hr />
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm  text-gray-900 text-black">Email</label>
                    <input type="email" {...methods.register('email')} className="bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-sm  text-gray-900 text-black">Name</label>
                    <input type="text" {...methods.register('name')} className="bg-gray-50 border-2 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
                </div>

                <div>
                <RadioButton/>
                </div>
                <div>
                <DropDown
                    name="profession"
                    options={[
                        { value: 'Student', label: 'Student' },
                        { value: 'Professor', label: 'Professor' },
                        { value: 'Business Man', label: 'Business Man' },
                        { value: 'Corporate Employee', label: 'Corporate Employee' },
                        { value: 'Govt. Employee', label: 'Govt. Employee' },
                        { value: 'Other', label: 'Other' },
                    ]}
                />
                </div>
                <div>
                <CheckboxGroup
                    heading="Tick mark Skills"
                    name="skills"
                    options={[
                        { value: 'ReactJs', label: "ReactJs" },
                        { value: 'Java', label: 'Java' },
                        { value: 'NodeJS', label: 'NodeJS' },
                        { value: 'NextJs', label: 'NextJs' },
                        { value: 'JavaScript', label: 'JavaScript' },
                        { value: 'HTML', label: 'HTML' },
                        { value: 'CSS', label: 'CSS' },
                        { value: 'Tailwind', label: 'Tailwind' },
                    ]}
                />
                </div>
                <hr className="border-1 border-slate-500"/>
                <div>
                    <CheckboxGroup
                        heading=""
                        name="terms"
                        options={[
                            { value: true, label: "I agree to the terms and conditions" },
                        ]}
                    />
                </div>

                <div>
                <Button name="Submit"/>
                </div>
            </form>
            </FormProvider>
        </div>
        </div>
        </>
    )
}