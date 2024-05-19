import React from "react";
import ChapterList from "@/components/ChapterList";
import Cta from "@/components/Cta";
import StoryInternal from "@/components/StoryInternal";
import Divider from "@/components/illustrations/divider";
import { client } from "@/lib/contentful/client";

const getInternalStory = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: "story",
      "fields.slug": slug,
    });
    return response.items[0];
  } catch (err) {
    console.error(err);
  }
};

const Story = async ({ params }) => {
  const story = await getInternalStory(params.slug);

  return (
    <>
      <StoryInternal story={story} />
      <Divider />
      <ChapterList />
      <Cta background="bg-secondary" btnTxt="Get in touch" />
    </>
  );
};

export default Story;
