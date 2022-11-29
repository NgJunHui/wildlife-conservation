import React, { useState, useEffect } from 'react'
import { Grid, Typography, TextField } from '@mui/material'
import contactImg from '../../../images/meerkat-img.jpg'
import { onPostRequest } from '../../../actions';
import { useDispatch } from 'react-redux';
import { Stack, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import GoogleMaps from './GoogleMaps';
import { IoCall } from 'react-icons/io5';
import { GiElephant } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const inputStyle = ({
  '& label.Mui-focused': {
    color: 'black',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'black',
    },
  },
  mb: 3
})

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



const Form = () => {
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [message, setMessage] = useState('');
  const [messageErr, setMessageErr] = useState('');
  const [validSuccess, setValidSuccess] = useState(false);
  const [isNameErr, setIsNameErr] = useState(false);
  const [isEmailErr, setIsEmailErr] = useState(false);
  const [isMessageErr, setIsMessageErr] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleErrorMsg = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setErrorMsg(false);
  };

  const handleSuccessMsg = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccessMsg(false);
  };


  const handleChange = (e) => {
    if (e.target.id == 'name') {
      nameValidate(e.target.value);
    }
    if (e.target.id == 'email') {
      emailValidate(e.target.value);
    }
    if (e.target.id == 'message') {
      messageValidate(e.target.value);
    }
  }

  const nameValidate = (name) => {
    let tempBool = false;
    if (name.trim() === '') {
      setName(name)
      setNameErr("*Field is required.");
      setValidSuccess(false);
      setIsNameErr(true);
      tempBool = false;
    }
    else if (!/^[a-zA-Z '.-]*$/.test(name)) {
      setName(name)
      setNameErr('*Only letters, -, . and \' are allowed.');
      setValidSuccess(false);
      setIsNameErr(true);
      tempBool = false;
    }

    else if (name.trim().length <= 3) {
      setName(name)
      setNameErr('*Full name should be more than 3 characters.');
      setValidSuccess(false);
      setIsNameErr(true);
      tempBool = false;
    }

    else {
      setName(name)
      setNameErr('');
      setValidSuccess(true);
      setIsNameErr(false);
      tempBool = true;
    }
    return tempBool;
  }

  const emailValidate = (email) => {
    let tempBool = false;
    if (email.trim() === '') {
      setEmail(email)
      setEmailErr("*Field is required.");
      setValidSuccess(false);
      setIsEmailErr(true);
      tempBool = false;
    }
    else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email)) {
      setEmail(email)
      setEmailErr('*Please enter a valid email format.');
      setValidSuccess(false);
      setIsEmailErr(true);
      tempBool = false;
    }
    else {
      setEmail(email)
      setEmailErr('');
      setValidSuccess(true);
      setIsEmailErr(false);
      tempBool = true;
    }
    return tempBool;
  }

  const messageValidate = (message) => {

    let tempBool = false;

    if (message.trim() === '') {
      setMessage(message);
      setMessageErr("*Field is required.");
      setValidSuccess(false);
      setIsMessageErr(true);
      tempBool = false;
    }
    else {
      setMessage(message);
      setMessageErr('');
      setValidSuccess(true);
      setIsMessageErr(false);
      tempBool = true;
    }
    return tempBool;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameValidate(name) && emailValidate(email) && messageValidate(message)) {
      console.log(name)
      console.log(email)
      console.log(message)
      setName('');
      setEmail('');
      setMessage('');
      setSuccessMsg(true);
      dispatch(onPostRequest({
        name,
        email,
        message
      }))
    }
    else {
      setErrorMsg(true);
    }
  }

  const dispatch = useDispatch();

  const { ref, inView } = useInView();
  const animation = useAnimation();
  const animation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 2, bounce: 0.2, delay: 0.3
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0, y: "-5vw" })
    }
  }, [inView]);

  useEffect(() => {
    if (inView) {
      animation2.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 2, bounce: 0.2, delay: 0.3
        },
      });
    }
    if (!inView) {
      animation2.start({ opacity: 0, x: "-5vw" })
    }
  }, [inView]);

 
  return (
    <Grid ref={ref} sx={{ width: '80%', margin: '150px auto 100px auto' }}>
      <motion.p animate={animation} className='contactform-title'><GiElephant size="90px" style={{ paddingRight: '10px' }} />GET IN TOUCH</motion.p>
      <motion.p animate={animation2} className="contactform-subtext">We are here to help! Simply fill in the form below or call us at <span><IoCall size="28px" color="black" />+65 67862545</span></motion.p>
      <Grid container
        spacing={8}
        display="flex"
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12} sm={12} md={6} lg={6} className="google-map">
          <GoogleMaps />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} display="flex" flexDirection='column'>

          <TextField
            sx={inputStyle}
            id="name"
            label="Full Name"
            type="text"
            variant="outlined"
            helperText={nameErr}
            value={name}
            onChange={handleChange}
            error={isNameErr}
            autoComplete='off'
          />
          <TextField
            sx={inputStyle}
            id="email"
            label="Email"
            type="text"
            variant="outlined"
            helperText={emailErr}
            value={email}
            onChange={handleChange}
            error={isEmailErr}
            autoComplete='off'
          />
          <TextField
            sx={inputStyle}
            id="message"
            label="Ask us a question!"
            type="text"
            variant="outlined"
            helperText={messageErr}
            value={message}
            onChange={handleChange}
            error={isMessageErr}
            multiline
            rows={6}
            rowsmax={11}
          />
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={errorMsg} autoHideDuration={6000} onClose={handleErrorMsg}>
              <Alert onClose={handleErrorMsg} severity="error" sx={{ width: '100%', margin: '0 auto' }}>
                Error: Please check all required fields
              </Alert>
            </Snackbar>
          </Stack>

          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={successMsg} autoHideDuration={6000} onClose={handleSuccessMsg}>
              <Alert onClose={handleSuccessMsg} severity="success" sx={{ width: '100%', margin: '0 auto' }}>
                Your submission has been received
              </Alert>
            </Snackbar>
          </Stack>
          <button className='btn' onClick={handleSubmit}>Submit</button>
        </Grid >

      </Grid>
    </Grid>

  )
}

export default Form;