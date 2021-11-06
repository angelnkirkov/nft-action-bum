import Example from "../src/components/example/Example";
import Logo from "../src/components/Logo/Logo";
import Header from "../src/components/Header/Header";
import Avatar from "../src/components/Avatar/Avatar";
import User from "../src/components/User/User";
import Cards from "../src/components/Card/Cards";
import Trending from "../src/components/Trending/Trending";
import Auctions from "../src/components/Auctions/Auctions";
import Footer from "../src/components/Footer/Footer";
import How from "../src/components/How/How";
import Featured from "../src/components/Featured/Featured";

import TopCollector from "../src/components/TopCollectors/TopCollectors";
export default function Index(props) {
  const { card, livecard, how, item, collectoritems, items } = props;
  var cards = {
    name: "Clock",
    likes: 1100,
    user: { avatarUrl: "./images/clock.png", verified: true },
    mediaUrl: "./images/clockMedia.png",
    price: "~12.2",
    currency: "ETH",
  };
  const livecards = {
    name: "Clock",
    likes: 1100,
    user: { avatarUrl: "./images/clock.png", verified: true },
    mediaUrl: "./images/clockMedia.png",
    price: "~12.2",
    currency: "ETH",
    timeLeft: 518400000,
  };

  return (
    <>
      {/* <Logo /> */}
      <Header />
      <Featured items={[...item]} />
      {/* <Avatar url="./images/avatar.png" verified={true} /> */}
      {/* <User
        avatar="./images/avatar.png"
        name="fredrika_a"
        info="71 Items"
        size="40px"
        verified={true}
      />
      <Cards {...cards} /> */}
      <Trending cards={[...card]} />
      {/* <Cards {...livecards} /> */}

      <TopCollector collector={[...items]} />

      <How {...how} />

      <Auctions cards={[...livecard]} />
      <Footer />
    </>
  );
}
export const getStaticProps = async () => {
  return {
    props: {
      card: [
        {
          name: "Clock",
          likes: 1100,
          user: { avatarUrl: "./images/clock.png", verified: true },
          mediaUrl: "./images/clockMedia.png",
          price: "~12.2",
          currency: "ETH",
        },
        {
          name: "Riddles",
          likes: 1100,
          user: { avatarUrl: "./images/riddles.png", verified: true },
          mediaUrl: "./images/riddlesMedia.png",
          price: "~~10.1 ",
          currency: "ETH",
        },
        {
          name: "Wandering Flame",
          likes: 1100,
          user: { avatarUrl: "./images/wanderingFlame.png", verified: true },
          mediaUrl: "./images/wanderingFlameMedia.png",
          price: "~5.",
          currency: "ETH",
        },
        {
          name: "Glorious Curtain",
          likes: 1100,
          user: { avatarUrl: "./images/gloriousCurtain.png", verified: true },
          mediaUrl: "./images/gloriousCurtainMedia.png",
          price: "~0.1 ETH",
          currency: "ETH",
        },
      ],
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
      livecard: [
        {
          name: "Clock",
          likes: 1100,
          user: { avatarUrl: "./images/clock.png", verified: true },
          mediaUrl: "./images/clockMedia.png",
          price: "~12.2",
          currency: "ETH",
          timeLeft: 518400000,
        },
        {
          name: "Riddles",
          likes: 1100,
          user: { avatarUrl: "./images/riddles.png", verified: true },
          mediaUrl: "./images/riddlesMedia.png",
          price: "~~10.1 ",
          currency: "ETH",
          timeLeft: 518400000,
        },
        {
          name: "Wandering Flame",
          likes: 1100,
          user: { avatarUrl: "./images/wanderingFlame.png", verified: true },
          mediaUrl: "./images/wanderingFlameMedia.png",
          price: "~5.",
          currency: "ETH",
          timeLeft: 518400000,
        },
        {
          name: "Glorious Curtain",
          likes: 1100,
          user: { avatarUrl: "./images/gloriousCurtain.png", verified: true },
          mediaUrl: "./images/gloriousCurtainMedia.png",
          price: "~0.1 ETH",
          currency: "ETH",
          timeLeft: 518400000,
        },
      ],
      how: {
        description:
          "Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are  three things you'll need in place to open your account and start buying or selling NFTs on BUM.",
        title: "HOW IT WORKS",
        items: [
          {
            title: "Digital Currency",
            description:
              "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
          },
          {
            title: "Crypto Wallet",
            description:
              "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
          },
          {
            title: "BUM.",
            description:
              "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space. ",
          },
        ],
        links: "/howitworks",
      },
      item: [
        {
          images: "./images/breakfast.png",
          title: "Breakfast",
          rows: 2,
          cols: 3,
          href: "/about",
        },
        { images: "./images/burger.png", title: "Burger", href: "/about" },
        { images: "./images/camera.png", title: "Camera", href: "/about" },
        { images: "./images/coffee.png", title: "Coffee", href: "/about" },
        { images: "./images/hats.png", title: "Hats", href: "/about" },
        { images: "./images/honey.png", title: "Honey", href: "/about" },
        {
          images: "./images/busketball.png",
          title: "Busketball",
          href: "/about",
        },
      ],
      collectoritems: [
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
