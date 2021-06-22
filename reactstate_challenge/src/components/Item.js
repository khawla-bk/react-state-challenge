import React from "react";
import Item from "./TodoList";
const ListItem = (props) => {
  return (
    <div>
      {props.todos.map((el, i) => (
        <Item
          el={el}
          deleteItems={props.deleteItems} // delete={props.delete}
          completeItem={props.completeItem}
          // indice={el.key}
        />
      ))}
    </div>
  );
};
export default ListItem;
