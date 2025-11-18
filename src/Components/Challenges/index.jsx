import react from "react";
import challangeimg from "../../assets/challange.png";

const Challanges = () => {
  return (
    <>
      <section className=" bg-[#1E2361] mt-16 py-20 px-20 rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="text-white flex flex-col ">
            <h1 className="text-[#EA372F] ">Challenges We Solve</h1>
            <p className=" text-3xl pt-4">
              Solving the Challenges of Global Expansion to Build Your
              High-Performing Global Team and Drive Lasting Transformation.
            </p>
            <ul className="py-7 space-y-3">
              <li>
                {" "}
                Fragmented Technology and Inefficient IT Support, Increasing
                Overheads
              </li>
              <li>
                Complex Financial Reporting and Compliance Across Geographies{" "}
              </li>
              <li>
                Rising Costs in Back-office, Data Entry and Logistics Operations
              </li>
              <li>Scaling Issues in Both Workforce and Process</li>
            </ul>
            <p>
              We transform these challenges into structured growth
              opportunities, using finance outsourcing, operations outsourcing,
              and digital transformation solutions tailored to your industry,
              focused on Talent & Cost optimization, Core Proposition, and
              Scalability for Growth.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={challangeimg}
              alt="domyimg"
              className=" w-auto  h-[550px] bg-cover bg-center "
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Challanges;
