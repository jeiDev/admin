const SidebarEmail = () => {
    const Li = SidebarEmail.li;

    return (
        <div className="iq-card">
            <div className="iq-card-body">
                <div className="">
                    <div className="iq-email-list">
                        <button className="btn btn-primary btn-lg btn-block mb-3 font-size-16 p-3" data-target="#compose-email-popup" data-toggle="modal"><i className="ri-send-plane-line mr-2"></i>New Message</button>
                        <div className="iq-email-ui nav flex-column nav-pills">
                            <Li className="nav-link active" role="tab" data-toggle="pill" href="#mail-inbox"><a href="index.html"><i className="ri-mail-line"></i>Bandeja de entradas<span className="badge badge-primary ml-2">4</span></a></Li>
                            <Li className="nav-link" role="tab" data-toggle="pill" href="#mail-starred" aria-selected="false"><a href="#"><i className="ri-star-line"></i>Favorito</a></Li>
                            <Li className="nav-link" role="tab" data-toggle="pill" href="#mail-trash"><a href="#"><i className="ri-delete-bin-line"></i>Basura</a></Li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

SidebarEmail.li = (props: any) => {
    const {className, role, href, children} = props
    const dataToggle = props["data-toggle"]

    return (
        //@ts-ignore
        <li className={className} role={role} data-toggle={dataToggle} href={href}>{children}</li>
    )
}

export default SidebarEmail