import ImgQuestionMark from "../../assets/images/QuestionMark.png";

export default function () {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <img src={ImgQuestionMark} className="w-10" alt="" />
      <div>Page Not Found</div>
    </div>
  );
}
