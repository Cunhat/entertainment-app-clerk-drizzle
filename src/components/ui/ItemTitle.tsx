import React from "react";
import Image from "next/image";
import { Heading } from "./Heading";
import { Body } from "./Body";

export const ItemTitle: React.FC<{ type: "movie" | "tvSeries" }> = ({
  type,
}) => {
  const getIcon = () => {
    let result: string;
    switch (type) {
      case "movie":
        result = "/svg/icon-category-movie.svg";
        break;
      default:
        result = "/svg/icon-category-tv.png";
        break;
    }
    return <Image src={result} alt="type" width={12} height={12} />;
  };

  const translateType = () => {
    let result: string;
    switch (type) {
      case "movie":
        result = "Movie";
        break;
      default:
        result = "TV Series";
        break;
    }
    return result;
  };
  return (
    <>
      <div className="flex gap-2">
        <Body size="md">2019</Body>
        <Body size="md">•</Body>
        <div className="flex gap-1 items-center">
          {getIcon()}
          <Body size="md">{translateType()}</Body>
        </div>
        <Body size="md">•</Body>
        <Body size="md">PG</Body>
      </div>
      <Heading size="sm">Trending</Heading>
    </>
  );
};
