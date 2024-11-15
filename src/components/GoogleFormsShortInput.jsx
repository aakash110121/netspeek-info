import { useShortAnswerInput } from "react-google-forms-hooks";
import { getFormJson } from "../providers/getFormJson";

const form = getFormJson(); // static settings

export const GoogleFormsShortInput = ({label: label_, required, id, name: name_, ref, type: type_})=> {

    if (!form || !form.fields) {
        return null;
    }
    const formFields = form.fields;
    const formElem = formFields.filter(field => {
        return field.label.trim().toLowerCase() === label_.trim().toLowerCase()
    })[0];
    const googleFormId = formElem.id;
    if(googleFormId === undefined){
        throw new Error(`No form field found for label: ${label_}`);
    }
    const { register, label } = useShortAnswerInput(googleFormId)


    let name = name_ || id;
    let type = type_ || "text";

    return (
        <div className="form-input-wrapper">
            <label htmlFor={id}>
                
                {

                    required 
                    ? 
                    <span className="red">*</span> 
                    : 
                    null
                
                }
                {label}
            </label>
            <input className="primary-input" type={type} aria-label={name} ref={ref} name={id} id={id} {...register()}/>
        </div>
    )
}