import Link from "next/link";
import React from "react";
import styled from "styled-components";

import {
  CardDiv,
  CardImg,
  CardAbout,
  Heading,
  SubHeading,
  Amenities,
  Price,
  Fair,
  Button,
  Page,
  Features,
} from "./cardComponents";

function card() {
  let data = [
    {
      Heading: "Deluxe Room",
      SubHeading: "Mumbai",
      Image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      Features: ["2 Guests", "1 Bedroom", "1 Bed", "1 Bath"],
      Amenities: ["Wifi", "Breakfast", "Air Conditioning", "Kitchen"],
      Price: "₹ 1,500 / night",
      Fair: "Cancellation fexibility available",
    },
  ];
  return (
    <Page>
      {data.map((item, index) => (
        <CardDiv key={index}>
          <CardImg className="img" src={item.Image} />
          <CardAbout>
            <Heading className="heading">{item.Heading}</Heading>
            <SubHeading>{item.SubHeading}</SubHeading>
            <Features>
              {item.Features.map((item, index) => (
                <p key={index}>{item} &nbsp;&nbsp;&nbsp;</p>
              ))}
            </Features>

            <Amenities>
              <SubHeading style={{ margin: "0rem" }}>Amenities</SubHeading>
              <Features style={{ padding: "0rem" }}>
                {item.Amenities.map((Aitem, Aindex) => (
                  <Button key={Aindex} style={{ borderRadius: "2rem" }}>
                    {Aitem}
                  </Button>
                ))}
              </Features>
            </Amenities>
            <Price>
              <Price style={{ flexDirection: "column" }}>
                Price
                <Fair>{item.Price}</Fair>
              </Price>
              <Button
                bgcolor="#f9a826"
                style={{
                  padding: "0.75rem 1.75rem",
                  width: "20%",
                  border: "none",
                  color: "white",
                }}
              >
                visit
              </Button>
              <Link
                href={{
                  pathname: "/RoomsDetail",
                  query: {
                    data: JSON.stringify(item),
                  },
                }}
              >
                <Button
                  style={{
                    padding: "0.75rem 1.75rem",
                    width: "20%",
                    border: "1px solid #f9a826",
                    color: "#f9a826",
                  }}
                >
                  ShowMore
                </Button>
              </Link>
            </Price>
          </CardAbout>
        </CardDiv>
      ))}
    </Page>
  );
}

export default card;