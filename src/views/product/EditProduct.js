import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CFormSelect,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBackspace, cilPencil } from '@coreui/icons'
import {useParams} from 'react-router-dom'
import axios from 'axios'

  const EditProduct = () => {
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
            <strong> Edit Product</strong>
          </CCardHeader>
          <CCardBody>
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Edit Product Details</h3>
                    <Link to={`/product`} align="right">
                      <CButton color="danger"><CIcon icon={cilBackspace} /> </CButton>
                    </Link>
                    <div className = "card-body">
                        <div className = "row">
                            <label className='col-sm-4'> Product Name  </label>
                            <div className='col-sm-8'> 
                                <input value={products.namaproduk} className="form-control"></input>
                            </div>
                        </div>

                        <br></br>
                        <div className = "row">
                            <label className='col-sm-4'> Description  </label>
                            <div className='col-sm-8'> 
                            <input value={products.deskripsi} className="form-control"></input>
                            </div>
                        </div>
                        
                        <br></br>
                        <div className = "row">
                            <label className='col-sm-4'> Status </label>
                            <div className='col-sm-8'>
                                <CFormSelect size="sm" className="mb-3" aria-label="Small select example">
                                    <option> Choose Status </option>
                                    {products.status == '1' ? (
                                        <option value="1" selected > Active </option>
                                        ) : (
                                            <option value="2" selected> Inactive </option>
                                        )
                                    }
                                </CFormSelect>
                            </div>
                        </div>

                        <br></br>
                        <div className = "row">
                            <div className='col-sm-4'>
                                <CButton color="dark"><CIcon icon={cilPencil} /> Update </CButton>
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

export default EditProduct