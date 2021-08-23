
import Head from "next/head"

const signIn = () => {

    return (
        <>
            <Head><title>SignIn</title></Head>
            <section className="sign-in-page">
                <div id="container-inside">
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                    <div className="cube"></div>
                </div>
                <div className="container p-0">
                    <div className="row no-gutters height-self-center">
                        <div className="col-sm-12 align-self-center bg-primary rounded">
                            <div className="row m-0">
                                <div className="col-md-5 bg-white sign-in-page-data">
                                    <div className="sign-in-from">
                                        <h1 className="mb-0 text-center">Sign in</h1>
                                        <p className="text-center text-dark">Enter your email address and password to access admin panel.</p>
                                        <form className="mt-4">
                                            <div className="form-group">
                                                <label >Email address</label>
                                                <input type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Enter email" />
                                            </div>
                                            <div className="form-group">
                                                <label >Password</label>
                                                <a href="#" className="float-right">Forgot password?</a>
                                                <input type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                                            </div>
                                            <div className="d-inline-block w-100">
                                                <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label" >Remember Me</label>
                                                </div>
                                            </div>
                                            <div className="sign-info text-center">
                                                <button type="submit" className="btn btn-primary d-block w-100 mb-2">Sign in</button>
                                                <span className="text-dark dark-color d-inline-block line-height-2">Don't have an account? <a href="#">Sign up</a></span>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-md-7 text-center sign-in-page-image">
                                    <div className="sign-in-detail text-white">
                                        <a className="sign-in-logo mb-5" href="#">
                                            <img src="/images/logo-full.png" className="img-fluid" alt="logo" />
                                        </a>
                                        <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1" data-items-mobile-sm="1" data-margin="0">
                                            <div className="item">
                                                <img src="/images/login/1.png" className="img-fluid mb-4" alt="logo" />
                                                <h4 className="mb-1 text-white">Find new friends</h4>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            </div>
                                            <div className="item">
                                                <img src="/images/login/1.png" className="img-fluid mb-4" alt="logo" />
                                                <h4 className="mb-1 text-white">Connect with the world</h4>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            </div>
                                            <div className="item">
                                                <img src="/images/login/1.png" className="img-fluid mb-4" alt="logo" />
                                                <h4 className="mb-1 text-white">Create new events</h4>
                                                <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default signIn