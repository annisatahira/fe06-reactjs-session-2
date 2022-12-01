import { useEffect, useState } from "react";
import Card from "./components/Card";

function Home() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("hello");
  const [data, setData] = useState([]);

  // Lifesycle dari react

  // useEffect
  // dijalankan pertama kali ketika component diterapkan
  // mounting
  useEffect(() => {
    console.log("hello react!");

    const abortController = new AbortController();
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/", {
        signal: abortController.signal,
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
          // simpan di state data
          setData(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 1000);

    // unmounting
    return () => abortController.abort();
  }, []);

  // updating
  // dijalankan ketika mounting
  // dan ketika state count berubah
  useEffect(() => {
    console.log("updating");
  }, [count]);

  useEffect(() => {
    console.log("update greeting");
  }, [greeting]);

  // unmounting
  // ketika component tidak lagi digunakan atau dilepas
  // useEffect(() => {
  //   return () => {
  //     console.log("unmounting!");
  //   };
  // });

  const changeCount = (event) => {
    // console.log(event.target.textContent);
    if (count >= 10) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const changeGreeting = () => {
    setGreeting("hai");
  };

  return (
    <div>
      <h1>Home Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={changeCount}>ADD 1</button>
      <hr />
      <h2>Greeting: {greeting}</h2>
      <button onClick={changeGreeting}>Ubah Sapaan</button>
      <p>Belajar ReactJS bersama FE6</p>
      <div>
        {data.map((item) => {
          return <Card key={item.id} title={item.title} urutan={item.id} />;
        })}
      </div>
    </div>
  );
}

export default Home;
