import {
  ShoppingBagIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { SalesData } from "../../constants/index";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cart-slice";
import { toast } from "react-toastify";

export const SalesDealsCard = () => {
  // Function to display star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<SolidStarIcon key={i} className="w-6 text-gray-300" />);
      } else {
        stars.push(<StarIcon key={i} className="w-6 text-gray-300" />);
      }
    }
    return stars;
  };
  const dispatch = useDispatch();
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
      <div className="flex justify-between items-center z-10  ">
        <h1 className="px-4 md:px-8 my-8 text-2xl md:text-4xl font-bold tracking-tight">
          Sales Deals
        </h1>
        <p className="flex items-center justify-center text-lg font-semibold cursor-pointer pr-8">
          Show More <ArrowRightIcon className="w-6 h-3" />
        </p>
      </div>
      <div className="p-1 md:p-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {SalesData.map((salesItem, index) => (
            <SwiperSlide key={salesItem.id}>
              <ul className="border border-gray-300 rounded-md p-4 relative ">
                <div className="relative">
                  <img
                    src={salesItem.img}
                    className="relative rounded-md w-full"
                    alt={salesItem.alt}
                  />
                  <span className="absolute top-2 left-0 bg-gray-300 w-24 h-9 text-black  p-2 clip-ribbon">
                    {salesItem.off} off
                  </span>
                </div>
                <span className="flex gap-1 py-2">
                  {renderStars(salesItem.rating)}
                </span>
                <li className="text-[14px] font-semibold">{salesItem.name}</li>
                <li>
                  <ul className="flex justify-between py-2">
                    <li>₦ {salesItem.price.toLocaleString()}</li>
                    <li className="line-through text-gray-300">
                      ${salesItem.formerPrice.toLocaleString()}
                    </li>
                  </ul>
                  {/* Add to cart button */}
                  <button
                    className="w-[100%] p-2 bg-gray-300 rounded-md flex justify-center gap-4 font-normal"
                    onClick={() => {
                      dispatch(
                        cartActions.addToCart({
                          id: salesItem.id,
                          name: salesItem.name,
                          price: salesItem.price,
                          imgUrl: salesItem.img,
                        })
                      );

                      notification();
                    }}
                  >
                    <ShoppingBagIcon className="w-6 text-black font-normal" />
                    Add to cart
                  </button>
                </li>
              </ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
