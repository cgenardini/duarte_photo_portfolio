import Connect from "../Connect/Connect";
import Discover from "../Discover/Discover";
import Intro from "../Intro/Intro";
import MainClients from "../MainClients/MainClients";
import Quote from "../Quote/Quote";
import Work from "../Work/Work";
import "./Main.css";

function Main({ handleTopPage }) {
  return (
    <section className="main">
      <Discover handleTopPage={handleTopPage} />
      <Intro handleTopPage={handleTopPage} />
      <Quote />
      <MainClients />
      {/* <Work /> */}
      <Connect handleTopPage={handleTopPage} />
    </section>
  );
}

export default Main;
