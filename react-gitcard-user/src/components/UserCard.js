import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserCard = props => {
  return (
    <Card>
      <Image src={props.follower.avatar_url} width="80" />
      <Card.Content>
        <Card.Meta>
          <a href={props.follower.html_url}>{props.follower.login}</a>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default UserCard;
