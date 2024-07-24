export type TopicsProps = {
  [key: string]: {
    title: string;
    description?: string;
    category: string;
    content?: {
      introduction?: any;
    }
  };
}