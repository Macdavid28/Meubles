// import { HomeModernIcon } from "@heroicons/react/24/solid";
import rooms from "../../data/rooms.json";
import { useParams, Link } from "react-router-dom";
import { ShoppingBagIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";
import { useState } from "react";
export const RoomDetails = () => {
  const [toggleImage, setToggleImage] = useState(true);
  const [toggleSnippetOne, setToggleSnippetOne] = useState(false);
  const [toggleSnippetTwo, setToggleSnippetTwo] = useState(false);
  const [toggleSnippetThree, setToggleSnippetThree] = useState(false);
  const [toggleSnippetFour, setToggleSnippetFour] = useState(false);
  const [toggleSnippetFive, setToggleSnippetFive] = useState(false);
  const toggleImageFunction = () => {
    setToggleImage(true);
    setToggleSnippetOne(false);
    setToggleSnippetTwo(false);
    setToggleSnippetThree(false);
    setToggleSnippetFour(false);
    setToggleSnippetFive(false);
  };
  const toggleSnippetOneFunction = () => {
    setToggleImage(false);
    setToggleSnippetOne(true);
    setToggleSnippetTwo(false);
    setToggleSnippetThree(false);
    setToggleSnippetFour(false);
    setToggleSnippetFive(false);
  };
  const toggleSnippetTwoFunction = () => {
    setToggleImage(false);
    setToggleSnippetOne(false);
    setToggleSnippetTwo(true);
    setToggleSnippetThree(false);
    setToggleSnippetFour(false);
    setToggleSnippetFive(false);
  };
  const toggleSnippetThreeFunction = () => {
    setToggleImage(false);
    setToggleSnippetOne(false);
    setToggleSnippetTwo(false);
    setToggleSnippetThree(true);
    setToggleSnippetFour(false);
    setToggleSnippetFive(false);
  };
  const toggleSnippetFourFunction = () => {
    setToggleImage(false);
    setToggleSnippetOne(false);
    setToggleSnippetTwo(false);
    setToggleSnippetThree(false);
    setToggleSnippetFour(true);
    setToggleSnippetFive(false);
  };
  const toggleSnippetFiveFunction = () => {
    setToggleImage(false);
    setToggleSnippetOne(false);
    setToggleSnippetTwo(false);
    setToggleSnippetThree(false);
    setToggleSnippetFour(false);
    setToggleSnippetFive(true);
  };
  const dispatch = useDispatch();
  const { name } = useParams();
  const roomList = rooms.rooms;
  const room = roomList.find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
  if (!room) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="block text-center md:p-32 py-32">
          <h1 className="text-gray-500 text-md md:text-xl p-3">
            Product Not Found
          </h1>
          <Link to="/">
            <button className="w-64 h-12 mx-auto bg-gray-500 rounded-md text-black text-sm font-normal uppercase hover:bg-gray-400 hover:text-black">
              Back to homepage
            </button>
          </Link>
        </div>
      </div>
    );
  }

  const notification = () => {
    toast.success("Added to cart", {
      autoClose: 500,
      pauseOnHover: false,
      pauseOnFocusLoss: false,
      hideProgressBar: true,
    });
  };
  return (
    <div>
      <section class="text-gray-700 body-font overflow-hidden">
        <div className="flex items-center gap-1 px-8 pt-8 text-xs font-semibold">
          <Link to="/">Home</Link>
          <ChevronRightIcon className="w-3" />
          Rooms
          <ChevronRightIcon className="w-3" />
          {room.name}
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            {toggleImage && (
              <img
                alt={room.name}
                class="lg:w-1/2 w-full 320:w-[1/2] md:h-auto h-[22rem] object-cover object-center rounded"
                src={room.imgUrl}
              />
            )}
            {toggleSnippetOne && (
              <img
                alt={room.name}
                class="lg:w-1/2 w-full 320:w-[1/2] md:h-auto h-[22rem] object-cover object-center rounded"
                src={room.snippetOne}
              />
            )}
            {toggleSnippetTwo && (
              <img
                alt={room.name}
                class="lg:w-1/2 w-full 320:w-[1/2] md:h-auto h-[22rem] object-cover object-center rounded"
                src={room.snippetTwo}
              />
            )}
            {toggleSnippetThree && (
              <img
                alt={room.name}
                class="lg:w-1/2 w-full 320:w-[1/2] md:h-auto h-[22rem] object-cover object-center rounded"
                src={room.snippetThree}
              />
            )}
            {toggleSnippetFour && (
              <img
                alt={room.name}
                class="lg:w-1/2 w-full 320:w-[1/2] md:h-auto h-[22rem] object-cover object-center rounded"
                src={room.snippetFour}
              />
            )}
            {toggleSnippetFive && (
              <img
                alt={room.name}
                class="lg:w-1/2 w-full 320:w-[1/2] md:h-auto h-[22rem] object-cover object-center rounded"
                src={room.snippetFive}
              />
            )}
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                BUNDLE NAME
              </h2>
              <h1 class="text-black text-3xl title-font font-medium mb-1">
                {room.name}
              </h1>
              <div class="flex my-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-black"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </span>
              </div>
              <p class="leading-relaxed">
                Fam locavore custom woodshop credenza. Mid-century mixtape
                vibes, turmeric throw pillows, sriracha red ottoman, modular
                taximy shelving, chia-seed finish coffee tables, microdosing
                accent lamps, tilde-shaped DIY bookshelves. XOXO fam indxgo
                velvet sectionals, juiceramps lounge chairs, cornhole game
                tables, raw denim cushions, forage woodgrain credenza brooklyn.
              </p>
              <div className="flex items-center gap-4 mt-4">
                {
                  <img
                    src={room.imgUrl}
                    alt=""
                    className="h-10 w-10 rounded-full border border-black p-1 cursor-pointer"
                    onClick={toggleImageFunction}
                  />
                }
                <img
                  src={room.snippetOne}
                  alt=""
                  className="h-10 w-10 rounded-full border border-black p-1 cursor-pointer"
                  onClick={toggleSnippetOneFunction}
                />
                <img
                  src={room.snippetTwo}
                  alt=""
                  className="h-10 w-10 rounded-full border border-black p-1 cursor-pointer"
                  onClick={toggleSnippetTwoFunction}
                />
                <img
                  src={room.snippetThree}
                  alt=""
                  className="h-10 w-10 rounded-full border border-black p-1 cursor-pointer"
                  onClick={toggleSnippetThreeFunction}
                />
                <img
                  src={room.snippetFour}
                  alt=""
                  className="h-10 w-10 rounded-full border border-black p-1 cursor-pointer"
                  onClick={toggleSnippetFourFunction}
                />
                <img
                  src={room.snippetFive}
                  alt=""
                  className="h-10 w-10 rounded-full border border-black p-1 cursor-pointer"
                  onClick={toggleSnippetFiveFunction}
                />
              </div>
              <div class="flex mt-2 items-center pb-5 border-b-2 border-gray-800 mb-5"></div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-black">
                  ₦ {room.price.toLocaleString().toLocaleString()}
                </span>
                <button
                  class="flex ml-auto items-center gap-2 text-white bg-gray-700 border-0 py-2 px-6 320:px-4 focus:outline-none hover:bg-gray-600 rounded"
                  onClick={() => {
                    dispatch(
                      cartActions.addToCart({
                        id: room.id,
                        name: room.name,
                        imgUrl: room.imgUrl,
                        price: room.price.toLocaleString().toLocaleString(),
                      })
                    );
                    notification();
                  }}
                >
                  Add to cart
                  <ShoppingBagIcon className="w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
