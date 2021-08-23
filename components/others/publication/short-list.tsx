import { useState } from "react"
import { ListPropsI, statusPublication } from "~/interfaces"
import { comas } from "~/helpers/code/number.helper"

const PublicationShortList = ({ title, items }: ListPropsI) => {
    const [publications, setPublications] = useState(items)

    const handlerClick = (status: statusPublication, index: number) => {
        let items = publications.map((item, i) => {
            if (index == i) item.status = status
            return item
        });

        setPublications(items)
    }

    return (
        <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
            <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                    <h4 className="card-title">{title}</h4>
                </div>
            </div>
            <div className="iq-card-body">
                <ul className="suggestions-lists m-0 p-0">
                    {publications.map((publication, i) => (
                        <li className="d-flex mb-4 align-items-center" key={i}>
                            <div className="profile-icon iq-bg-primary">
                                <img style={{ height: "100%", width: "100%", borderRadius: "50%", objectFit: "cover" }} src={publication.image} alt={`${publication.title} ${publication.description}`} />
                            </div>
                            <div className="media-support-info ml-3">
                                <h6>{publication.title}</h6>
                                <p className="mb-0">{publication.description}</p>
                            </div>
                            {publication.status == 0 && (
                                <>
                                    <button type="button" className="btn btn-danger mr-3" onClick={() => handlerClick(2, i)}>Cancelar</button>
                                    <button type="button" className="btn btn-success" onClick={() => handlerClick(1, i)}>Aprobar</button>
                                </>
                            )}

                            {publication.status == 1 && (<span className="badge badge-pill badge-success">Aprobado</span>)}
                            {publication.status == 2 && (<span className="badge badge-pill badge-danger">Declinada</span>)}

                            <div className="media-support-amount ml-3">
                                <h6><span className="text-secondary">$</span><b> {comas(publication.price)}</b></h6>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PublicationShortList