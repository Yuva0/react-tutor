import ClassComponent from "../content/ClassComponent";
import FunctionComponent from "../content/FunctionComponent";
import UseEffect from "../content/UseEffect";
import UseState from "../content/UseState";
import UseMemo from "../content/UseMemo";
import UseCallback from "../content/UseCallback";
import UseRef from "../content/UseRef";
import UseContext from "../content/UseContext";
import Error from "../pages/Error/Error";
import UnderstandingReact from "../content/UnderstandingReact";

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
      case "use-memo":
        return <UseMemo />;
      case "use-callback":
        return <UseCallback />;
      case "use-ref":
        return <UseRef />;
      case "use-context":
        return <UseContext />;
      case "understanding-react":
        return <UnderstandingReact />;
      default:
        return <Error />;
    }
  };

  return <ContentFn />;
};

export default ContentProvider;
