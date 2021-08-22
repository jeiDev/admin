const IqChart = () => {

    return (
        <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                    <h4 className="card-title">Orders</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                    <div className="dropdown">
                        <span className="dropdown-toggle text-primary" id="dropdownMenuButton5" data-toggle="dropdown">
                            <i className="ri-more-2-fill"></i>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton5">
                            <a className="dropdown-item" href="#"><i className="ri-eye-fill mr-2"></i>View</a>
                            <a className="dropdown-item" href="#"><i className="ri-delete-bin-6-fill mr-2"></i>Delete</a>
                            <a className="dropdown-item" href="#"><i className="ri-pencil-fill mr-2"></i>Edit</a>
                            <a className="dropdown-item" href="#"><i className="ri-printer-fill mr-2"></i>Print</a>
                            <a className="dropdown-item" href="#"><i className="ri-file-download-fill mr-2"></i>Download</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="iq-card-body">
                <div id="iq-chart-order" className="amcharts-chart-div" style={{ height: 400 }}></div>
            </div>
        </div>
    )
}

export default IqChart;