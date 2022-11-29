import React from 'react'
import { Grid, Select, TextField, FormControl, InputLabel, MenuItem } from '@mui/material'


const inputStyle = ({
  '& label.Mui-focused': {
    color: '#425F57',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#425F57',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#425F57',
      border:'2px solid #425F57'
    },
    '&:hover fieldset': {
      borderColor: '#425F57',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#425F57',
      border:'3px solid #425F57'
    },
  },
  width:'100%',
  size:"small",
})

const FormTwo = ({ formData, setFormData, formErr, setFormErr, isFormErr, setIsFormErr }) => {

  const handleChange = (e) => {
    if (e.target.id == 'nric') {
      nricValidate(e.target.value);
    }
    else if (e.target.id == 'postalcode') {
      postalcodeValidate(e.target.value);
    }
    else if (e.target.id == 'addressone') {
      addressoneValidate(e.target.value);
    }
    else if (e.target.id == 'companyname') {
      companynameValidate(e.target.value);
    }
    else if (e.target.id == 'jobtitle') {
      jobtitleValidate(e.target.value);
    }
  }

  const nricValidate = (nric) => {
    let tempBool = false;
    if (nric.trim() === '') {
      setFormData({ ...formData, nric: (nric) });
      setFormErr({ ...formErr, nricErr: ("*Field is required") });
      setIsFormErr({ ...isFormErr, isNricErr: (true) })
      tempBool = false;
    }
    else if (!/^[STFG]\d{7}[A-Z]$/.test(nric)) {
      setFormData({ ...formData, nric: (nric) });
      setFormErr({ ...formErr, nricErr: ("*Enter a valid NRIC/FIN No. e.g. S1234567J ") });
      setIsFormErr({ ...isFormErr, isNricErr: (true) })
      tempBool = false;
    }
    else {
      setFormData({ ...formData, nric: (nric) })
      setFormErr({ ...formErr, nricErr: ('') });
      setIsFormErr({ ...isFormErr, isNricErr: (false) });
      tempBool = true;
    }
    return tempBool;
  }

  const postalcodeValidate = (postalcode) => {
    let tempBool = false;
    if (postalcode.trim() === '') {
      setFormData({ ...formData, postalcode: (postalcode) });
      setFormErr({ ...formErr, postalcodeErr: ("*Field is required") });
      setIsFormErr({ ...isFormErr, isPostalcodeErr: (true) })
      tempBool = false;
    }
    else if (!/^[0-9]+$/.test(postalcode)) {
      setFormData({ ...formData, postalcode: (postalcode) });
      setFormErr({ ...formErr, postalcodeErr: ("*Only numbers are allowed") });
      setIsFormErr({ ...isFormErr, isPostalcodeErr: (true) })
      tempBool = false;
    }
    else if (postalcode.length !== 6){
      setFormData({ ...formData, postalcode: (postalcode) });
      setFormErr({ ...formErr, postalcodeErr: ("*Postal code should consist of 6 numbers") });
      setIsFormErr({ ...isFormErr, isPostalcodeErr: (true) })
    }
    else {
      setFormData({ ...formData, postalcode: (postalcode) })
      setFormErr({ ...formErr, postalcodeErr: ('') });
      setIsFormErr({ ...isFormErr, isPostalcodeErr: (false) });
      tempBool = true;
    }
    return tempBool;
  }

  const addressoneValidate = (addressone) => {
    let tempBool = false;
    if (addressone.trim() === '') {
      setFormData({ ...formData, addressone: (addressone) });
      setFormErr({ ...formErr, addressoneErr: ("*Field is required") });
      setIsFormErr({ ...isFormErr, isAddressoneErr: (true) })
      tempBool = false;
    }
    else {
      setFormData({ ...formData, addressone: (addressone) })
      setFormErr({ ...formErr, addressoneErr: ('') });
      setIsFormErr({ ...isFormErr, isAddressoneErr: (false) });
      tempBool = true;
    }
    return tempBool;
  }

  const companynameValidate = (companyname) => {
    let tempBool = false;
    if (companyname.trim() === '') {
      setFormData({ ...formData, companyname: (companyname) });
      setFormErr({ ...formErr, companynameErr: ("*Field is required") });
      setIsFormErr({ ...isFormErr, isCompanyErr: (true) })
      tempBool = false;
    }
    else {
      setFormData({ ...formData, companyname: (companyname) })
      setFormErr({ ...formErr, companynameErr: ('') });
      setIsFormErr({ ...isFormErr, isCompanynameErr: (false) });
      tempBool = true;
    }
    return tempBool;
  }

  const jobtitleValidate = (jobtitle) => {
    let tempBool = false;
    if (jobtitle.trim() === '') {
      setFormData({ ...formData, jobtitle: (jobtitle) });
      setFormErr({ ...formErr, jobtitleErr: ("*Field is required") });
      setIsFormErr({ ...isFormErr, isJobtitleErr: (true) })
      tempBool = false;
    }
    else {
      setFormData({ ...formData, jobtitle: (jobtitle) })
      setFormErr({ ...formErr, jobtitleErr: ('') });
      setIsFormErr({ ...isFormErr, isJobtitleErr: (false) });
      tempBool = true;
    }
    return tempBool;
  }

  return (
    <Grid container spacing={3} sx={{ px: 7 }}>

      <Grid item xs={12} md={6}>
        <TextField
          id="nric"
          label="ID Number"
          variant="outlined"
          helperText={formErr.nricErr}
          error={isFormErr.isNricErr}
          value={formData.nric}
          onChange={handleChange}
          sx={inputStyle}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          id="postalcode"
          label="Postal Code"
          variant="outlined"
          value={formData.postalcode}
          helperText={formErr.postalcodeErr}
          error={isFormErr.isPostalcodeErr}
          onChange={handleChange}
          sx={inputStyle}
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <TextField
          sx={inputStyle}
          id="addressone"
          label="Address Line 1"
          variant="outlined"
          value={formData.addressone}
          helperText={formErr.addressoneErr}
          error={isFormErr.isAddressoneErr}
          onChange={handleChange}
        />
      </Grid>


      <Grid item xs={12} md={12}>
        <TextField
          id="addresstwo"
          label="Address Line 2"
          variant="outlined"
          helperText={formErr.addresstwoErr}
          value={formData.addresstwo}
          onChange={(e) => setFormData({ ...formData, addresstwo: e.target.value })}

          sx={inputStyle}
        />

      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          id="companyname"
          label="Company Name"
          variant="outlined"
          value={formData.companyname}
          helperText={formErr.companynameErr}
          error={isFormErr.isCompanynameErr}
          onChange={handleChange}

          sx={inputStyle}
        />

      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          id="jobtitle"
          label="Job Title"
          variant="outlined"
          value={formData.jobtitle}
          helperText={formErr.jobtitleErr}
          error={isFormErr.isJobtitleErr}
          onChange={handleChange}

          sx={inputStyle}
        />

      </Grid>

    </Grid>
  )
}

export default FormTwo