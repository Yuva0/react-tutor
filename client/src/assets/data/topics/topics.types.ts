export type TopicsProps = {
  [key: string]: {
    title: string;
    description?: string;
    category: string;
    content?: {
      [key: string]: any;
    }
  };
}