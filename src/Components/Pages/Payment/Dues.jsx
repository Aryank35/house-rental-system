import DueBox from "../../DueBox";
import { Link } from "react-router-dom";

const Dues = () => {
  const dueList = [
    {
      month: "May",
      dop: "10/05/2024",
      stats: "unpaid",
      buttonText: "Pay",
    },
    {
      month: "April",
      dop: "10/04/2024",
      stats: "paid",
      buttonText: "view receipt",
    },
    {
      month: "March",
      dop: "15/03/2024",
      stats: "paid",
      buttonText: "view receipt",
    },
    {
      month: "February",
      dop: "13/02/2024",
      stats: "paid",
      buttonText: "view receipt",
    },
    {
      month: "January",
      dop: "10/01/2024",
      stats: "paid",
      buttonText: "view receipt",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-400 py-5">
      {/* Back Button */}
      <Link to="/" className="w-fit">
        <button className="text-lg font-semibold ml-5 mt-3 text-white hover:text-red-300 transition duration-300 underline">
          Back
        </button>
      </Link>

      {/* Title */}
      <h1 className="font-bold text-4xl text-center underline text-white my-8 drop-shadow-lg">
        Dues
      </h1>

      {/* Dues Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        {dueList.map((item) => (
          <DueBox
            key={item.dop}
            month={item.month}
            dop={item.dop}
            stats={item.stats}
            buttonText={item.buttonText}
            className="shadow-lg rounded-lg bg-white p-5 transition transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Dues;
