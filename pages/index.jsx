import Example from "../src/components/example/Example";

import TopCollector from "../src/components/TopCollectors/TopCollectors";
export default function Index(props) {
  const { items } = props;

  return <TopCollector collector={[...items]} />;
}
export const getStaticProps = async () => {
  return {
    props: {
      items: [
        {
          name: "terika77",
          nftsCount: "134 Items",
          avatar: "./images/avatar.png",
          verified: true,
          id: 1,
        },
        {
          name: "brendan_1",
          nftsCount: "98 Items",
          avatar: "./images/avatar.png",
          verified: false,
          id: 2,
        },
        {
          name: "damiann",
          nftsCount: "97 Items",
          avatar: "./images/avatar.png",
          verified: false,
          id: 3,
        },
        {
          name: "terika77",
          nftsCount: "134 Items",
          avatar: "./images/avatar.png",
          verified: false,

          id: 1,
        },
        {
          name: "brendan_1",
          nftsCount: "98 Items",
          avatar: "./images/avatar.png",
          verified: true,
          id: 2,
        },
        {
          name: "damiann",
          nftsCount: "97 Items",
          avatar: "./images/avatar.png",
          verified: false,
          id: 3,
        },
        {
          name: "terika77",
          nftsCount: "134 Items",
          avatar: "./images/avatar.png",
          verified: false,
          id: 1,
        },
        {
          name: "brendan_1",
          nftsCount: "98 Items",
          avatar: "./images/avatar.png",
          verified: false,
          id: 2,
        },
        {
          name: "damiann",
          nftsCount: "97 Items",
          avatar: "./images/avatar.png",
          verified: false,
          id: 3,
        },
        {
          name: "terika77",
          nftsCount: "134 Items",
          avatar: "./images/avatar.png",
          verified: true,
          id: 1,
        },
        {
          name: "brendan_1",
          nftsCount: "98 Items",
          avatar: "./images/avatar.png",
          verified: false,
          id: 2,
        },
        {
          name: "damiann",
          nftsCount: "97 Items",
          avatar: "./images/avatar.png",
          verified: false,
          id: 3,
        },
      ],
    },
  };
};
