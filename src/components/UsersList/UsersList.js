import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListItemText } from "@material-ui/core";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const UsersList = ({ users }) => {
  return (
    <List>
      {users.map(({ name, sha1, picture }) => (
        <ListItem key={sha1} button>
          <ListItemAvatar>
            <Avatar alt={`User Picture ${sha1}`} src={picture.thumbnail} />
          </ListItemAvatar>
          <ListItemText id={sha1} primary={`${name.title} ${name.first} ${name.last}`} />
        </ListItem>
      ))}
    </List>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      sha1: PropTypes.string,
      name: PropTypes.shape({
        title: PropTypes.string,
        first: PropTypes.string,
        last: PropTypes.string,
      }),
      login: PropTypes.shape({
        uuid: PropTypes.string,
      }),
      email: PropTypes.string,
      picture: PropTypes.shape({
        thumbnail: PropTypes.string,
        large: PropTypes.string,
        medium: PropTypes.string,
      }),
      registered: PropTypes.shape({
        date: PropTypes.string,
        age: PropTypes.number,
      }),
    }),
  ).isRequired,
};

export default UsersList;
