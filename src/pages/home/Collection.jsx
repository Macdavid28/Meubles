export const Collection = () => {
  return (
    <div className="relative block text-left">
      <img
        src="https://cdn-cms-assets.article.com/7wvGa6xhkAjvtxnAvh3127-f8d5da377ca1a3b5ae2218a10bd73b6d?w=1300&q=80&fm=webp&fit=max"
        alt=""
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute block top-14 md:top-14 p-2 md:p-8">
        <h1 className="text-2xl md:text-3xl  mt-10 md:text-[50px] text-white text-left font-cinzel">
          Your Furniture Says A Lot About You{" "}
        </h1>
        <p className="my-4 md:my-8 text-xl md:text-3xl text-white text-left font-cinzel">
          Pick from our variety of collections
        </p>
        <button className="my-4 p-3 rounded-md border border-gray-300 text-white block text-left text-lg md:text-xl font-cinzel">
          Explore Our Collection
        </button>
      </div>
    </div>
  );
};
