import React, { Component, ReactPropTypes } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CBadge,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilDescription, cilPencil, cilPlus, cilTrash } from '@coreui/icons'
import UserServices from 'src/services/UserServices'

class ListUsers extends Component {

constructor(props) {
  super(props)

  this.state = {
    users: []
  }
}

componentDidMount(){
  UserServices.getUser().then((res) => {
      this.setState({ users: res.data.data});
  });
}

  render() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>User List</strong>
          </CCardHeader>
          <CCardBody>
              <Link to={`/addUser`} align="right">  
                <CButton color="dark"><CIcon icon={cilPlus} /> </CButton>
              </Link> &nbsp;
              <br></br>
              <br></br>
              <CTable>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col"> ID </CTableHeaderCell>
                    <CTableHeaderCell scope="col"> Username </CTableHeaderCell>
                    <CTableHeaderCell scope="col"> Role </CTableHeaderCell>
                    <CTableHeaderCell scope="col"> Status </CTableHeaderCell>
                    <CTableHeaderCell scope="col"> Operating </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    this.state.users.map(
                      user =>
                    <CTableRow key = {user.id}>
                      <CTableDataCell> {user.id}</CTableDataCell>
                      <CTableDataCell> {user.username}</CTableDataCell>
                      <CTableDataCell> {user.role}</CTableDataCell>
                      <CTableDataCell>
                        {user.status == '1' ? (
                          <CBadge color="success"> Active </CBadge>  
                          ) : (
                            <CBadge color="danger"> Inactive </CBadge>  
                          )
                        }
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton color="danger"><CIcon icon={cilTrash} /> </CButton> &nbsp;
                        <Link to={`/editUser/${user.id}`}>  
                          <CButton color="success"><CIcon icon={cilPencil} /> </CButton>
                        </Link> &nbsp;
                        <Link to={`/detailUser/${user.id}`}>  
                          <CButton color="info"><CIcon icon={cilDescription} /> </CButton>
                        </Link>
                      </CTableDataCell>
                  </CTableRow>
                   )
                  }
                </CTableBody>
              </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
}

export default ListUsers
