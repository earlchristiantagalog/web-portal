"use client";
import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: replace with your real login logic
    console.log({ username, password });
  };

  return (
    <main
      className="login-maroon position-relative min-vh-100 d-flex align-items-center justify-content-center px-3 overflow-hidden"
      style={{ background: "var(--maroon)" }}
    >
      <style>{`
        .login-maroon {
          --maroon: #800000;
          --maroon-dark: #660000;
        }
        .login-maroon .btn-maroon {
          --bs-btn-color: #fff;
          --bs-btn-bg: var(--maroon);
          --bs-btn-border-color: var(--maroon);
          --bs-btn-hover-color: #fff;
          --bs-btn-hover-bg: var(--maroon-dark);
          --bs-btn-hover-border-color: var(--maroon-dark);
          --bs-btn-active-color: #fff;
          --bs-btn-active-bg: var(--maroon-dark);
          --bs-btn-active-border-color: var(--maroon-dark);
        }
        .login-maroon .link-maroon { color: var(--maroon); }
        .login-maroon .link-maroon:hover { color: var(--maroon-dark); }
        .login-maroon .form-control:focus {
          border-color: var(--maroon);
          box-shadow: 0 0 0 .25rem rgba(128, 0, 0, .2);
        }
        .login-maroon .form-check-input:checked {
          background-color: var(--maroon);
          border-color: var(--maroon);
        }
        .login-maroon .form-check-input:focus {
          border-color: var(--maroon);
          box-shadow: 0 0 0 .25rem rgba(128, 0, 0, .2);
        }
      `}</style>
      {/* Transparent background image (put your file in /public) */}
      <div
        aria-hidden="true"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      {/* Maroon overlay: lower the last number for a lighter tint */}
      <div
        aria-hidden="true"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ background: "rgba(128, 0, 0, 0.8)" }}
      ></div>

      <div
        className="card border-0 shadow rounded-4 w-100 position-relative"
        style={{ maxWidth: 420 }}
      >
        <div className="card-body p-4 p-md-5">
          {/* Header */}
          <div className="text-center">
            <img src="/next.svg" width={110} alt="Logo" className="mb-3" />
            <h4 className="fw-bold mb-1">MNHS WEB PORTAL</h4>
          </div>
          <hr className="mb-3" />
          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                autoComplete="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <label htmlFor="username">Username</label>
            </div>

            {/* Password with show/hide */}
            <div className="input-group mb-3">
              <div className="form-floating flex-grow-1">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              <button
                type="button"
                className="btn btn-outline-secondary d-inline-flex align-items-center"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Remember + forgot */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember"
                />
                <label className="form-check-label small" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a href="#" className="small text-decoration-none link-maroon">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-maroon w-100 py-2 d-inline-flex align-items-center justify-content-center gap-2"
            >
              <LogIn size={18} />
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
