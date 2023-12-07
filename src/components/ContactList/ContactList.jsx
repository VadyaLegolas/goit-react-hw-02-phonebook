export const ContactList = ({contacts, onDeleteContact}) => {
  return (
    <ul>
      {contacts.map(({id,name,number}) => {
        return (
          <li key={id}>
            {name}: {number}
            <button onClick={()=>onDeleteContact(id)}>Удалить</button>
          </li>
        );
      })}
    </ul>
  );
};
