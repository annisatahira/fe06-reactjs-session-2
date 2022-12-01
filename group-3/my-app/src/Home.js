import { useEffect, useState } from "react";
import Card from "./components/Card";

function Home() {
  const [count, setCount] = useState(0);
  const [greeting, setGreeting] = useState("hello");
  const [data, setData] = useState([]);

  const changeCount = (event) => {
    // console.log("Change Count!");
    // state = 0
    // lalu kita klik tambah 1
    // state = 1
    // console.log(event.target.innerText);
    if (count >= 10) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const changeGreeting = () => {
    setGreeting("hai");
  };

  // akan selalu di jalankan ketika ada state atau props yg berubah
  // atau ada proses rendering
  useEffect(() => {
    console.log("Selalu Render!");
  });

  // mounting
  // ketika compontent pertama kali diterapkan atau dipanggil
  useEffect(() => {
    console.log("mounting!");
    // menghentikan fetch
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

    // unmount
    return () => abortController.abort();
  }, []);

  // updating
  // akan di render ketika state count berubah dan component pertama kali dipanggil
  useEffect(() => {
    console.log("Count Updating!");
  }, [count]);

  useEffect(() => {
    console.log("Greeting updating~!");
  }, [greeting]);

  // unmounting
  // ketika component tidak digunakan lagi
  // useEffect(() => {
  //   return () => {
  //     console.log("Unmounting!");
  //   };
  // });

  return (
    <div>
      <h1>Home Component</h1>
      <h2>Count: {count}</h2>
      <button onClick={changeCount}>Ubah Count</button>
      <hr />
      <h2>Greeting: {greeting}</h2>
      <button onClick={changeGreeting}>Ubah Greeting</button>
      <hr />
      {data.map((item) => {
        return <Card key={item.id} title={item.title} urutan={item.id} />;
      })}
    </div>
  );
}

export default Home;
