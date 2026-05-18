import { useEffect, useState } from "react";

import loginIllustration from "../assets/login-illustration.svg";
import logo from "../assets/logo.svg";

import { FiChevronDown } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { FiKey } from "react-icons/fi";

import Navbar from "../components/Navbar";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    financialYear: "",
    username: "",
    password: "",
    captcha: "",
  });

  const [generatedCaptcha, setGeneratedCaptcha] = useState("");

  const [errors, setErrors] = useState({});

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
  };

  // VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.financialYear) {
      newErrors.financialYear = "Financial year is required";
    }

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("Login Data:", formData);

    alert("Login Successful");

    // API CALL HERE
    /*
      axios.post('/login', formData)
    */

    // RESET FORM
    setFormData({
      financialYear: "",
      username: "",
      password: "",
      captcha: "",
    });

    // GENERATE NEW CAPTCHA
    generateCaptcha();
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-[#f5f5f5] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-[1500px] bg-[#f8f8f8] rounded-[18px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <div className="grid lg:grid-cols-2 gap-10 items-center p-10 lg:p-16">
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
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Username"
                      className="flex-1 px-5 text-[22px] bg-transparent outline-none"
                    />
                  </div>

                  {errors.username && (
                    <p className="text-red-500 mt-2">{errors.username}</p>
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
