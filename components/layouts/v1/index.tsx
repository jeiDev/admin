import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import { PropsLayoutI } from "~/interfaces";

const LayoutV1 = (props: PropsLayoutI) => {
 
    return (
        <>
            <Header {...props}/>
            <Sidebar />
            <main id="content-page" className="content-page">
                <div className="container-fluid">
                    {props.children}
                </div>
            </main>
            <Footer {...props}/>
        </>
    )
}

export default LayoutV1;
