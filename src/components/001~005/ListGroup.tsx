import { useState } from "react";
import styled from "styled-components";
interface Props {
  listItems: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
interface ListItemProps {
  $active: boolean; // 使用 $ 前缀来标识这个属性不会传递到 DOM 元素中
}
const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const ListItem = styled.li<ListItemProps>`
  padding: 6px 5px;
  border-radius: 5px;
  background-color: ${props => props.$active ? "lightblue" : "none"};
`;
function ListGroup({ listItems, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <>
      <h1>{heading}</h1>
      {/* nice */}
      {listItems.length === 0 && <p> No items to display </p>}
      <List>
        {listItems.map((item, index) => (
          <ListItem
            $active={selectedIndex === index}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default ListGroup;
