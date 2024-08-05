import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ContentContainer from "../../components/ContentContainer/ContentContainer";
import ContentProvider from "../../helpers/ContentProvider";

const Topic = () => {
  const { idTopic } = useParams();

  return (
    <ContentContainer>
      <ContentProvider component={idTopic} />
    </ContentContainer>
  );
};

export default Topic;