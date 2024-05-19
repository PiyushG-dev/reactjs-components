import React from "react";
import { client } from "@/lib/contentful/client";
import Heading from "@/components/Heading";
import PortfolioList from "@/components/PortfolioList";
import Cta from "@/components/Cta";

const getStories = async () => {
  try {
    const response = await client.getEntries({ content_type: "story" });
    return response.items;
  } catch (err) {
    console.error(err);
  }
};

const Portfolio = async () => {
  const stories = await getStories();

  return (
    <>
      <Heading />
      <PortfolioList stories={stories} />
      <Cta background="bg-secondary" btnTxt="Get in touch" />
    </>
  );
};

export default Portfolio;
