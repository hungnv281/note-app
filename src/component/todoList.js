import React from "react";

export default function TodoList({ data }) {

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>
              {item.id} {item.title}
            </b>
            <br /> {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
