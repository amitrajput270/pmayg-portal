import {
  FaUsers,
  FaHome,
  FaMoneyBillWave,
  FaClipboardCheck,
  FaBell,
} from "react-icons/fa";

import { FiLogOut } from "react-icons/fi";
import logo from "@assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const cards = [
    {
      title: "Total Beneficiaries",
      value: "12,450",
      icon: <FaUsers />,
      bg: "bg-[#e8f1ff]",
    },
    {
      title: "Approved Houses",
      value: "8,320",
      icon: <FaHome />,
      bg: "bg-[#eaf7ec]",
    },
    {
      title: "FTO Payments",
      value: "₹ 4.8 Cr",
      icon: <FaMoneyBillWave />,
      bg: "bg-[#fff5e5]",
    },
    {
      title: "Pending Verification",
      value: "1,245",
      icon: <FaClipboardCheck />,
      bg: "bg-[#fdecec]",
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-[1500px] mx-auto px-6 py-4 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-5">
            <img src={logo} alt="logo" className="w-[120px]" />

            <div>
              <h1 className="text-[28px] font-bold text-[#183554]">
                PMAY-G Dashboard
              </h1>

              <p className="text-gray-500">
                Welcome back,{" "}
                <span className="font-semibold">
                  {user?.username || "Admin"}
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-5">
            <button className="relative text-[28px] text-[#183554]">
              <FaBell />

              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></span>
            </button>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-[#cc802e] hover:bg-[#b86d1d] text-white px-5 py-3 rounded-lg text-lg font-medium transition"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-[1500px] mx-auto px-6 py-10">
        {/* TOP STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} rounded-[24px] p-8 shadow-sm`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-lg">{card.title}</p>

                  <h2 className="text-[42px] font-bold mt-3 text-[#183554]">
                    {card.value}
                  </h2>
                </div>

                <div className="text-[48px] text-[#183554]">{card.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* TABLE SECTION */}
        <div className="bg-white rounded-[24px] shadow-sm mt-10 overflow-hidden">
          <div className="px-8 py-6 border-b">
            <h2 className="text-[30px] font-bold text-[#183554]">
              Recent Beneficiaries
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#f8f8f8]">
                <tr>
                  <th className="text-left px-8 py-5 text-lg font-semibold">
                    ID
                  </th>

                  <th className="text-left px-8 py-5 text-lg font-semibold">
                    Name
                  </th>

                  <th className="text-left px-8 py-5 text-lg font-semibold">
                    Village
                  </th>
                  <th className="text-left px-8 py-5 text-lg font-semibold">
                    Status
                  </th>
                  <th className="text-left px-8 py-5 text-lg font-semibold">
                    Payment
                  </th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item} className="border-b">
                    <td className="px-8 py-6">#{item}</td>

                    <td className="px-8 py-6">Beneficiary {item}</td>

                    <td className="px-8 py-6">Amroha</td>

                    <td className="px-8 py-6">
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">
                        Approved
                      </span>
                    </td>
                    <td className="px-8 py-6">₹ 1,20,000</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
