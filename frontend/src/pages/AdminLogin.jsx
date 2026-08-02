import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function AdminLogin() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://fresher-s-day-2026.onrender.com/api/admin/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        },
      );

      const result = await res.json();

      if (result.success) {
        toast.success(result.message);

        localStorage.setItem("admin", "true");

        navigate("/dashboard");
      } else {
        toast.error(result.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Server Error");
    }
  };
  return (
    <>
      <section className="min-h-screen bg-(--background) flex justify-center items-center">
        <div className="bg-(--surface) h-100 w-100 flex flex-col justify-start items-center gap-10 border-2 border-(--border) rounded-lg">
          <div className="mt-10">
            <h1 className="text-2xl text-(--primary) font-semibold">
              Admin Login
            </h1>

            
          </div>
          <form
            className="flex flex-col justify-center items-center w-full gap-5"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center items-start">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                className="w-90 border-2 border-(--border) rounded-lg h-8 p-2"
              />
            </div>
            <div className="flex flex-col justify-center items-start">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="w-90 border-2 border-(--border) rounded-lg h-8 p-2"
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <button
                className="bg-(--primary) rounded-lg text-(--background) p-5 w-20 h-5 flex items-center justify-center hover:bg-(--primary-hover) transition-all"
                type="submit"
              >
                Login
              </button>
              <p className="mt-5 p-2 text-center">After clicking Login please wait a moment to process. Do not reload or close the page.</p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
