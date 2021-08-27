import Header from "./header"
import Main from "./inbox"
import SendEmail from "./send"

const MainEmail = () => {

    return (
        <div className="iq-card" style={{flex: "1 1 auto", height: "calc(100% - 30px)"}}>
                     <div className="iq-card-body p-0">
                        <div>
                           <Header />
                           <Main />
                           <SendEmail />
                        </div>
                     </div>
                  </div>
    )
}

export default MainEmail