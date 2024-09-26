import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return <UserButton signInUrl="/" />;
};

export default Home;
