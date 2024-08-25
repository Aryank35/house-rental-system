
import DueBox from '../DueBox'
import { Link } from "react-router-dom";

const Dues = () => {
    const dueList = [
        {
            month: "May",
            dop: "10/05/2024",
            stats: "unpaid",
            boxText: "Pay",
        },
        {
            month: "April",
            dop: "10/04/2024",
            stats: "paid",
            boxText: "view reciept",
        },
        {
            month: "March",
            dop: "15/03/2024",
            stats: "paid",
            boxText: "view reciept",
        },
        {
            month: "February",
            dop: "13/02/2024",
            stats: "paid",
            boxText: "view reciept",
        },
        {
            month: "January",
            dop: "10/01/2024",
            stats: "paid",
            boxText: "view reciept",
        },
        
    ];
  return (
    <div>
        <Link to="/" className="w-fit">
          <button className=" text-black text-lg font-semibold ml-5 mt-3 hover:text-red-600 underline">
            Back
          </button>
        </Link>
        <h1 className='my-1 font-bold text-3xl text-center underline'>Dues</h1>
        <div>
            {dueList.map((item) => (
                <DueBox key={item.dop} month = {item.month} dop={item.dop} stats={item.stats} boxText={item.boxText}/>
            ))}
        </div>

    </div> 
  )
}

export default Dues