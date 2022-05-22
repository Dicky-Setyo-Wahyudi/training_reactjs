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
import { cilDescription, cilPencil, cilTrash, cilPlus } from '@coreui/icons'
import ProductServices from 'src/services/ProductServices'

class ListProduct extends Component {

constructor(props) {
  super(props)

  this.state = {
    products: []
  }
}

componentDidMount(){
  ProductServices.getProduct().then((res) => {
      this.setState({ products: res.data.data});
  });
}

  render() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Product List</strong>
          </CCardHeader>
          <CCardBody>
              <Link to={`/addProduct`} align="right">  
                <CButton color="dark"><CIcon icon={cilPlus} /> </CButton>
              </Link> &nbsp;
              <br></br>
              <br></br>
              <CTable>
                <CTableHead color="dark">
                  <CTableRow>
                    <CTableHeaderCell scope="col"> ID </CTableHeaderCell>
                    <CTableHeaderCell scope="col"> Product Name </CTableHeaderCell>
                    <CTableHeaderCell scope="col"> Description </CTableHeaderCell>
                    <CTableHeaderCell scope="col"> Status </CTableHeaderCell>
                    <CTableHeaderCell scope="col"> Operating </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {
                    this.state.products.map(
                      product =>
                    <CTableRow key = {product.id}>
                      <CTableDataCell> {product.id}</CTableDataCell>
                      <CTableDataCell> {product.namaproduk}</CTableDataCell>
                      <CTableDataCell> {product.deskripsi}</CTableDataCell>
                      <CTableDataCell>
                        {product.status == '1' ? (
                          <CBadge color="success"> Active </CBadge>  
                          ) : (
                            <CBadge color="danger"> Inactive </CBadge>  
                          )
                        }
                      </CTableDataCell>
                      <CTableDataCell>
                        <CButton onClick={ () => this.deleteEmployee(product.id)} color="danger"><CIcon icon={cilTrash} /> </CButton> &nbsp;
                        <Link to={`/editProduct/${product.id}`}>  
                          <CButton color="success"><CIcon icon={cilPencil} /> </CButton>
                        </Link> &nbsp;
                        <Link to={`/detailProduct/${product.id}`}>  
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

export default ListProduct