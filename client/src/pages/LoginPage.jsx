import { useEffect, useState } from "react";
import loginIllustration from "../assets/login-illustration.svg";
import logo from "../assets/logo.svg";
import { FiChevronDown } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import Navbar from "../components/Navbar";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    financialYear: "",
    userName: "",
    password: "",
    captcha: "",
  });
  const [generatedCaptcha, setGeneratedCaptcha] = useState("");
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  // GENERATE CAPTCHA
  const generateCaptcha = () => {
    const captcha = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedCaptcha(captcha);
  };

  // PAGE LOAD CAPTCHA
  useEffect(() => {
    generateCaptcha();
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // CLEAR ERRORS
    setErrors((prev) => ({
      ...prev,
      [name]: "",
      general: "",
    }));
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.financialYear) {
      newErrors.financialYear = "Financial year is required";
    }
    // financial year format validation (e.g. 2024-2025)
    const fyRegex = /^\d{4}-\d{4}$/;
    if (formData.financialYear && !fyRegex.test(formData.financialYear)) {
      newErrors.financialYear = "Financial year must be in format YYYY-YYYY";
    }

    // financial year logical validation (e.g. 2024-2025 is valid but 2025-2024 is not)
    if (formData.financialYear && fyRegex.test(formData.financialYear)) {
      const years = formData.financialYear.split("-");
      if (parseInt(years[0]) >= parseInt(years[1])) {
        newErrors.financialYear = "Financial year is not valid";
      }
    }

    if (!formData.userName) {
      newErrors.userName = "Username is required";
    }

    if (formData.userName && formData.userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    if (formData.password && formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.captcha) {
      newErrors.captcha = "Captcha is required";
    }

    if (formData.captcha !== generatedCaptcha) {
      newErrors.captcha = "Invalid captcha";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // FORM SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      const payload = {
        financialYear: formData.financialYear,
        userName: formData.userName,
        password: formData.password,
      };

      const response = await loginUser(payload);
      if (response.status) {
        // SAVE USER DATA
        localStorage.setItem("user", JSON.stringify(response.data));
        setAlert({
          type: "success",
          message: response.message,
        });
        // REDIRECT
        navigate("/dashboard");
      } else {
        console.log(response);
        setAlert({
          type: "error",
          message: response.message || "Login failed",
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data) {
        const apiResponse = error.response.data;

        // FIELD VALIDATION ERRORS
        if (apiResponse.errors && Object.keys(apiResponse.errors).length > 0) {
          setErrors(apiResponse.errors);
        } else {
          // GLOBAL ERROR
          setAlert({
            type: "error",
            message: apiResponse.message,
          });
        }
      } else {
        setAlert({
          type: "error",
          message: "An unexpected error occurred. Please try again later.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[1500px] bg-[#f8f8f8] rounded-[18px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-2  gap-10 items-center p-10 lg:p-16">
            {/* LEFT SIDE */}
            <div>
              <img src={logo} alt="logo" className="w-[150px]" />

              <div className="flex justify-center mt-16">
                <img
                  src={loginIllustration}
                  alt="login"
                  className="w-full max-w-[560px]"
                />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="max-w-[650px] w-full mx-auto">
              {alert.message && (
                <div
                  className={`px-5 py-4 rounded-lg mb-6 text-lg border
                      ${
                        alert.type === "success"
                          ? "bg-green-100 border-green-300 text-green-700"
                          : ""
                      }
                      ${alert.type === "error" ? "bg-red-100 border-red-300 text-red-700" : ""}
                      ${
                        alert.type === "warning"
                          ? "bg-yellow-100 border-yellow-300 text-yellow-700"
                          : ""
                      }
                    `}
                >
                  {alert.message}
                </div>
              )}

              <h2 className="text-[clamp(20px,2vw,64px)] font-bold text-[#183554] text-center lg:text-left">
                Login Block Panchayat
              </h2>
              <form onSubmit={handleSubmit} className="mt-12 space-y-8">
                {/* FINANCIAL YEAR */}
                <div>
                  <label className="block text-[20px] font-medium text-[#3d3d3d] mb-3">
                    Financial Year
                  </label>

                  <div className="relative">
                    <select
                      name="financialYear"
                      value={formData.financialYear}
                      onChange={handleChange}
                      className="w-full h-[72px] border border-[#cfcfcf] rounded-[8px] bg-transparent px-6 text-[22px] appearance-none outline-none"
                    >
                      <option value="">Select Financial Year</option>

                      <option value="2024-2025">2024-2025</option>

                      <option value="2025-2026">2025-2026</option>
                    </select>

                    <FiChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-[32px] text-[#666]" />
                  </div>

                  {errors.financialYear && (
                    <p className="text-red-500 mt-2">{errors.financialYear}</p>
                  )}
                </div>

                {/* USERNAME */}
                <div>
                  <div className="flex border border-[#cfcfcf] rounded-[8px] overflow-hidden h-[72px]">
                    <div className="w-[72px] bg-[#b5b5b5] flex items-center justify-center">
                      <FaRegUser className="text-white text-[28px]" />
                    </div>

                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      placeholder="Username"
                      className="flex-1 px-5 text-[22px] bg-transparent outline-none"
                    />
                  </div>

                  {errors.userName && (
                    <p className="text-red-500 mt-2">{errors.userName}</p>
                  )}
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="flex border border-[#cfcfcf] rounded-[8px] overflow-hidden h-[72px]">
                    <div className="w-[72px] bg-[#b5b5b5] flex items-center justify-center">
                      <FiKey className="text-white text-[28px]" />
                    </div>

                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="flex-1 px-5 text-[22px] bg-transparent outline-none"
                    />
                  </div>

                  {errors.password && (
                    <p className="text-red-500 mt-2">{errors.password}</p>
                  )}
                </div>

                {/* CAPTCHA */}
                <div>
                  <label className="block text-[20px] font-medium text-[#3d3d3d] mb-3">
                    Captcha
                  </label>

                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    placeholder="Type Captcha"
                    className="w-full h-[72px] border border-[#cfcfcf] rounded-[8px] bg-transparent px-6 text-[22px] outline-none"
                  />

                  {errors.captcha && (
                    <p className="text-red-500 mt-2">{errors.captcha}</p>
                  )}
                </div>

                {/* CAPTCHA BOX */}
                <div className="flex items-center gap-5">
                  <div className="w-[230px] h-[72px] bg-[#ece5da] border border-[#cfcfcf] rounded-[6px] flex items-center justify-center text-[34px] tracking-[10px] font-semibold text-[#333]">
                    {generatedCaptcha}
                  </div>

                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-[#3f33b6] text-[24px] font-medium"
                  >
                    Get Captcha
                  </button>
                </div>

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="w-full h-[78px] rounded-[12px] bg-[#cc802e] text-white text-[28px] font-semibold mt-8 transition hover:bg-[#b86d1d]"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
