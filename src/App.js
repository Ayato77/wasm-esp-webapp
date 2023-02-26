import './App.css';

function App() {
  return (
    <div className="formContainer">
      <form>
        <h1>Login Form</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>E-mail address</label>
            <input type={"text"} placeholder={"E-mail address"} name={"mailadress"}/>
          </div>
          <div className="formField">
            <label>Password</label>
            <input type={"text"} placeholder={"Password"} name={"password"}/>
          </div>
        </div>
        <button className={"submitButton"}>Login</button>
      </form>
    </div>
  );
}

export default App;
