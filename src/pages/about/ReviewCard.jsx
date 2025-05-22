import "swiper/swiper-bundle.css";
import guy from "@/assets/guy.jpg";
import man from "@/assets/man.jpg";
import lady from "@/assets/lady.jpg";
import { StarIcon as SolidStarIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/outline";

export const ReviewCard = () => {
  const reviewData = [
    {
      id: 1,
      title: "CEO Of Quarasing",
      name: "Nicholas Smith",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque? vel harum fugit optio.",
      image: guy,
      rating: 4,
      date: "15 January 2025",
    },
    {
      id: 2,
      title: "Interior Decorator at Homely",
      name: "Melanie Jones",
      review:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam esse libero alias repellendus voluptatibus cumque? vel harum fugit optio.",
      image: lady,
      rating: 5,
      date: "14 January 2025",
    },
  ];
  // Function to display star icons based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<SolidStarIcon key={i} className="w-4 text-white" />);
      } else {
        stars.push(<StarIcon key={i} className="w-4 text-white" />);
      }
    }
    return stars;
  };
  return (
    <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-4xl font-medium title-font text-black mb-12 text-center">
          Testimonials
        </h1>
        <div className="flex flex-wrap -m-4">
          {reviewData.map((review) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-black p-8 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="block h-14 w-14 p-2 bg-white text-black  rounded-full mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="leading-relaxed mb-4">{review.review}</p>
                <div className="flex items-center mb-4 "> {renderStars(review.rating)}</div>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={review.image}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {review.name}
                    </span>
                    <span className="text-white text-sm">{review.title}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
