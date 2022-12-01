import { useEffect, useState } from "react";
import Card from "./components/Card";

function Home() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("hello");
  const [data, setData] = useState([]);

  const changeCount = (event) => {
    // console.log(event.target.textContent);
    if (count == 10) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const changeGreeting = () => {
    setGreeting("hai");
  };

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
  // ketika pertama di terapkan componentnya
  // dan ketika state count berubah
  useEffect(() => {
    console.log("updating count!");
  }, [count]);

  useEffect(() => {
    console.log("updating greeting!");
  }, [greeting]);

  // unmounting
  // useEffect(() => {
  //   return () => {
  //     console.log("unmounting!");
  //   };
  // });

  return (
    <div>
      <h1>Belajar ReactJS</h1>
      <h2>Count: {count}</h2>
      <button onClick={changeCount}>Tambah 1</button>
      <p>Belajar react js dengan FE6 di ruangguru</p>
      <hr />
      <h2>Greeting: {greeting}</h2>
      <button onClick={changeGreeting}>Change greeting</button>
      <hr />
      <ul>
        {data.map((item) => {
          return <Card key={item.id} title={item.title} urutan={item.id} />;
        })}
      </ul>
    </div>
  );
}

export default Home;
