import ImgTriangle from "../../assets/images/Triangle.png";

export default function () {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={ImgTriangle} className="w-10" alt="" />
      <div>Forbidden</div>
    </div>
  );
}
