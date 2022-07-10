import type { NextPage } from "next";
import Image from "next/image";
import BottomList from "../components/BottomList";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";

const Home: NextPage = () => {
  return (
    <div>
      <Header/>
      <Form/>
      <List text={`test`}/>
      <List text={`test`}/>
      <BottomList/>
    </div>
  );
};

export default Home;
