import { star } from "../assets/icons/index";

const PropularProductCard = (imgURL, name, price) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
      </div>
    </div>
  );
};

export default PropularProductCard;
