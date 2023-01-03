import ImgExclamationMark from "../../assets/images/Exclamation-Mark.png";

export default function () {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={ImgExclamationMark} className="w-10" alt="" />
      <div>Internet Server Error</div>
    </div>
  );
}
