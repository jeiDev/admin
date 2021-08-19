import Head from "next/head"

import { PropsLayoutI } from "~/interfaces"

const Header = (props: PropsLayoutI) => {

    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>

            <div className="iq-top-navbar">
                <div className="iq-navbar-custom">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <div className="iq-menu-bt d-flex align-items-center">
                            <div className="wrapper-menu">
                                <div className="main-circle"><i className="ri-menu-line"></i></div>
                                <div className="hover-circle"><i className="ri-close-fill"></i></div>
                            </div>
                            <div className="iq-navbar-logo d-flex justify-content-between ml-3">
                                <a href="index.html" className="header-logo">
                                    <img src="images/logo.png" className="img-fluid rounded" alt="" />
                                    <span>FinDash</span>
                                </a>
                            </div>
                        </div>
                        <div className="iq-search-bar">
                            <form action="#" className="searchbox">
                                <input type="text" className="text search-input" placeholder="Type here to search..." />
                                <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                            </form>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                            <i className="ri-menu-3-line"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-list">
                                <li className="nav-item">
                                    <a className="search-toggle iq-waves-effect language-title" href="#"><span className="ripple rippleEffect" style={{ width: 98, height: 98, top: -15, left: 56.2969 }}></span><img src="images/small/flags/flag-01.png" alt="img-flaf" className="img-fluid mr-1" style={{ height: 16, width: 16 }} /> EN <i className="ri-arrow-down-s-line"></i></a>
                                    <div className="iq-sub-dropdown">
                                        <a className="iq-sub-card" href="#"><img src="images/small/flags/flag-02.png" alt="img-flaf" className="img-fluid mr-2" />French</a>
                                        <a className="iq-sub-card" href="#"><img src="images/small/flags/flag-03.png" alt="img-flaf" className="img-fluid mr-2" />Spanish</a>
                                        <a className="iq-sub-card" href="#"><img src="images/small/flags/flag-04.png" alt="img-flaf" className="img-fluid mr-2" />Italian</a>
                                        <a className="iq-sub-card" href="#"><img src="images/small/flags/flag-05.png" alt="img-flaf" className="img-fluid mr-2" />German</a>
                                        <a className="iq-sub-card" href="#"><img src="images/small/flags/flag-06.png" alt="img-flaf" className="img-fluid mr-2" />Japanese</a>
                                    </div>
                                </li>
                                <li className="nav-item nav-icon">
                                    <a href="#" className="iq-waves-effect bg-primary rounded"><span className="ripple rippleEffect"></span><i className="ri-shopping-cart-2-line"></i></a>
                                </li>
                                <li className="nav-item nav-icon">
                                    <a href="#" className="search-toggle iq-waves-effect bg-primary rounded">
                                        <i className="ri-notification-line"></i>
                                        <span className="bg-danger dots"></span>
                                    </a>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">All Notifications<small className="badge  badge-light float-right pt-1">4</small></h5>
                                                </div>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/01.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Emma Watson Barry</h6>
                                                            <small className="float-right font-size-12">Just Now</small>
                                                            <p className="mb-0">95 MB</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/02.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">New customer is join</h6>
                                                            <small className="float-right font-size-12">5 days ago</small>
                                                            <p className="mb-0">Cyst Barry</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/03.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Two customer is left</h6>
                                                            <small className="float-right font-size-12">2 days ago</small>
                                                            <p className="mb-0">Cyst Barry</p>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/04.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">New Mail from Fenny</h6>
                                                            <small className="float-right font-size-12">3 days ago</small>
                                                            <p className="mb-0">Cyst Barry</p>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item nav-icon dropdown">
                                    <a href="#" className="search-toggle iq-waves-effect bg-primary rounded">
                                        <i className="ri-mail-line"></i>
                                        <span className="bg-danger count-mail"></span>
                                    </a>
                                    <div className="iq-sub-dropdown">
                                        <div className="iq-card shadow-none m-0">
                                            <div className="iq-card-body p-0 ">
                                                <div className="bg-primary p-3">
                                                    <h5 className="mb-0 text-white">All Messages<small className="badge  badge-light float-right pt-1">5</small></h5>
                                                </div>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/01.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Barry Emma Watson</h6>
                                                            <small className="float-left font-size-12">13 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/02.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                            <small className="float-left font-size-12">20 Apr</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/03.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Why do we use it?</h6>
                                                            <small className="float-left font-size-12">30 Jun</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/04.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Variations Passages</h6>
                                                            <small className="float-left font-size-12">12 Sep</small>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="iq-sub-card">
                                                    <div className="media align-items-center">
                                                        <div className="">
                                                            <img className="avatar-40 rounded" src="images/user/05.jpg" alt="" />
                                                        </div>
                                                        <div className="media-body ml-3">
                                                            <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                            <small className="float-left font-size-12">5 Dec</small>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-list">
                            <li className="line-height">
                                <a href="#" className="search-toggle iq-waves-effect d-flex align-items-center">
                                    <img src="images/user/1.jpg" className="img-fluid rounded mr-3" alt="user" />
                                    <div className="caption">
                                        <h6 className="mb-0 line-height">Barry Tech</h6>
                                        <p className="mb-0">Manager</p>
                                    </div>
                                </a>
                                <div className="iq-sub-dropdown iq-user-dropdown">
                                    <div className="iq-card shadow-none m-0">
                                        <div className="iq-card-body p-0 ">
                                            <div className="bg-primary p-3">
                                                <h5 className="mb-0 text-white line-height">Hello Barry Tech</h5>
                                                <span className="text-white font-size-12">Available</span>
                                            </div>
                                            <a href="profile.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-file-user-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">My Profile</h6>
                                                        <p className="mb-0 font-size-12">View personal profile details.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="profile-edit.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-profile-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Edit Profile</h6>
                                                        <p className="mb-0 font-size-12">Modify your personal details.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="account-setting.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-account-box-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Account settings</h6>
                                                        <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="privacy-setting.html" className="iq-sub-card iq-bg-primary-hover">
                                                <div className="media align-items-center">
                                                    <div className="rounded iq-card-icon iq-bg-primary">
                                                        <i className="ri-lock-line"></i>
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Privacy Settings</h6>
                                                        <p className="mb-0 font-size-12">Control your privacy parameters.</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <div className="d-inline-block w-100 text-center p-3">
                                                <a className="bg-primary iq-sign-btn" href="sign-in.html" role="button">Sign out<i className="ri-login-box-line ml-2"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;
