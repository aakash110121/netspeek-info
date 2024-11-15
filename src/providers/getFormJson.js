
import devForm from './devForm.json'

export const getFormJson = () => {
  if(import.meta.env.MODE==="development"){
    return devForm
  } else {
    return devForm
  }
}