import React from "react";
import account from "../Images/account.png";

class Login extends React.Component {

    render() {
        return(
            <div className = "section account">
                <img src={account} className="section-icon"/>
            </div>
        );
    }
}

export default Login;