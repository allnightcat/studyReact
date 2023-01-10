import React from "react";
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <p>게시글 {id}</p>
    </div>
  );
};

export default Article;
