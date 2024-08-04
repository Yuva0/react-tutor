import ClassComponent from "../content/ClassComponent";
import FunctionComponent from "../content/FunctionComponent";

interface ContentProviderProps {
  component?: string;
}

const ContentProvider = ({ component }: ContentProviderProps) => {
  const ContentFn = () => {
    switch (component) {
      case "class-component":
        return <ClassComponent />;
      case "function-component":
        return <FunctionComponent />;
      default:
        return null;
    }
  };

  return <ContentFn />;
};

export default ContentProvider;
