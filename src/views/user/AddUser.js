import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CBadge,
  CFormInput,
  CForm,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBackspace, cilPencil, cilSave } from '@coreui/icons'
import {useParams} from 'react-router-dom'
import axios from 'axios'

  const AddUser = () => {
  const [users, setUsers] = useState([]);
  let { id } = useParams()
  const url = 'http://localhost:9090/user/'+id
  useEffect(() => {  
      axios.get(url).then((res) => {
      const user = res.data.data
      setUsers(user);
    })
  }, []);

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong> Add User</strong>
          </CCardHeader>
          <CCardBody>
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Form Add User </h3>
                    <Link to={`/user`} align="right">
                      <CButton color="danger"><CIcon icon={cilBackspace} /> </CButton>
                    </Link>
                    <div className = "card-body">
                        <div className = "row">
                            <label className='col-sm-4'> Username  </label>
                            <div className='col-sm-8'> 
                                <input className="form-control"></input>
                            </div>
                        </div>

                        <br></br>

                        <div className = "row">
                            <label className='col-sm-4'> Password  </label>
                            <div className='col-sm-8'> 
                                <input className="form-control" type="Password"></input>
                            </div>
                        </div>

                        <br></br>
                        <div className = "row">
                            <label className='col-sm-4'> Email  </label>
                            <div className='col-sm-8'> 
                            <input className="form-control"></input>
                            </div>
                        </div>
                        
                        <br></br>
                        <div className = "row">
                            <label className='col-sm-4'> No Telepon </label>
                            <div className='col-sm-8'> 
                                <input className="form-control"></input>
                            </div>
                        </div>

                        <br></br>
                        <div className = "row">
                            <label className='col-sm-4'> Role </label>
                            <div className='col-sm-8'> 
                            <input className="form-control"></input>
                            </div>
                        </div>

                        <br></br>
                        <div className = "row">
                            <label className='col-sm-4'> Status </label>
                            <div className='col-sm-8'>
                                <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                    <option> Choose Status </option>
                                    <option value="1"> Active </option>
                                    <option value="0"> Inactive </option>
                                </CFormSelect>
                            </div>
                        </div>

                        <br></br>
                        <div className = "row">
                            <div className='col-sm-4'>
                                <CButton color="dark"><CIcon icon={cilSave} /> Submit </CButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default AddUser