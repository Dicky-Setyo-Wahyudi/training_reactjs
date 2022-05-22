import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
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

// const hStyle = {color:'red'}

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={10} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm align="center">
                  <b> Onboarding FSE </b>
                  <br></br>
                  <br></br>
                  <h6> Lorem ipsum dolor sit amet consectetur adipiscing elit sed do </h6>
                  <h6> elusmod tempor incididunt ut labore et dolore magna </h6>
                  <br></br>
                  <p className="text-medium-emphasis">Create your account</p>
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="Username" autoComplete="username" />
                  </CInputGroup> */}
                  {/* <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup> */}
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Name" autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Email" autoComplete="email" type="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Personal Number" autoComplete="Number" type="number" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Password" autoComplete="password" type="password" />
                  </CInputGroup>
                  <div align="right">
                    Already Have Account ? <Link to="/login"> Login Now </Link>
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

export default Register
