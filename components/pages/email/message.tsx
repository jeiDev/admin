const Message = () => { 

    return (
        <div className="email-app-details">
            <div className="iq-card">
                <div className="iq-card-body p-0">
                    <div className="">
                        <div className="iq-email-to-list p-3">
                            <div className="d-flex justify-content-between">
                                <ul>
                                    <li className="mr-3">
                                        <a >
                                            <h4 className="m-0"><i className="ri-arrow-left-line"></i></h4>
                                        </a>
                                    </li>
                                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Mail" className="show"><a href="#"><i className="ri-mail-open-line"></i></a></li>
                                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Info"><a href="#"><i className="ri-information-line"></i></a></li>
                                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete"><a href="#"><i className="ri-delete-bin-line"></i></a></li>
                                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Unread"><a href="#"><i className="ri-mail-unread-line"></i></a></li>
                                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Transfer"><a href="#"><i className="ri-folder-transfer-line"></i></a></li>
                                    <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Bookmark"><a href="#"><i className="ri-bookmark-line"></i></a></li>
                                </ul>
                                <div className="iq-email-search d-flex">
                                    <ul>
                                        <li className="mr-3">
                                            <a className="font-size-14" href="#">1 of 505</a>
                                        </li>
                                        <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Previous"><a href="#"><i className="ri-arrow-left-s-line"></i></a></li>
                                        <li data-toggle="tooltip" data-placement="top" title="" data-original-title="Next"><a href="#"><i className="ri-arrow-right-s-line"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-0" />
                        <div className="iq-inbox-subject p-3">
                            <h5 className="mt-0">Your elite author Graphic Optimization reward is ready!</h5>
                            <div className="iq-inbox-subject-info">
                                <div className="iq-subject-info">
                                    <img src="../images/user/user-1.jpg" className="img-fluid rounded" alt="#" />
                                    <div className="iq-subject-status align-self-center">
                                        <h6 className="mb-0">FinDash team <a href="dummy@FinDash.com">dummy@findash.com</a></h6>
                                        <div className="dropdown">
                                            <a className="dropdown-toggle" href="#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                to Me
                                            </a>
                                            <div className="dropdown-menu font-size-12" aria-labelledby="dropdownMenuButton">
                                                <table className="iq-inbox-details">
                                                    <tbody>
                                                        <tr>
                                                            <td> from: </td>
                                                            <td>Medium Daily Digest</td>
                                                        </tr>
                                                        <tr>
                                                            <td>reply-to: </td>
                                                            <td>noreply @gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td>to: </td>
                                                            <td>iqonicdesigns @gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <td>date: </td>
                                                            <td>13 Dec 2019, 08: 30</td>
                                                        </tr>
                                                        <tr>
                                                            <td>subject: </td>
                                                            <td>The Golden Rule</td>
                                                        </tr>
                                                        <tr>
                                                            <td>security: </td>
                                                            <td>Standard encryption</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="float-right align-self-center">Jan 15, 2029, 10: 20AM</span>
                                </div>
                                <div className="iq-inbox-body mt-5">
                                    <p>Hi Jopour Xiong,</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                    <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                    <p className="mt-5 mb-0">Regards,<span className="d-inline-block w-100">John Deo</span></p>
                                </div>
                                <hr />
                                <div className="attegement">
                                    <h6 className="mb-2">ATTACHED FILES: </h6>
                                    <ul>
                                        <li className="icon icon-attegment">
                                            <i className="fa fa-file-text-o" aria-hidden="true"></i> <span className="ml-1">mydoc.doc</span>
                                        </li>
                                        <li className="icon icon-attegment">
                                            <i className="fa fa-file-text-o" aria-hidden="true"></i> <span className="ml-1">mydoc.pdf</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Message