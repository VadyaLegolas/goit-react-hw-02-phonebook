import { Button, Div, ListItem } from './ContactElement.styled';

export const ContactElement = ({ id, name, number, onDeleteContact }) => {
  return (
    <ListItem>
      <Div>
        {name}: {number}
        <Button onClick={() => onDeleteContact(id)}>Delete</Button>
      </Div>
    </ListItem>
  );
};
