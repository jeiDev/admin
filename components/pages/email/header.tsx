const HeaderMainEmail = () => {

    return (
        <div className="iq-email-to-list p-3">
            <div className="d-flex justify-content-between">
                <ul>
                    <li>
                        <a href="#" id="navbarDropdown" data-toggle="dropdown">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" ><i className="ri-arrow-down-s-line"></i></label>
                            </div>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Reload"><a href="#"><i className="ri-restart-line"></i></a></li>
                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Archive"><a href="#"><i className="ri-mail-open-line"></i></a></li>
                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><a href="#"><i className="ri-delete-bin-line"></i></a></li>
                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Inbox"><a href="#"><i className="ri-mail-unread-line"></i></a></li>
                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Zoom"><a href="#"><i className="ri-drag-move-2-line"></i></a></li>
                </ul>
                <div className="iq-email-search d-flex">
                    <form className="mr-3 position-relative">
                        <div className="form-group mb-0">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Search" />
                            <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                        </div>
                    </form>
                    <ul>
                        <li className="mr-3">
                            <a className="font-size-14" href="#" id="navbarDropdown" data-toggle="dropdown">
                                1 - 50 of 505
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">20 per page</a>
                                <a className="dropdown-item" href="#">50 per page</a>
                                <a className="dropdown-item" href="#">100 per page</a>
                            </div>
                        </li>
                        <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Previous"><a href="#"><i className="ri-arrow-left-s-line"></i></a></li>
                        <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Next"><a href="#"><i className="ri-arrow-right-s-line"></i></a></li>
                        <li className="mr-0" data-toggle="tooltip" data-placement="top" title="" data-original-title="Setting"><a href="#"><i className="ri-list-settings-line"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default HeaderMainEmail