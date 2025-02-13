import { useState } from "react";
import { IoHeart } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    console.log(status); //这里仍然是旧的值
    onClick();
  };

  if (status) return <IoHeart color="pink" size={30} onClick={toggle} />;
  return <IoMdHeartEmpty size={30} onClick={toggle} />;
};

export default Like;
