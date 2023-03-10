import React from 'react'
import { Link } from 'react-router-dom'

import "../../public/css/user/user.css"


type Props = {}

const Info_user = (props: Props) => {
    return (
        <div className='user-page'>
            <div className="main-user-page">
                {/* Title page */}
                <div className="title-main">
                    <div className="navbar-title col-9">
                        <h5>Thông tin cá nhân</h5>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.1168 12.0743L15.2834 10.691C15.1084 10.3827 14.9501 9.79935 14.9501 9.45768V7.34935C14.9501 5.39102 13.8001 3.69935 12.1418 2.90768C11.7084 2.14102 10.9084 1.66602 9.99178 1.66602C9.08345 1.66602 8.26678 2.15768 7.83345 2.93268C6.20845 3.74102 5.08345 5.41602 5.08345 7.34935V9.45768C5.08345 9.79935 4.92511 10.3827 4.75012 10.6827L3.90845 12.0743C3.57512 12.6327 3.50012 13.2493 3.70845 13.816C3.90845 14.3743 4.38345 14.8077 5.00012 15.016C6.61678 15.566 8.31678 15.8327 10.0168 15.8327C11.7168 15.8327 13.4168 15.566 15.0334 15.0244C15.6168 14.8327 16.0668 14.391 16.2834 13.816C16.5001 13.241 16.4418 12.6077 16.1168 12.0743Z" fill="#FFAC6A" />
                                <path d="M12.3582 16.6743C12.0082 17.641 11.0832 18.3327 9.9999 18.3327C9.34157 18.3327 8.69157 18.066 8.23324 17.591C7.96657 17.341 7.76657 17.0077 7.6499 16.666C7.75824 16.6827 7.86657 16.691 7.98324 16.7077C8.1749 16.7327 8.3749 16.7577 8.5749 16.7743C9.0499 16.816 9.53324 16.841 10.0166 16.841C10.4916 16.841 10.9666 16.816 11.4332 16.7743C11.6082 16.7577 11.7832 16.7493 11.9499 16.7243C12.0832 16.7077 12.2166 16.691 12.3582 16.6743Z" fill="#FFAC6A" />
                            </svg>
                        </button>
                    </div>
                    <div className="user-title col-3">
                        <div className="avata-user col-2">
                            <img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" width="100%" alt="" />
                        </div>
                        <div className="name-user col-10">
                            <p>Xin chào</p>
                            <h5>Lê Quỳnh Ái Vân</h5>
                        </div>
                    </div>
                </div>
                <div className="detail-user">
                    <div className="avatar-user col-3">
                        <div className="img">
                            <img src="https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg" width="100%" alt="" />
                            <button>
                                <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="22.5" cy="22.5" r="21.5" fill="#FF7506" stroke="white" stroke-width="2" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.85 11.75C26.3747 11.7501 26.8861 11.9154 27.3116 12.2223C27.7372 12.5292 28.0554 12.9622 28.2213 13.46L28.9 15.5H31.75C32.7446 15.5 33.6984 15.8951 34.4017 16.5983C35.1049 17.3016 35.5 18.2554 35.5 19.25V29.25C35.5 30.2446 35.1049 31.1984 34.4017 31.9017C33.6984 32.6049 32.7446 33 31.75 33H14.25C13.2554 33 12.3016 32.6049 11.5983 31.9017C10.8951 31.1984 10.5 30.2446 10.5 29.25V19.25C10.5 18.2554 10.8951 17.3016 11.5983 16.5983C12.3016 15.8951 13.2554 15.5 14.25 15.5H17.1L17.7787 13.46C17.9446 12.962 18.263 12.5288 18.6889 12.2219C19.1147 11.915 19.6263 11.7499 20.1512 11.75H25.8488H25.85ZM25.85 14.25H20.15L19.4713 16.29C19.3054 16.788 18.987 17.2212 18.5611 17.5281C18.1353 17.835 17.6237 18.0001 17.0987 18H14.25C13.9185 18 13.6005 18.1317 13.3661 18.3661C13.1317 18.6005 13 18.9185 13 19.25V29.25C13 29.5815 13.1317 29.8995 13.3661 30.1339C13.6005 30.3683 13.9185 30.5 14.25 30.5H31.75C32.0815 30.5 32.3995 30.3683 32.6339 30.1339C32.8683 29.8995 33 29.5815 33 29.25V19.25C33 18.9185 32.8683 18.6005 32.6339 18.3661C32.3995 18.1317 32.0815 18 31.75 18H28.9C28.3753 17.9999 27.8639 17.8346 27.4384 17.5277C27.0128 17.2208 26.6946 16.7878 26.5287 16.29L25.85 14.25ZM19.875 23.625C19.875 22.7962 20.2042 22.0013 20.7903 21.4153C21.3763 20.8292 22.1712 20.5 23 20.5C23.8288 20.5 24.6237 20.8292 25.2097 21.4153C25.7958 22.0013 26.125 22.7962 26.125 23.625C26.125 24.4538 25.7958 25.2487 25.2097 25.8347C24.6237 26.4208 23.8288 26.75 23 26.75C22.1712 26.75 21.3763 26.4208 20.7903 25.8347C20.2042 25.2487 19.875 24.4538 19.875 23.625ZM23 18C21.5082 18 20.0774 18.5926 19.0225 19.6475C17.9676 20.7024 17.375 22.1332 17.375 23.625C17.375 25.1168 17.9676 26.5476 19.0225 27.6025C20.0774 28.6574 21.5082 29.25 23 29.25C24.4918 29.25 25.9226 28.6574 26.9775 27.6025C28.0324 26.5476 28.625 25.1168 28.625 23.625C28.625 22.1332 28.0324 20.7024 26.9775 19.6475C25.9226 18.5926 24.4918 18 23 18Z" fill="white" />
                                </svg>
                            </button>
                        </div>
                        <h4>Lê Quỳnh Ái Vân</h4>
                    </div>
                    <div className="form-user col-9">
                        <div className="item-form-user">
                            <b>Tên người dùng:</b>
                            <input type="text" value="Lê Quỳnh Ái Vân" />
                        </div>
                        <div className="item-form-user">
                            <b>Tên đăng nhập:</b>
                            <input type="text" value="lequynhaivan01" />
                        </div>
                        <div className="item-form-user">
                            <b>Số điện thoại:</b>
                            <input type="text" value="0767375921" />
                        </div>
                        <div className="item-form-user">
                            <b>Mật khẩu:</b>
                            <input type="text" value="311940211" />
                        </div>
                        <div className="item-form-user">
                            <b>Email:</b>
                            <input type="text" value="adminSSO1@domain.com" />
                        </div>
                        <div className="item-form-user">
                            <b>Vai trò:</b>
                            <input type="text" value="Kế toán" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info_user