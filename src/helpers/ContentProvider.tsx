import { lazy, Suspense } from "react";
import Loading from "../content/Loading";
const UseMemo = lazy(() => {
  return Promise.all([
    import("../content/UseMemo"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const ClassComponent = lazy(() => {
  return Promise.all([
    import("../content/ClassComponent"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const FunctionComponent = lazy(() => {
  return Promise.all([
    import("../content/FunctionComponent"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const UseEffect = lazy(() => {
  return Promise.all([
    import("../content/UseEffect"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const UseState = lazy(() => {
  return Promise.all([
    import("../content/UseState"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const UseCallback = lazy(() => {
  return Promise.all([
    import("../content/UseCallback"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const UseRef = lazy(() => {
  return Promise.all([
    import("../content/UseRef"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const UseContext = lazy(() => {
  return Promise.all([
    import("../content/UseContext"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const Error = lazy(() => {
  return Promise.all([
    import("../pages/Error/Error"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const UnderstandingReact = lazy(() => {
  return Promise.all([
    import("../content/UnderstandingReact"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});
const JSX = lazy(() => {
  return Promise.all([
    import("../content/JSX"),
    new Promise((resolve) => setTimeout(resolve, 300)),
  ]).then(([moduleExports]) => moduleExports);
});

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
    <Suspense fallback={<Loading />}>
      <ContentFn />
    </Suspense>
  );
};

export default ContentProvider;
