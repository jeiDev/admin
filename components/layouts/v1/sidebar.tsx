const Sidebar = () => {
    return (
        <div className="iq-sidebar">
            <div className="iq-navbar-logo d-flex justify-content-between">
                <a href="index.html" className="header-logo">
                    <img src="images/logo.png" className="img-fluid rounded" alt="" />
                    <span>FinDash</span>
                </a>
                <div className="iq-menu-bt align-self-center">
                    <div className="wrapper-menu">
                        <div className="main-circle"><i className="ri-menu-line"></i></div>
                        <div className="hover-circle"><i className="ri-close-fill"></i></div>
                    </div>
                </div>
            </div>
            <div id="sidebar-scrollbar" data-scrollbar="true" tabIndex={-1} style={{overflow: "hidden", outline: "none"}}><div className="scroll-content">
                <nav className="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" className="iq-menu">
                        <li className="active active-menu">
                            <a href="#dashboard" className="iq-waves-effect" data-toggle="collapse" aria-expanded="true"><span className="ripple rippleEffect"></span><i className="las la-home iq-arrow-left"></i><span>Dashboard</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="dashboard" className="iq-submenu collapse show" data-parent="#iq-sidebar-toggle">
                                <li className="active active-menu"><a href="index.html"><i className="las la-laptop-code"></i>Account Dashboard</a></li>
                                <li aria-expanded="true"><a href="dashboard-1.html"><i className="las la-ad"></i>Marketing Dashboard</a></li>
                                <li><a href="dashboard-2.html"><i className="lab la-bandcamp"></i>Product Management</a></li>
                                <li><a href="dashboard-3.html"><i className="las la-atom"></i>Sales Dashboard</a></li>
                                <li><a href="dashboard-4.html"><i className="las la-crosshairs"></i>Banking Dashboard</a></li>
                                <li><a href="dashboard-5.html"><i className="las la-cash-register"></i>Cash Management </a></li>
                                <li><a href="dashboard-6.html"><i className="las la-bullseye"></i>Manufacturing </a></li>
                            </ul>
                        </li>
                        <li aria-expanded="true">
                            <a href="#menu-design" className="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><i className="ri-menu-3-line iq-arrow-left"></i><span>Menu Design</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="menu-design" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="horizontal-menu.html"><i className="ri-git-commit-line"></i>Horizontal menu</a></li>
                                <li><a href="horizontal-top-menu.html"><i className="ri-text-spacing"></i>Horizontal Top Menu</a></li>
                                <li><a href="two-sidebar.html"><i className="ri-indent-decrease"></i>Two Sidebar</a></li>
                                <li><a href="vertical-top-menu.html"><i className="ri-line-height"></i>Vertical block menu</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="calendar.html" className="iq-waves-effect"><i className="las la-calendar iq-arrow-left"></i><span>Calendar</span></a>
                        </li>
                        <li>
                            <a href="#userinfo" className="iq-waves-effect" data-toggle="collapse" aria-expanded="false"><span className="ripple rippleEffect"></span><i className="las la-user-tie iq-arrow-left"></i><span>User</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="userinfo" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="profile.html"><i className="las la-id-card-alt"></i>User Profile</a></li>
                                <li><a href="profile-edit.html"><i className="las la-edit"></i>User Edit</a></li>
                                <li><a href="add-user.html"><i className="las la-plus-circle"></i>User Add</a></li>
                                <li><a href="user-list.html"><i className="las la-th-list"></i>User List</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#mailbox" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="las la-mail-bulk iq-arrow-left"></i><span>Email</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="mailbox" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="app/index.html"><i className="las la-inbox"></i>Inbox</a></li>
                                <li><a href="app/email-compose.html"><i className="ri-mail-send-line"></i>Email Compose</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#ui-elements" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="lab la-elementor iq-arrow-left"></i><span>UI Elements</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="ui-elements" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="ui-colors.html"><i className="las la-palette"></i>colors</a></li>
                                <li><a href="ui-typography.html"><i className="las la-keyboard"></i>Typography</a></li>
                                <li><a href="ui-alerts.html"><i className="las la-tag"></i>Alerts</a></li>
                                <li><a href="ui-badges.html"><i className="lab la-atlassian"></i>Badges</a></li>
                                <li><a href="ui-breadcrumb.html"><i className="las la-bars"></i>Breadcrumb</a></li>
                                <li><a href="ui-buttons.html"><i className="las la-tablet"></i>Buttons</a></li>
                                <li><a href="ui-cards.html"><i className="las la-credit-card"></i>Cards</a></li>
                                <li><a href="ui-carousel.html"><i className="las la-film"></i>Carousel</a></li>
                                <li><a href="ui-embed-video.html"><i className="las la-video"></i>Video</a></li>
                                <li><a href="ui-grid.html"><i className="las la-border-all"></i>Grid</a></li>
                                <li><a href="ui-images.html"><i className="las la-images"></i>Images</a></li>
                                <li><a href="ui-list-group.html"><i className="las la-list"></i>list Group</a></li>
                                <li><a href="ui-media-object.html"><i className="las la-ad"></i>Media</a></li>
                                <li><a href="ui-modal.html"><i className="las la-columns"></i>Modal</a></li>
                                <li><a href="ui-notifications.html"><i className="las la-bell"></i>Notifications</a></li>
                                <li><a href="ui-pagination.html"><i className="las la-ellipsis-h"></i>Pagination</a></li>
                                <li><a href="ui-popovers.html"><i className="las la-eraser"></i>Popovers</a></li>
                                <li><a href="ui-progressbars.html"><i className="las la-hdd"></i>Progressbars</a></li>
                                <li><a href="ui-tabs.html"><i className="las la-database"></i>Tabs</a></li>
                                <li><a href="ui-tooltips.html"><i className="las la-magnet"></i>Tooltips</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#forms" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="lab la-wpforms iq-arrow-left"></i><span>Forms</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="forms" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="form-layout.html"><i className="las la-book"></i>Form Elements</a></li>
                                <li><a href="form-validation.html"><i className="las la-edit"></i>Form Validation</a></li>
                                <li><a href="form-switch.html"><i className="las la-toggle-off"></i>Form Switch</a></li>
                                <li><a href="form-chechbox.html"><i className="las la-check-square"></i>Form Checkbox</a></li>
                                <li><a href="form-radio.html"><i className="ri-radio-button-line"></i>Form Radio</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#wizard-form" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-archive-drawer-line iq-arrow-left"></i><span>Forms Wizard</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="wizard-form" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="form-wizard.html"><i className="ri-clockwise-line"></i>Simple Wizard</a></li>
                                <li><a href="form-wizard-validate.html"><i className="ri-clockwise-2-line"></i>Validate Wizard</a></li>
                                <li><a href="form-wizard-vertical.html"><i className="ri-anticlockwise-line"></i>Vertical Wizard</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#tables" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-table-line iq-arrow-left"></i><span>Table</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="tables" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="tables-basic.html"><i className="ri-table-line"></i>Basic Tables</a></li>
                                <li><a href="data-table.html"><i className="ri-database-line"></i>Data Table</a></li>
                                <li><a href="table-editable.html"><i className="ri-refund-line"></i>Editable Table</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#charts" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-pie-chart-box-line iq-arrow-left"></i><span>Charts</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="charts" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="chart-morris.html"><i className="ri-file-chart-line"></i>Morris Chart</a></li>
                                <li><a href="chart-high.html"><i className="ri-bar-chart-line"></i>High Charts</a></li>
                                <li><a href="chart-am.html"><i className="ri-folder-chart-line"></i>Am Charts</a></li>
                                <li><a href="chart-apex.html"><i className="ri-folder-chart-2-line"></i>Apex Chart</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#icons" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-list-check iq-arrow-left"></i><span>Icons</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="icons" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="icon-dripicons.html"><i className="ri-stack-line"></i>Dripicons</a></li>
                                <li><a href="icon-fontawesome-5.html"><i className="ri-facebook-fill"></i>Font Awesome 5</a></li>
                                <li><a href="icon-lineawesome.html"><i className="ri-keynote-line"></i>line Awesome</a></li>
                                <li><a href="icon-remixicon.html"><i className="ri-remixicon-line"></i>Remixicon</a></li>
                                <li><a href="icon-unicons.html"><i className="ri-underline"></i>unicons</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#authentication" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-pages-line iq-arrow-left"></i><span>Authentication</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="authentication" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="sign-in.html"><i className="las la-sign-in-alt"></i>Login</a></li>
                                <li><a href="sign-up.html"><i className="ri-login-circle-line"></i>Register</a></li>
                                <li><a href="pages-recoverpw.html"><i className="ri-record-mail-line"></i>Recover Password</a></li>
                                <li><a href="pages-confirm-mail.html"><i className="ri-file-code-line"></i>Confirm Mail</a></li>
                                <li><a href="pages-lock-screen.html"><i className="ri-lock-line"></i>Lock Screen</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#extra-pages" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-pantone-line iq-arrow-left"></i><span>Extra Pages</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="extra-pages" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="pages-timeline.html"><i className="ri-map-pin-time-line"></i>Timeline</a></li>
                                <li><a href="pages-invoice.html"><i className="ri-question-answer-line"></i>Invoice</a></li>
                                <li><a href="blank-page.html"><i className="ri-invision-line"></i>Blank Page</a></li>
                                <li><a href="pages-error.html"><i className="ri-error-warning-line"></i>Error 404</a></li>
                                <li><a href="pages-error-500.html"><i className="ri-error-warning-line"></i>Error 500</a></li>
                                <li><a href="pages-pricing.html"><i className="ri-price-tag-line"></i>Pricing</a></li>
                                <li><a href="pages-pricing-one.html"><i className="ri-price-tag-2-line"></i>Pricing 1</a></li>
                                <li><a href="pages-maintenance.html"><i className="ri-archive-line"></i>Maintenance</a></li>
                                <li><a href="pages-comingsoon.html"><i className="ri-mastercard-line"></i>Coming Soon</a></li>
                                <li><a href="pages-faq.html"><i className="ri-compasses-line"></i>Faq</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#menu-level" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-record-circle-line iq-arrow-left"></i><span>Menu Level</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                            <ul id="menu-level" className="iq-submenu collapse" data-parent="#iq-sidebar-toggle">
                                <li><a href="#"><i className="ri-record-circle-line"></i>Menu 1</a></li>
                                <li>
                                    <a href="#"><i className="ri-record-circle-line"></i>Menu 2</a>
                                    <ul>
                                        <li className="menu-level">
                                            <a href="#sub-menu" className="iq-waves-effect collapsed" data-toggle="collapse" aria-expanded="false"><i className="ri-play-circle-line"></i><span>Sub-menu</span><i className="ri-arrow-right-s-line iq-arrow-right"></i></a>
                                            <ul id="sub-menu" className="iq-submenu iq-submenu-data collapse">
                                                <li><a href="#"><i className="ri-record-circle-line"></i>Sub-menu 1</a></li>
                                                <li><a href="#"><i className="ri-record-circle-line"></i>Sub-menu 2</a></li>
                                                <li><a href="#"><i className="ri-record-circle-line"></i>Sub-menu 3</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="#"><i className="ri-record-circle-line"></i>Menu 3</a></li>
                                <li><a href="#"><i className="ri-record-circle-line"></i>Menu 4</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="p-3"></div>
            </div><div className="scrollbar-track scrollbar-track-x" style={{display: "none"}}><div className="scrollbar-thumb scrollbar-thumb-x" style={{width: 260, transform: "translate3d(0px, 0px, 0px)"}}></div></div><div className="scrollbar-track scrollbar-track-y" style={{display: "block"}}><div className="scrollbar-thumb scrollbar-thumb-y" style={{height: 597.809, transform: "translate3d(0px, 0px, 0px)"}}></div></div></div>
        </div>
    )
}

export default Sidebar