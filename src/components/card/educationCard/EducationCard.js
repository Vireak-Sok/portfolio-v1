import React from 'react'
import './EducationCard.css'

const EducationCard = () => {
  const EducationIcon = <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M28.6665 0C29.7711 0 30.6665 0.895431 30.6665 2V28C30.6665 29.1046 29.7711 30 28.6665 30H2.6665C1.56193 30 0.666504 29.1046 0.666504 28V2C0.666504 0.89543 1.56193 0 2.6665 0H28.6665ZM15.4951 16.2709C15.4232 16.2562 15.3526 16.2322 15.2849 16.1988L4.18714 10.7261C3.4482 10.3617 3.50975 9.23049 4.28335 8.958L15.3811 5.04892C15.5663 4.9837 15.7665 4.98369 15.9516 5.04891L27.0497 8.958C27.8233 9.23048 27.8848 10.3617 27.1459 10.7261L16.0478 16.1988C15.9802 16.2322 15.9096 16.2562 15.8377 16.2709C15.7246 16.294 15.6082 16.294 15.4951 16.2709ZM6.8124 22.3019C6.71556 22.7428 6.92434 23.1971 7.32058 23.369C12.4286 25.5851 18.9375 25.5726 24.0404 23.1491C24.4229 22.9675 24.6181 22.5202 24.5207 22.0893L22.8744 14.8085H22.5441L16.0698 18.2292C16.0398 18.2451 16.0093 18.259 15.9782 18.2711C15.777 18.3495 15.5558 18.3495 15.3546 18.2711C15.3236 18.259 15.293 18.2451 15.263 18.2292L8.7886 14.8085H8.45826L6.8124 22.3019ZM9.8822 17.6483L8.95485 21.8704C13.1423 23.4179 18.2251 23.3903 22.3812 21.6956L21.4644 17.641L17.0041 19.9976C16.1656 20.4406 15.1672 20.4406 14.3287 19.9976L9.8822 17.6483ZM7.2819 10.0222L15.6664 7.06888L24.0511 10.0222L15.6664 14.1569L7.2819 10.0222Z" fill="#0075B7" fill-opacity="0.6"/>
                        </svg>
  return (
    <div className='education-card'>
        <div className='education-text'>
            <p className='education-title'> Education</p>
            <p className='education-company'> Napt</p>
            <p className='education-duration'> Jan 2019 - Jun 2019</p>
        </div>
        <div className='education-icon'>
          {EducationIcon}
        </div>
    </div>
  )
}

export default EducationCard