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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBackspace} from '@coreui/icons'
import {useParams} from 'react-router-dom'
import axios from 'axios'

  const DetailUser = () => {
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
            <strong> Detail User </strong>
          </CCardHeader>
          <CCardBody>
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View User Details</h3>
                    <Link to={`/user`} align="right">
                      <CButton color="danger"><CIcon icon={cilBackspace} /> </CButton>
                    </Link>
                    <div className = "card-body">
                        <div className = "row">
                            <label className='col-sm-4'> Username  </label>
                            <div className='col-sm-4'> {users.username}</div>
                        </div>
                        <div className = "row">
                            <label className='col-sm-4'> Email  </label>
                            <div className='col-sm-4'> {users.email}</div>
                        </div>
                        <div className = "row">
                            <label className='col-sm-4'> No Telepon </label>
                            <div className='col-sm-4'> {users.notelepon}</div>
                        </div>
                        <div className = "row">
                            <label className='col-sm-4'> Role </label>
                            <div className='col-sm-4'> {users.role}</div>
                        </div>
                        <div className = "row">
                            <label className='col-sm-4'> Status </label>
                            {users.status == '1' ? (
                              <CBadge color="success" className='col-sm-4'> Active </CBadge>  
                              ) : (
                                <CBadge color="danger" className='col-sm-4'> Inactive </CBadge>  
                              )
                            }
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

export default DetailUser