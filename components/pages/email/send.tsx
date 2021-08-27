const SendEmail = () => {

    return (
        <div id="compose-email-popup" className="compose-popup modal modal-sticky-bottom-right modal-sticky-lg" aria-modal="true" style={{ paddingRight: 8 }}>
            <div className="iq-card iq-border-radius-20 mb-0">
                <div className="iq-card-body">
                    <div className="row align-items-center">
                        <div className="col-md-12 mb-3">
                            <h5 className="text-primary float-left"><i className="ri-pencil-fill"></i> Compose Message</h5>
                            <button type="submit" className="float-right close-popup" data-dismiss="modal"><i className="ri-close-fill"></i></button>
                        </div>
                    </div>
                    <form className="email-form">
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">To:</label>
                            <div className="col-sm-10">
                                <select className="select2jsMultiSelect form-control select2-hidden-accessible" multiple={true} data-select2-id="inputEmail3" tabIndex={-1} aria-hidden="true">
                                    <option value="Petey Cruiser">Petey Cruiser</option>
                                    <option value="Bob Frapples">Bob Frapples</option>
                                    <option value="Barb Ackue">Barb Ackue</option>
                                    <option value="Greta Life">Greta Life</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="1" style={{ width: 100 }}>
                                    <span className="selection">
                                        <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false">
                                            <ul className="select2-selection__rendered">
                                                <li className="select2-search select2-search--inline">
                                                    <input className="select2-search__field" type="search" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" style={{ width: "0.75em" }} />
                                                </li>
                                            </ul>
                                        </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Cc:</label>
                            <div className="col-sm-10">
                                <select id="cc" className="select2jsMultiSelect form-control select2-hidden-accessible" multiple={true} data-select2-id="cc" tabIndex={-1} aria-hidden="true">
                                    <option defaultValue="Brock Lee">Brock Lee</option>
                                    <option defaultValue="Rick O'Shea">Rick O'Shea</option>
                                    <option defaultValue="Cliff Hanger">Cliff Hanger</option>
                                    <option defaultValue="Barb Dwyer">Barb Dwyer</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{ width: 100 }}>
                                    <span className="selection">
                                        <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false">
                                            <ul className="select2-selection__rendered">
                                                <li className="select2-search select2-search--inline"><input className="select2-search__field" type="search" tabIndex={0} autoComplete="off" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" placeholder="" style={{ width: "0.75em" }} /></li>
                                            </ul>
                                        </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Subject:</label>
                            <div className="col-sm-10">
                                <input type="text" id="subject" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Your Message:</label>
                            <div className="col-md-10">
                                <textarea className="textarea form-control" rows={5} defaultValue=""></textarea>
                            </div>
                        </div>
                        <div className="form-group row align-items-center compose-bottom pt-3 m-0">
                            <div className="d-flex flex-grow-1 align-items-center">
                                <div className="send-btn">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                </div>
                                <div className="send-panel">
                                    <label className="ml-2 mb-0 iq-bg-primary rounded" > <input type="file" id="file" style={{ display: "none" }} /> <a><i className="ri-attachment-line" ></i> </a> </label>
                                    <label className="ml-2 mb-0 iq-bg-primary rounded"> <a> <i className="ri-map-pin-user-line text-primary"></i></a>  </label>
                                    <label className="ml-2 mb-0 iq-bg-primary rounded"> <a> <i className="ri-drive-line text-primary"></i></a>  </label>
                                    <label className="ml-2 mb-0 iq-bg-primary rounded"> <a> <i className="ri-camera-line text-primary"></i></a>  </label>
                                    <label className="ml-2 mb-0 iq-bg-primary rounded"> <a> <i className="ri-user-smile-line text-primary"></i></a>  </label>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="send-panel float-right">
                                    <label className="ml-2 mb-0 iq-bg-primary rounded"><a><i className="ri-settings-2-line text-primary"></i></a></label>
                                    <label className="ml-2 mb-0 iq-bg-primary rounded"><a>  <i className="ri-delete-bin-line text-primary"></i></a>  </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SendEmail