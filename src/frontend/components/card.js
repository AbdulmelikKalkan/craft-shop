import { Card, Col, Row, Text } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function CardLayer(props) {
  const onPress = (e) => {
    console.log(e.target.id);
    Router.push("product/" + e.target.id);
  };
  return (
    <Card
      id={props.id}
      isPressable
      isHoverable
      variant="flat"
      css={{ w: "100%" }}
      onPress={onPress}
    >
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={props.src}
          objectFit="cover"
          width="100%"
          height={400}
          alt={props.title}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          justifyItems: "flex-start",
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text b>{props.title}</Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Text>{props.price}</Text>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
