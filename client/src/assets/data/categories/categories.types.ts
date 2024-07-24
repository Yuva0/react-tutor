export type CategoriesProps = {
  [key: string]: {
    title: string;
    description: string;
    topics?: {
      [key: string]: {
        title: string;
        description: string;
      };
    };
  };
};
