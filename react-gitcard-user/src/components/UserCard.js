import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Image src={user.avatar_url} width="250" />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <a href={user.html_url} className="username">
            {user.login}
          </a>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {user.followers} followers
        </a>
      </Card.Content>
      <Card.Description>{user.bio}</Card.Description>
    </Card>
  );
};

export default UserCard;
