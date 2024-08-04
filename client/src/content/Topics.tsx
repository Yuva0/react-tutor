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
      "what-is-jsx": {
        title: "JSX?",
      },
      "what-is-virtual-dom": {
        title: "Virtual DOM?",
      },
    },
  },
  components: {
    title: "Components",
    content: {
      "function-component": {
        title: "Function Components",
      },
      "class-component": {
        title: "Class Components",
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