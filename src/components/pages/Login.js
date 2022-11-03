import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section>
            <div className="login-container">
                <div className="login-content">
                    <form>
                        <div className="name-log">
                            <label for="name">Name</label>
                            <input placeholder="Full name" />
                        </div>

                        <div className="pass-log">
                            <label for="password">Password</label>
                            <input placeholder="Password" />
                        </div>
                    </form>
                    <button>Login</button>
                    <p>
                        If you don't have an account with us please
                        <Link to="Login">Signup</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Login;
