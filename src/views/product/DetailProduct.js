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
import { cilBackspace } from '@coreui/icons'
import {useParams} from 'react-router-dom'
import axios from 'axios'

  const DetailProduct = () => {
  const [products, setProduct] = useState([]);
  let { id } = useParams()
  const url = 'http://localhost:9090/product/'+id
  useEffect(() => {  
      axios.get(url).then((res) => {
      const product = res.data.data
      setProduct(product);
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
                    <h3 className = "text-center"> View Product Details</h3>
                    <Link to={`/product`} align="right">
                      <CButton color="danger"><CIcon icon={cilBackspace} /> </CButton>
                    </Link>
                    <div className = "card-body">
                        <div className = "row">
                            <label className='col-sm-4'> Product Name  </label>
                            <div className='col-sm-4'> {products.namaproduk}</div>
                        </div>
                        <div className = "row">
                            <label className='col-sm-4'> Description  </label>
                            <div className='col-sm-4'> {products.deskripsi}</div>
                        </div>
                        <div className = "row">
                            <label className='col-sm-4'> Status </label>
                            {products.status == '1' ? (
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

export default DetailProduct