
import { ProspectGoogleFormProvider } from "../../providers/ProspectGoogleFormProvider";
import { GoogleFormsShortInput } from "./../GoogleFormsShortInput";

const GetStartedForm = () => {



  return (
    <>
      <ProspectGoogleFormProvider>

        <div className="form-row">


          <div className="form-left-col">
            <GoogleFormsShortInput label="Full Name" required={true} id="name" />
          </div>

          <div className="form-right-col">
            <GoogleFormsShortInput label="Email" required={true} id="email" type="email" />
          </div>

        </div>


        <div className="form-row">
          <div className="form-left-col">
            <GoogleFormsShortInput label="Phone Number" required={true} id="phone" />
          </div>

          <div className="form-right-col">
            <GoogleFormsShortInput label="Business Name" required={true} id="business" />
          </div>
        </div>

        <div className="form-row">

          <div className="form-left-col">
            <p className="label"><span className="red">*</span>Indicates required field</p>
          </div>

          <div className="form-right-col">
            <div className="modal-form-button-wrapper">
              <button type="submit" className="button-outline">Submit</button>
            </div>
          </div>
        </div>
      </ProspectGoogleFormProvider>

    </>
  );
}

export default GetStartedForm;