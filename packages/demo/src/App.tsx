import { EasyForm } from "@easyux/react-easyform";
import "./App.css";
import "./LoginForm.css";

function App() {
  const handleLogin = (formData: { email: string; password: string }) => {
    console.log("로그인 정보:", formData);
  };

  return (
    <EasyForm onSubmit={handleLogin}>
      {({ email, password, handleEmailChange, handlePasswordChange }) => (
        <div className="form-container">
          <div className="form-field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="form-button">
            Login
          </button>
        </div>
      )}
    </EasyForm>
  );
}

export default App;
