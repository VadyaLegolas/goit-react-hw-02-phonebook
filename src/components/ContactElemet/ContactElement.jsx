export const ContactElement = ({id, name, number, onDeleteContact}) => {
  return (
    <li >
      {name}: {number}
      <button onClick={() => onDeleteContact(id)}>Удалить</button>
    </li>
  );
};
