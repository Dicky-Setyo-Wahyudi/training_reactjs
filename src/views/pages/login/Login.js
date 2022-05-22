import React from 'react'
// import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'


// Register(){
//   // console.log(id);
//   // console.log(props);
//   // this.props.history.push(`/view-employee/${id}`);
//   // this.props.history.push(`/detailUser/${id}`);
//   // this.props.history.push(`/register`);
//   this.props.history.push(`/register`);
// }

// const [passwordShown, setPasswordShown] = useState(false)

// const togglePassword = () => {
//   setPasswordShown(!passwordShown)
// }

// const App = () => {
//   const [values, setValues] = React.useState({
//   password:"",
//   showPassword:false,
//   })
//   const handleClickShowPassword = () => {
//   setValues({...values, showPassword: !values.showPassword })
//   }
//   const handleMouseDownPassword = (event) => {
//   event.preventDefault()
//   }
//   const handlePasswordChange = (prop) => (event) => {
//   setValues({ ...values, [prop]: event.target.value })
//   };
// }

const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6} lg={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm align="center">
                  <b> Onboarding FSE </b>
                  <br></br>
                  <br></br>
                  <h6> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do </h6>
                  <h6> elusmod tempor incididunt ut labore et dolore magna </h6>
                  <br></br>
                  <p className="text-medium-emphasis"> Account Login </p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username Admin or User" autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput placeholder="Password" autoComplete="password" />
                    {/* <input type={passwordShown} placeholder="Password" />
                    <button onClick={togglePassword}>Show Password</button> */}
                    {/* <CFormInput 
                    type={values.showPassword ? "text" : "password"}
                    onChange={handlePasswordChange("password")}
                    value={values.password}
                    endAdornment={
                    <InputAdornment position="end">
                    <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}>
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                    }
                    /> */}
                  </CInputGroup>
                  <div align="right">
                    Dont Have Account ? <Link to="/register"> Register Now </Link>
                    {/* Dont Have Account ? <CButton onClick={Register}> Register Now </CButton> */}
                  </div>
                  <br></br>
                  <div className="d-grid">
                    <CButton color="danger"> Register </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
            <br></br>
            <h6 align="center"> @2022. All Right Reserved by Sharing Vision </h6>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
