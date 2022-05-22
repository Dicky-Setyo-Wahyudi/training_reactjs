import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        {/* <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          &nbsp;
        </a> */}
        <span className="ms-1">&copy; 2022. All Right Reserved by Sharing Vision</span>
      </div>
      {/* <div className="ms-auto">
        <span className="me-1"> All Right Reserved by </span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Sharing Vision
        </a>
      </div> */}
    </CFooter>
  )
}

export default React.memo(AppFooter)
