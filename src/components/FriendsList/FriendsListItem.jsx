import PropTypes from "prop-types";

import {Item,Status,Avatar,Name } from "./FriendsList.styled";

export const FriendsListItem = ({id,isOnline,avatar,name})=>{
    return(
        <Item key={id}>
            <Status status = {isOnline}>{isOnline}</Status>
            <Avatar src={avatar} alt='User avatar' width='48'/>
            <Name>{name}</Name>
        </Item>
    )
}

FriendsListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };