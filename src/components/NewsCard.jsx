import React from "react";
import { Card } from "antd";
import { Button, Flex } from "antd";

const { Meta } = Card;

const NewsCard = ({
  image,
  link,
  publishedAt,
  sourceName,
  title,
  _id,
  shortLink,
}) => (
  <Card
    hoverable
    style={{ width: 300 }}
    cover={
      <img
        alt="example"
        width={40}
        height={190}
        src={
          image !== ""
            ? image
            : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
        }
      />
    }
  >
    <Meta title={title} description={shortLink} />
    <div className="mt-4">
      <Button type="primary">
        <a href={shortLink} target="_blank" rel="noopener noreferrer">
          Read New...
        </a>
      </Button>
    </div>
  </Card>
);

export default NewsCard;
