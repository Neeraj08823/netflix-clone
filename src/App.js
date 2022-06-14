import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>hey</h1>
      <Row
        title="NETFLIX ORIGNINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movie" fetchUrl={requests.fetchTrending} />
      <Row title="Romance Movie" fetchUrl={requests.fetchTrending} />
      <Row title="Documantaries" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
