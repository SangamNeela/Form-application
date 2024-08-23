import z from "zod";
import DropDown from "../src/components/Dropdown";

export const formSchema=z.object({
    email:z.string().email(),
    name:z.string().min(3,{message:"name must be atleast 3 characters"}),
    gender:"Male"|"Female",
    DropDown:z.string(),
    checkboxes:z.array(),
    terms:"true"|"false"
})