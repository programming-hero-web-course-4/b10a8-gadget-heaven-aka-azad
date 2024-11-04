const Banner = () => {
  return (
    <div className="relative bg-default-color rounded-b-3xl  pb-64 text-white lg:mx-8  mx-auto mb-0">
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-[1120px] pt-10 pb-6">
            <h1 className="text-6xl leading-tight font-bold">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-8 max-w-3xl mx-auto">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn h-auto hover:bg-default-hover  bg-white hover:text-white text-default-color rounded-full text-xl px-8 py-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="absolute w-full">
        <div className=" p-6 border-2 relative rounded-2xl max-w-[1120px]  mx-auto">
          <figure className="rounded-2xl object-center  overflow-hidden max-h-[610px] ">
            <img
              className="  h-full  w-full "
              src="logos-images/banner.jpg"
              alt=""
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;