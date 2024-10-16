// import {} from "@heroicons/react/24/outline";
import { HomeIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import chairIcon from "../../assets/chair.svg";
export const Services = () => {
  return (
    <div className="mt-32 text-center">
      <h1 className="text-3xl text-gray-500 uppercase font-cinzel">Our Services</h1>
      <div className="mt-3 border-t-2 border-black w-[130px] mx-auto rounded-full"></div>
      <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 p-4 mt-5 lg:flex">
        <div className="flex flex-col items-center md:justify-center shadow-md bg-[#F8F7F4] rounded-md py-4 ">
          <HomeIcon className="w-14 md:w-20 text-black  p-4 cursor-pointer" />
          <h1 className=" text-2xl md:text-xl text-black py-4 mr-8 font-bold">
            Interior Design
          </h1>
          <p className="text-sm md:w-[85%] text-center w-[300px] px-4  text-black">
            At Meubles we offer exquisite interior designs from experts to best
            suit our clients' interest.
          </p>
        </div>
        <div className="flex flex-col items-center md:justify-center shadow-md bg-[#F8F7F4] rounded-md py-4 ">
          <img src={chairIcon} className="md:h-20  p-4 cursor-pointer" alt="" />
          <h1 className=" text-2xl md:text-xl text-black py-4 mr-8 font-bold">
            Furniture Setup
          </h1>
          <p className="text-sm w-[70%] text-center text-black">
            At Meubles we offer installment and arrangement for our clients
            based on their preference.
          </p>
        </div>
        <div className="flex flex-col items-center md:justify-center  shadow-md bg-[#F8F7F4] rounded-md py-4 ">
          <HomeModernIcon className="md:w-20 w-14 text-black  p-4 cursor-pointer" />
          <h1 className=" text-2xl md:text-xl text-black py-4 mr-8 font-bold">
            Outdoor Design
          </h1>
          <p className="text-sm w-[70%] text-center text-black">
            At Meubles we offer elegant exterior designs according to our
            clients' taste and preference.
          </p>
        </div>
      </div>
    </div>
  );
};
