import { GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'

import { getFormJson } from './getFormJson'

const form = getFormJson(); // static settings

export const ProspectGoogleFormProvider = ({ children, onSubmit: onSubmit_ }) => {
  const methods = useGoogleForm({ form })

  const onSubmit = async (data) => {
    const response = await methods.submitToGoogleForms(data)
    if(!response)
    { 
      // for each key in data, reset field
      for (const key in data) {

        methods.resetField(key);
      }

      if(onSubmit_)
      {
        onSubmit_(data);
      
      }

    }
  }
 

  return (
    <GoogleFormProvider {...methods}>
      <form className="form-wrapper " onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </GoogleFormProvider>
  )
}
