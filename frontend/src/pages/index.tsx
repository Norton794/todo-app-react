import type { NextPage } from "next";
import axios from "axios";
import Image from "next/image";
import BottomList from "../components/BottomList";
import Form from "../components/Form";
import Header from "../components/Header";
import List from "../components/List";
import Wrapper from "../components/Wrapper";
import { useEffect, useState } from "react";
import { URL } from "../utils";

const Home: NextPage = () => {
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  function handleAdd(event: any) {
    event.preventDefault();
    axios.post(URL, { description }).then((resp) => refresh());
  }

  function refresh() {
    axios
      .get(`${URL}?sort=-createdAt`)
      .then((resp: any) => setList(resp.data))
      .then((resp) => console.log(list));
  }

  function handleRemove(_id: String) {
    axios.delete(`${URL}/${_id}`).then((resp) => refresh());
  }

  function handleDone(_id: String) {
    axios.put(`${URL}/${_id}`, { done: true }).then((resp) => refresh());
  }

  function handlePending(_id: String) {
    axios.put(`${URL}/${_id}`, { done: false }).then((resp) => refresh());
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <div>
      <Header />
      <Form
        description={description}
        setDescription={setDescription}
        add={handleAdd}
      />
      <Wrapper>
        {list &&
          list.map((item: any) => (
            <List
              key={item._id}
              text={item.description}
              todo={item}
              handleRemove={handleRemove}
              handleDone={handleDone}
              handlePending={handlePending}
            />
          ))}
        <BottomList pending={0} />
      </Wrapper>
    </div>
  );
};

export default Home;
