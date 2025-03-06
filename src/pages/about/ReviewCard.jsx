import "swiper/swiper-bundle.css";
import guy from "../../assets/guy.jpg";
import man from "../../assets/man.jpg";
import lady from "../../assets/lady.jpg";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";

export const ReviewCard = () => {
  const ReviewData = [
    {
      id: 1,
      title: "Best Quality",
      name: "Nicholas Smith",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque? vel harum fugit optio.",
      image: guy,
      rating: 4,
      date: "15 January 2025",
    },
    {
      id: 2,
      title: "Feels Like Home",
      name: "Melanie Jones",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque?  provident vel harum fugit optio.",
      image: lady,
      rating: 5,
      date: "14 January 2025",
    },
    {
      id: 3,
      title: "Elegance And Beauty",
      name: "Matthew Allen",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque?  provident vel harum fugit optio.",
      image: man,
      rating: 3,
      date: "12 January 2025",
    },
    {
      id: 4,
      title: "Very Comfortable",
      name: "Ella Parker",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque?  provident vel harum fugit optio.",
      image: lady,
      rating: 4,
      date: "10 January 2025",
    },
    {
      id: 5,
      title: "Exquisite Style",
      name: "Trevor Black",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque?  provident vel harum fugit optio.",
      image: man,
      rating: 4,
      date: "20 January 2025",
    },
    {
      id: 6,
      title: "Nice Designs",
      name: "Dante Anderson",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque?  provident vel harum fugit optio.",
      image: guy,
      rating: 5,
      date: "18 January 2025",
    },
  ];
  // Function to display star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<SolidStarIcon key={i} className="w-4 text-black" />);
      } else {
        stars.push(<StarIcon key={i} className="w-4 text-black" />);
      }
    }
    return stars;
  };
  return (
    <div>
      <h1 className="my-4 leading-6 text-2xl md:text-4xl block text-center font-semibold">
        What People Said About Meubles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-5">
        {ReviewData.map((reviewItem) => (
          <div
            key={reviewItem.id}
            className="border border-gray-500 rounded-md p-8"
          >
            <h1 className="my-2 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              {reviewItem.title}
            </h1>
            <p className="flex items-center gap-2">
              {renderStars(reviewItem.rating)}
            </p>
            <p className="my-2 line-clamp-3 text-sm leading-6 text-gray-600">
              {" "}
              {reviewItem.review}{" "}
            </p>
            <img
              src={reviewItem.image}
              className="h-20 w-16 rounded-md"
              alt=""
            />
            <span className="flex gap-4 mt-4">
              <p className="text-xs line-clamp-6 leading-6">
                {reviewItem.date}
              </p>
              -
              <p className="text-xs line-clamp-6 leading-6">
                {reviewItem.name}
              </p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
