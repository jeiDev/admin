import { TableListPropsI } from "~/interfaces"

const TableList = (props: TableListPropsI) => {
    const { title, columns, datas } = props

    return (
        <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                    <h4 className="card-title">{title}</h4>
                </div>
                <div className="iq-card-header-toolbar d-flex align-items-center">
                    <div className="dropdown">
                        <span className="dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-expanded="false">
                            <i className="ri-more-fill"></i>
                        </span>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2">
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
                <div className="table-responsive">
                    <table className="table mb-0 table-borderless">
                        <thead>
                            <tr>
                                {columns.map((column, i) => (
                                    <th key={i} scope="col">{column.field}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((data, i) => (
                                <tr key={i}>
                                    {columns.map((column, i) => (
                                        <td  key={i}>
                                            <column.render />
                                        </td>
                                    ))}
                                </tr>
                            ))}

                            {/* <tr>
                                <td><img src="images/user/02.jpg" alt="profile" className="img-fluid rounded avatar-40 text-center" /></td>
                                <td>Branding</td>
                                <td>Anna Mull</td>
                                <td>Corporate Presentation</td>
                                <td>$600.00</td>
                                <td>Medium</td>
                                <td>March</td>
                                <td>
                                    <div className="badge badge-pill badge-danger"><i className="ri-close-line"></i></div>
                                </td>
                                <td>28/03/2020</td>
                                <td>
                                    <div className="badge badge-pill badge-success">doc</div>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="images/user/03.jpg" alt="profile" className="img-fluid rounded avatar-40 text-center" /></td>
                                <td>Branding</td>
                                <td>Anna Mull</td>
                                <td>Graphic identity</td>
                                <td>$2000.00</td>
                                <td>Low</td>
                                <td>Aprial</td>
                                <td>
                                    <div className="badge badge-pill badge-danger"><i className="ri-close-line"></i></div>
                                </td>
                                <td>28/03/2020</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><img src="images/user/04.jpg" alt="profile" className="img-fluid rounded avatar-40 text-center" /></td>
                                <td>Content</td>
                                <td>Bob Frapples</td>
                                <td>Release Demo</td>
                                <td>$1200.00</td>
                                <td>High</td>
                                <td>March</td>
                                <td>
                                    <div className="badge badge-pill badge-primary"><i className="ri-check-fill"></i></div>
                                </td>
                                <td>28/03/2020</td>
                                <td>
                                    <div className="badge badge-pill badge-success">pdf</div>
                                </td>
                            </tr>
                            <tr>
                                <td><img src="images/user/04.jpg" alt="profile" className="img-fluid rounded avatar-40 text-center" /></td>
                                <td>Content</td>
                                <td>Bob Frapples</td>
                                <td>Product Information</td>
                                <td>$0.00</td>
                                <td>Low</td>
                                <td>March</td>
                                <td>
                                    <div className="badge badge-pill badge-primary"><i className="ri-check-fill"></i></div>
                                </td>
                                <td>28/03/2020</td>
                                <td>
                                    <div className="badge badge-pill badge-success">pdf</div>
                                </td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TableList