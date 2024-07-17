export type TopicsProps = {
  [key: string]: {
    title: string;
    description: string;
    subtopics?: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
};
