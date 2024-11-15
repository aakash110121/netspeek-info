import { useMemo, useState } from "react";
import { Modal } from "./Modal";
import { ProspectGoogleFormProvider } from "../providers/ProspectGoogleFormProvider";
import { GoogleFormsShortInput } from "./GoogleFormsShortInput";
import React from 'react'

const CTAButton = ({ outline = false, buttonLabel = "Meet Lena", secondaryColor = false }) => {
  let [modalIsOpen, setIsOpen] = useState(false);
  let subtitle = { style: null }

  function openModal() {

    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  };


  let classNames = secondaryColor ? " bg-secondary-color" : " bg-primary-color";
  let button = useMemo(() => {
    if (outline) {
      return <button className={`button-outline${classNames}`} onClick={openModal}>{buttonLabel}</button>
    }
    else {
      return <button className={classNames} onClick={openModal}>{buttonLabel}</button>
    }
  }, [openModal]);

  return (
    <>
      <Modal buttonRender={button} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} afterOpenModal={afterOpenModal} closeModal={closeModal} subtitle={subtitle}>
        <div className="user-form-contents">
          <h2 id="get-started" className="secondary-color">Get Started</h2>
          <p className="black">
            Let&apos;s find the perfect solution for your business.
          </p>
        </div>

        <ProspectGoogleFormProvider onSubmit={closeModal}>

          <GoogleFormsShortInput label="Full Name" required={true} id="name" />
          <GoogleFormsShortInput label="Email" required={true} id="email" type="email" />
          <GoogleFormsShortInput label="Phone Number" id="phone" />
          <GoogleFormsShortInput label="Business Name" id="business" />
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

      </Modal>
    </>
  )
}

export default CTAButton
