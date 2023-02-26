import './App.css';
import {useState} from "react";

function App() {
  const initialValues = {mailAddress:"", password: ""};
  const [formValues, setFormValues] = useState();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
    //console.log(formValues)
  }

  return (
    <div className="formContainer">
      <form>
        <h1>Login Form</h1>
        <hr />
        <div className="uiForm">
          <div className="formField">
            <label>E-mail address</label>
            <input
                type={"text"}
                placeholder={"E-mail address"}
                name={"mailAdress"}
                onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="formField">
            <label>Password</label>
            <input
                type={"text"}
                placeholder={"Password"}
                name={"password"}
                onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button className={"submitButton"}>Login</button>
      </form>
    </div>
  );
}

export default App;
