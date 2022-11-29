import React, {useState} from 'react';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import Success from './Success';
import { Stack, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import './join.css'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const JoinForm = () => {
  const [page, setPage] = useState(0)
  const formTitle = ["Personal Information", "Work Information", "", "Success"]
  const [errorMsg, setErrorMsg] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    agegroup: '',
    country: null,
    number: '',
    employment: '',
    nric: '',
    postalcode: '',
    addressone: '',
    addresstwo: '',
    companyname: '',
    jobtitle: '',
  });

  const [formErr, setFormErr] = useState({
    firstnameErr: '',
    lastnameErr: '',
    emailErr: '',
    agegroupErr: '',
    countryErr: '',
    numberErr: '',
    employmentErr: '',
    nricErr: '',
    postalcodeErr: '',
    addressoneErr: '',
    addresstwoErr: '*Optional',
    companynameErr: '',
    jobtitleErr: '',
  });

  const [isFormErr, setIsFormErr] = useState({
    isFirstnameErr: false,
    isLastnameErr: false,
    isEmailErr: false,
    isAgegroupErr: false,
    isCountryErr: false,
    isNumberErr: false,
    isEmploymentErr: false,
    isNricErr: false,
    isPostalcodeErr: false,
    isAddressoneErr: false,
    isAddresstwoErr: false,
    isCompanynameErr: false,
    isJobtitleErr: false,
    formStatus: false,
  })

  const handleErrorMsg = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorMsg(false);
  };
  const handleBack = () => {
    if (formData.country !== 'Singapore') {
      setPage(0)
    }
    else {
      setPage(prevPage => prevPage - 1)
    }
  }

  const handleNext = () => {
    if (hasFormErrors() || !isFormFilled(page)) {
      setErrorMsg(true);
    } else {
      if (formData.country.label !== 'Singapore') {
        setPage(2)
      } else {
        setPage(prevPage => prevPage + 1)
        saveToStorage()
      }
    }
  }

  const handleConfirm = () => {
    if (hasFormErrors() || !isFormFilled(page)) {
      setErrorMsg(true);
    } else {
      setPage(2)
      saveToStorage()
    }
  }

  const hasFormErrors = () => {
    for (const [key, value] of Object.entries(isFormErr)) {
      if (value) {
        return true
      }
    }
    return false
  }

  /**
   * Loops through the formData object to look for empty/null values based on index and which page it is
   */
  const isFormFilled = (page) => {
    if (page === 0) {
      let index = 0
      while (index <= 6) {
        if (Object.values(formData)[index] === '' || Object.values(formData)[index] === null) {
          return false
        }
        index++
      }
    } else if (page === 1) {
      let index = 7
      while (index <= Object.keys(formData).length - 1) {
        // address line 2 is optional
        if (index === 10) {
          index++
          continue
        }
        if (Object.values(formData)[index] === '' || Object.values(formData)[index] === null) {
          return false
        }
        index++
      }
    }
    return true
  }

  const pageDisplay = () => {
    if (page === 0) {
      return <FormOne
        formData={formData}
        setFormData={setFormData}
        formErr={formErr}
        setFormErr={setFormErr}
        isFormErr={isFormErr}
        setIsFormErr={setIsFormErr}
      />
    }
    else if (page === 1) {
      return <FormTwo
        formData={formData}
        setFormData={setFormData}
        formErr={formErr}
        setFormErr={setFormErr}
        isFormErr={isFormErr}
        setIsFormErr={setIsFormErr}
      />
    }
    else if (page === 2) {
      return <Success
        formData={formData}
      />
    }
  }

  const saveToStorage = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  return (
    <div className='form-container'>
      <div className='form-div'>
        <div className='form-header'>
        </div>

        <div className='progress-bar-container'>
          <div className='progress-bar-numbers'>
            <div className='progress-bar-details'>
              <p style={{ borderColor: page === 0 ? 'black' : "#949494", background: page === 0 ? 'black' : "#949494" }}>1</p>
              <h5 style={{ color: page === 0 ? 'black' : "#949494" }}>SIGNUP <br />INFO</h5>
            </div>
            <div className='progress-bar-details'>
              <p style={{ borderColor: page === 1 ? 'black' : "#949494", background: page === 1 ? 'black' : "#949494" }}>2</p>
              <h5 style={{ color: page === 1 ? 'black' : "#949494" }}>PERSONAL INFO<br /><span style={{ fontSize: "15px" }}>Singaporeans Only</span></h5>
            </div>
            <div className='progress-bar-details'>
              <p style={{ borderColor: page === 2 ? 'black' : "#949494", background: page === 2 ? 'black' : "#949494" }}>3</p>
              <h5 style={{ color: page === 2 ? 'black' : "#949494" }}>SUBMIT<br />FORM</h5>
            </div>
          </div>
          <div className='progress-bar'>
            <div
              style={{ width: page === 0 ? '5%' : page === 1 ? "50%" : "99%" }}
            >
            </div>
          </div>
        </div>

        <div className='form-body'>
          {pageDisplay()}
        </div>
        <div className='form-footer'>
          {page === 0 && <button className="next-btn formbtn" onClick={handleNext}>
            Next
          </button>}
          {page <= 1 && <button className="back-btn formbtn" disabled={page === 0} onClick={handleBack}>
            Back
          </button>}
          {page === 1 && <button className="next-btn formbtn" type="submit" onClick={handleConfirm} data-testid="contact-submit"  >
            Confirm
          </button>}
        </div>
      </div>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={errorMsg} autoHideDuration={6000} onClose={handleErrorMsg}>
          <Alert onClose={handleErrorMsg} severity="error" sx={{ width: '100%', margin: '0 auto' }}>
            Error! Please check all required fields.
          </Alert>
        </Snackbar>
      </Stack>
    </div>
  )
}

export default JoinForm;

