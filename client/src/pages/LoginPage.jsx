import { useEffect, useState } from "react";
import loginIllustration from "@assets/images/login-illustration.svg";
import logo from "@assets/images/logo.svg";
import { FiChevronDown } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiKey } from "react-icons/fi";
import Navbar from "@components/Navbar";
import { loginUser } from "@services/authService";
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
      <section className="min-h-screen flex items-center justify-center px-4 py-10">
        {/* MAIN CONTAINER */}
        <div className="w-full max-w-[976px] min-h-[586px] bg-white rounded-[8px] shadow-[0_0_24px_rgba(0,0,0,0.19)] overflow-hidden flex flex-col lg:flex-row">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 relative bg-white flex flex-col">
            {/* LOGO */}
            <div className="pt-8 pl-8">
              <img src={logo} alt="logo" className="w-[112px]" />
            </div>

            {/* ILLUSTRATION */}
            <div className="flex-1 flex items-center justify-center px-8 pb-8">
              <img
                src={loginIllustration}
                alt="login"
                className="w-full max-w-[407px] object-contain"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-8 py-10">
            <div className="w-full max-w-[416px]">
              {/* ALERT */}
              {alert.message && (
                <div
                  className={`px-4 py-3 rounded-md mb-6 text-sm border
                ${
                  alert.type === "success"
                    ? "bg-green-100 border-green-300 text-green-700"
                    : ""
                }
                ${
                  alert.type === "error"
                    ? "bg-red-100 border-red-300 text-red-700"
                    : ""
                }
              `}
                >
                  {alert.message}
                </div>
              )}

              {/* TITLE */}
              <h2 className="text-center text-[28px] leading-[38px] font-extrabold tracking-[1px] text-[#1F384C]">
                Login Block Panchayat
              </h2>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-[36px] space-y-6">
                {/* FINANCIAL YEAR */}
                <div>
                  <label className="block text-[14px] font-medium text-[#48536B] mb-1">
                    Financial Year
                  </label>

                  <div className="relative">
                    <select
                      name="financialYear"
                      value={formData.financialYear}
                      onChange={handleChange}
                      className="w-full h-[44px] border border-[#CECECE] rounded-[4px] px-[22px] text-[14px] text-[#333333] appearance-none outline-none bg-white"
                    >
                      <option value="">Select Financial Year</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2025-2026">2025-2026</option>
                    </select>

                    <FiChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[22px] text-[#666]" />
                  </div>

                  {errors.financialYear && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.financialYear}
                    </p>
                  )}
                </div>

                {/* USERNAME */}
                <div>
                  <div className="h-[44px] border border-[#CECECE] rounded-[4px] overflow-hidden flex">
                    <div className="w-[44px] bg-[#AAAAAA] flex items-center justify-center">
                      <FaRegUser className="text-white text-[18px]" />
                    </div>

                    <input
                      type="text"
                      name="userName"
                      value={formData.userName}
                      onChange={handleChange}
                      placeholder="Username"
                      className="flex-1 px-4 text-[14px] outline-none"
                    />
                  </div>

                  {errors.userName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.userName}
                    </p>
                  )}
                </div>

                {/* PASSWORD */}
                <div>
                  <div className="h-[44px] border border-[#CECECE] rounded-[4px] overflow-hidden flex">
                    <div className="w-[44px] bg-[#AAAAAA] flex items-center justify-center">
                      <FiKey className="text-white text-[18px]" />
                    </div>

                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password"
                      className="flex-1 px-4 text-[14px] outline-none"
                    />
                  </div>

                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* CAPTCHA */}
                <div>
                  <label className="block text-[14px] font-medium text-[#48536B] mb-1">
                    Captcha
                  </label>

                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleChange}
                    placeholder="Type Captcha"
                    className="w-full h-[44px] border border-[#CECECE] rounded-[4px] px-[22px] text-[14px] outline-none"
                  />

                  {errors.captcha && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.captcha}
                    </p>
                  )}
                </div>

                {/* CAPTCHA ROW */}
                <div className="flex items-center gap-3">
                  <div className="w-[155px] h-[44px] bg-[#FFFAEF] border border-[#CECECE] rounded-[4px] flex items-center justify-center">
                    <span className="italic font-semibold tracking-[6px] text-[14px] text-[#333333]">
                      {generatedCaptcha}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="text-[14px] font-medium text-[#3D2CB6] hover:underline"
                  >
                    Get Captcha
                  </button>
                </div>

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-[44px] bg-[#3D2CB6] rounded-[8px] text-white text-[14px] font-semibold hover:bg-[#2f2196] transition disabled:opacity-70"
                >
                  {loading ? "Please wait..." : "Login"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
