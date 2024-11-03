import BannerImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative">
      <div className="bg-[#9538E2]  text-center text-white pt-[118px]  pb-[268px] rounded-[32px] px-2 mb-36 sm:mb-56 lg:mb-[490px]">
        <h1 className="text-[56px] font-bold mb-6">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn rounded-[32px] text-[#9538E2]">Shop Now</button>
      </div>

      <div className="absolute -bottom-28 sm:-bottom-40 md:-bottom-56 lg:-bottom-80 2xl:-bottom-[500px] rounded-[32px] p-6 border mx-4 lg:mx-52">
        <img
          className="rounded-3xl object-cover"
          src={BannerImage}
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
