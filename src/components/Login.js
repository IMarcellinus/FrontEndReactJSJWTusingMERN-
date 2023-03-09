import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState();
  const navigate = useNavigate();

    const Auth = async (e) => {
      e.preventDefault();
      try {
        await axios.post("http://localhost:5000/login", {
          email: email,
          password: password,
        });
        navigate("/dashboard");
      } catch (err) {
        if (err.response) {
          setMsg(err.response.data.msg);
        }
      }
    };

  return (
    <section className="hero is-fullheight has-background-grey-light is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
                <p className="has-text-center">{msg}</p>
              <form className="box" onSubmit={Auth}>
                <div className="field mt-5">
                  <label className="label">Email</label>
                  <div className="controls">
                    <input
                      type="email"
                      className="input"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input
                      type="text"
                      className="input"
                      placeholder="*********"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-sucess is-fullwidth">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
