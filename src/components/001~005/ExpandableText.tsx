import { useState } from "react";
interface Props {
  maxChars?: number;
}
const ExpandableText = ({ maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsa ipsum laboriosam?";
  if (text.length <= maxChars) {
    return <p>{text}</p>;
  }
  return (
    <>
      <p>
        {isExpanded ? text : text.substring(0, maxChars) + "..."}
        <button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      </p>
    </>
  );
};

export default ExpandableText;
