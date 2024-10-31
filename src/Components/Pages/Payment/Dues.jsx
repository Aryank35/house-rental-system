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
    <div className="min-h-screen bg-gray-50 py-5">
      <Link to="/" className="w-fit">
        <button className="text-lg font-semibold ml-5 mt-3 hover:text-red-600 underline">
          Back
        </button>
      </Link>

      <h1 className="font-bold text-3xl text-center underline text-blue-700 my-5">
        Dues
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 px-5">
        {dueList.map((item) => (
          <DueBox
            key={item.dop}
            month={item.month}
            dop={item.dop}
            stats={item.stats}
            buttonText={item.buttonText}
          />
        ))}
      </div>
    </div>
  );
};

export default Dues;
