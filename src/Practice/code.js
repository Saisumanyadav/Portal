import "./styles.css";
import { useState, useEffect } from "react";
const urlIntal = "https://pokeapi.co/api/v2/pokemon";

export default function App() {
  const [data, setData] = useState({});
  const [url, setUrl] = useState(urlIntal);

  useEffect(() => {
    (async () => {
      const api = await fetch(url);
      const response = await api.json();
      console.log(response);
      setData(response);
    })();
  }, [url]);

  const next = () => {
    const nxturl = data.next;
    if (nxturl != null) {
      setUrl(nxturl);
    }
  };
  const privous = () => {
    const preiUrl = data.previous;
    if (preiUrl != null) {
      setUrl(preiUrl);
    }
  };
  return (
    <div className="App1">
      {
        <div class="list-continer">
          {data?.results?.map((items) => (
            <div key={Math.random()}>{items.name}</div>
          ))}
        </div>
      }
      <div style={{ display: "flex", justifyContent: "end", padding: "16px" }}>
        {data.previous != null && (
          <button style={{ marginRight: "6px" }} onClick={privous}>
            Preivous
          </button>
        )}
        {data.next != null && <button onClick={next}>Next</button>}
      </div>
    </div>
  );
}
