import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginContext from '../Context/LoginContext';
import UserContext from '../Context/UserContext';

function Login() {
    const userdata = useContext(UserContext)
    const logindata = useContext(LoginContext);

    const navigate = useNavigate();
    return (
        <section className="vh-100 mt-5 pt-3" >

            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://img.freepik.com/free-vector/focused-tiny-people-reading-books_74855-5836.jpg?w=996&t=st=1687904166~exp=1687904766~hmac=fda6a1fed5b9e26d1e653959ef90b376a16c8d2d600dffb105c9077814c8994a"
                            className="img-fluid" alt="Sample image" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>

                            {/* <!-- Email input --> */}
                            <div className="form-outline mb-3">
                                <input type="text" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a username" onChange={(event) => userdata.setUsername(event.target.value)} />
                                <label className="form-label" For="form3Example3">Username</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" For="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" For="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div className="d-flex ms-3" >
                                <button onClick={() => {
                                    logindata.setLibrarianVisible(true);
                                    navigate("/portal/dashboard")
                                }} type="button" className="btn   mt-2"
                                    style={{ paddingRight: "2.5rem" }}>
                                    <div className="card" style={{ width: "8rem", height: "8rem" }}>
                                        <img className="card-img-top pb-5" src="https://img.freepik.com/premium-vector/female-librarian-sitting-library-counter_11197-317.jpg" alt="librarian image" />
                                    </div><p>Login as a Librarian</p>
                                </button>
                                <button onClick={() => {
                                    logindata.setLibrarianVisible(false);
                                    navigate("/portal/book")
                                }} type="button" className="btn   mt-2"
                                    style={{ paddingRight: "2.5rem" }}>
                                    <div className="card" style={{ width: "8rem", height: "8rem" }}>
                                        <img className="card-img-top pb-5" src="https://cdn.vectorstock.com/i/preview-1x/24/96/picking-a-book-in-a-library-isolated-cartoon-vector-45362496.jpg" alt="reader image" />
                                    </div><p>Login as a Reader</p>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >

        </section >
    )
}

export default Login
