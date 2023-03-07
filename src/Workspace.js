import axios from "./api/axios";

const Workspace = (props) => {
    function logout(){
        props.setAuthenticated(false);
    }

    return(
        <>
            <div>
                <h1>You are logged in!</h1>
            </div>
            <div>
                <button className={"logoutButton"} onClick={logout}>Log Out</button>
            </div>
        </>
    )
};

export default Workspace;