import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Rating({ rating, onClick }) {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span onClick={() => onClick(i)}>
          {rating > i ? (
            <AiFillStar fontSize="20px" color="rgb(255, 208, 0)" />
          ) : (
            <AiOutlineStar fontSize="20px" />
          )}
        </span>
      ))}
    </>
  );
}

export default Rating;
