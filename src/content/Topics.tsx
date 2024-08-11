interface TopicsProps {
  [key: string]: {
    title: string;
    content: {
      [key: string]: {
        title: string;
      };
    };
  };
}

const Topics: TopicsProps = {
  guides: {
    title: "Guides",
    content: {
      "understanding-react": {
        title: "Understanding React",
      },
      "jsx": {
        title: "JSX",
      },
      "virtual-dom": {
        title: "Virtual DOM",
      },
    },
  },
  components: {
    title: "Components",
    content: {
      "function-component": {
        title: "Function Component",
      },
      "class-component": {
        title: "Class Component",
      },
    },
  },
  hooks: {
    title: "Hooks",
    content: {
      "use-state": {
        title: "useState",
      },
      "use-effect": {
        title: "useEffect",
      },
      "use-memo": {
        title: "useMemo",
      },
      "use-callback": {
        title: "useCallback",
      },
      "use-ref": {
        title: "useRef",
      },
      "use-context": {
        title: "useContext",
      },
    },
  },
};

export default Topics;