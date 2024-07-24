import React, { useState } from "react";
import topics from "../../assets/data/topics/topics.json";
import { makeFirstLetterCapital } from "../../helpers/helpers";
import { TopicsProps } from "../../assets/data/topics/topics.types";
import { useParams, useNavigate } from "react-router-dom";
import { Text } from "stelios";

import Body from "../../components/Body/Body";

const TOPICS: TopicsProps = topics;

const Topic = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [topic, setTopic] = useState(params.idTopic);
  const [category, setCategory] = useState(params.idCategory);

  const [introduction, setIntroduction] = useState(null);

  React.useEffect(() => {
    setTopic(params.idTopic);
    setCategory(params.idCategory);

    if (!params.idTopic || !params.idCategory) return;
    try {
      setIntroduction(TOPICS[params.idTopic].content?.introduction.content);
    } catch (e) {
      navigate("/404-not-found");
    }
  }, [params.idTopic, params.idCategory, navigate]);

  return (
    <Body>
      <div style={{ padding: "1rem", textAlign:"justify", display:"flex", flexDirection: "column", gap:"0.5rem" }}>
        {topic && (
          <Text variant="h2" size="small">
            {makeFirstLetterCapital(topic)}
          </Text>
        )}
        <Text variant="paragraph">{introduction}</Text>
      </div>
    </Body>
  );
};

export default Topic;
