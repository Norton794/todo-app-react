import type { NextPage } from "next";
import axios from "axios";
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
  const [left, setLeft] = useState(0);
  const [showed, setShowed] = useState("");
  const [completed, setCompleted] = useState([]);
  const [active1, setActive1] = useState("active");
  const [active2, setActive2] = useState("");
  const [active3, setActive3] = useState("");

  function handleAll() {
    setShowed("");
    setActive1("active");
    setActive2("");
    setActive3("");
  }

  function handleActive() {
    setShowed("&done=false");
    setActive1("");
    setActive2("active");
    setActive3("");
  }

  function handleCompleted() {
    setShowed("&done=true");
    setActive1("");
    setActive2("");
    setActive3("active");
  }

  function handleAdd(event: any) {
    event.preventDefault();
    axios.post(URL, { description }).then((resp) => refresh());
  }

  function activesLeft() {
    axios
      .get(`${URL}?done=false`)
      .then((resp) => setLeft(resp.data.length))
      .catch((err) => console.error(err));
  }

  function refresh() {
    axios
      .get(`${URL}?sort=-createdAt${showed}`)
      .then((resp: any) => setList(resp.data))
      .then((resp) => console.log(list));

    activesLeft();
    getCompleted();
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

  function getCompleted() {
    axios
      .get(`${URL}?done=true`)
      .then((resp: any) => setCompleted(resp.data))
      .catch((err) => console.error(err));
  }

  function clearCompleted() {
    completed?.map((c: any) => {
      axios
        .delete(`${URL}/${c._id}`)
        .then((resp) => refresh())
        .catch((err) => console.error(err));
    });
  }

  useEffect(() => {
    refresh();
  }, [showed, completed]);

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
        <BottomList
          pending={left}
          handleActive={handleActive}
          handleCompleted={handleCompleted}
          handleAll={handleAll}
          clearCompleted={clearCompleted}
          active1={active1}
          active2={active2}
          active3={active3}
          setActive1={setActive1}
          setActive2={setActive2}
          setActive3={setActive3}
        />
      </Wrapper>
    </div>
  );
};

export default Home;
