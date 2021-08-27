import { useState, useEffect } from "react"
import Link from "next/link"
import classNames from "classnames"
import settings from "~/settings"

const Sidebar = () => {
    const [url, setUrl] = useState("");
    const { nav } = settings

    useEffect(() => {
        setUrl(location.pathname)
    }, [])

    return (
        <div className="iq-sidebar">
            <div className="iq-navbar-logo d-flex justify-content-between">
                <a href="index.html" className="header-logo">
                    <img src="/images/logo.png" className="img-fluid rounded" alt="" />
                    <span>FinDash</span>
                </a>
                <div className="iq-menu-bt align-self-center">
                    <div className="wrapper-menu">
                        <div className="main-circle"><i className="ri-menu-line"></i></div>
                        <div className="hover-circle"><i className="ri-close-fill"></i></div>
                    </div>
                </div>
            </div>
            <div id="sidebar-scrollbar" data-scrollbar="true" tabIndex={-1} style={{ overflow: "hidden", outline: "none" }}>
                <div className="scroll-content">
                    <nav className="iq-sidebar-menu">
                        <ul id="iq-sidebar-toggle" className="iq-menu">
                            {nav.map((item, i) => {
                                let childrens = item.childrens || []
                                let subItems = childrens.length > 0
                                let urls = `${url}`.split("/")
                                let select = item.url == `/${urls[1]}`
                              
                                return (
                                    <li className={select ? "active active-menu" : ""} key={i}>
                                        <Sidebar.Link href={!subItems ? item.url : ""}>
                                            <div>
                                                <a href={`#${item.key}`} className="iq-waves-effect" data-toggle="collapse" aria-expanded="true">
                                                    <span className="ripple rippleEffect"></span>
                                                    <i className={classNames("las", "la-home iq-arrow-left", item.icon)}></i>
                                                    <span>{item.title}</span>
                                                    {subItems && (<i className="ri-arrow-right-s-line iq-arrow-right"></i>)}
                                                </a>

                                                {subItems && (
                                                    <ul id={item.key} className={classNames("iq-submenu", "collapse", select ? "show" : "")} data-parent="#iq-sidebar-toggle">
                                                        {childrens.map((children, i) => (
                                                            <li key={i} className={`${item.url}${children.url}` == url ? "active active-menu" : ""}>
                                                                <Sidebar.Link href={`${item.url}${children.url}`}>
                                                                    <a>
                                                                        <i className={children.icon}></i>{children.title}
                                                                    </a>
                                                                </Sidebar.Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </Sidebar.Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

Sidebar.Link = ({ href, children }) => {
   
    if (!href) {
        return (
            <>{children}</>
        )
    }
    
    return (
        <Link href={href}>
            {children}
        </Link>
    )
}

export default Sidebar