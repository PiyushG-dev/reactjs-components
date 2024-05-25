"use client";
import React, { useContext } from "react";
import NewsCard from "./NewsCard";
import { fetchTopHeadlines } from "@/utils";
import breaking from "@/public/assets/breaking.jpeg";
import { ComboboxDemo } from "./ui/combobox";
import { NewsContext } from "@/context/NewsContext";
import DatePickerDemo from "./ui/datepicker";

const Feed = () => {
  const { articles } = useContext(NewsContext);
  // const { articles } = await fetchTopHeadlines("in");

  // shortening the headline if needed
  const handleTruncate = (headline) => {
    const words = headline.split(" ");
    const truncatedHeadline =
      words.length > 6 ? words.slice(0, 6).join(" ") + "..." : headline;
    return truncatedHeadline;
  };

  return (
    <section className="w-full">
      <div className="screen-max-width">
        <div className="flex gap-3 items-end">
          <ComboboxDemo />
          <DatePickerDemo />
        </div>

        <div className=" grid grid-cols-3 gap-3 lg:px-5 py-5">
          {articles.map((item, i) => {
            return (
              <NewsCard
                key={i}
                title={handleTruncate(item.title)}
                url={item.urlToImage}
                backupImg={breaking}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Feed;
