export const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Our Modern & Exquisite Gallery
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Explore our curated collection of exquisite furniture pieces that
            blend style, comfort, and functionality. From elegant sofas to
            handcrafted dining tables, each item is thoughtfully designed to
            transform your living space into a haven of luxury and warmth.
            Whether you prefer minimalist modern or classic charm, our gallery
            showcases unique designs that inspire and elevate your home.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://i.postimg.cc/TYDWwTxJ/galleryone.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://i.postimg.cc/0N2Yrhc5/gallerytwo.png"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://i.postimg.cc/t4zdq9dm/gallerythree.png"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src="https://i.postimg.cc/sf8hsvk2/galleryfour.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://i.postimg.cc/XqZB9bC3/galleryfive.png"
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src="https://i.postimg.cc/PJBp4RWD/gallerysix.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
