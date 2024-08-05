import ClassComponent from "../content/ClassComponent";
import FunctionComponent from "../content/FunctionComponent";
import UseEffect from "../content/UseEffect";
import UseState from "../content/UseState";

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
      case "use-state":
        return <UseState />;
      case "use-effect":
        return <UseEffect />; 
      default:
        return null;
    }
  };

  return <ContentFn />;
};

export default ContentProvider;
