import { lazy, Suspense } from "react";
import { StyledMain } from "../components/StyledInternalComponents/StyledInternalComponents";
import JSX from "../content/JSX";
const ClassComponent = lazy(() => import("../content/ClassComponent"));
const FunctionComponent = lazy(() => import("../content/FunctionComponent"));
const UseEffect = lazy(() => import("../content/UseEffect"));
const UseState = lazy(() => import("../content/UseState"));
const UseMemo = lazy(() => import("../content/UseMemo"));
const UseCallback = lazy(() => import("../content/UseCallback"));
const UseRef = lazy(() => import("../content/UseRef"));
const UseContext = lazy(() => import("../content/UseContext"));
const Error = lazy(() => import("../pages/Error/Error"));
const UnderstandingReact = lazy(() => import("../content/UnderstandingReact"));

interface ContentProviderProps {
  topic?: string;
  category?: string;
}

const ContentProvider = ({ topic, category }: ContentProviderProps) => {
  const ContentFn = () => {
    switch (category) {
      case "guides":
        switch (topic) {
          case "understanding-react":
            return <UnderstandingReact />;
          case "jsx":
            return <JSX />;
          default:
            return <Error />;
        }
      case "components":
        switch (topic) {
          case "function-component":
            return <FunctionComponent />;
          case "class-component":
            return <ClassComponent />;
          default:
            return <Error />;
        }
      case "hooks":
        switch (topic) {
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
          default:
            return <Error />;
        }
      default:
        return <Error />;
    }
  };

  return (
    <Suspense fallback={<StyledMain>Loading</StyledMain>}>
      <ContentFn />
    </Suspense>
  );
};

export default ContentProvider;
