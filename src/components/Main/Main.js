import Connect from "../Connect/Connect";
import Discover from "../Discover/Discover";
import Intro from "../Intro/Intro";
import MainClients from "../MainClients/MainClients";
import Quote from "../Quote/Quote";
import Work from "../Work/Work";
import "./Main.css";

function Main() {
  return (
    <section className="main">
      <Discover />
      <Intro />
      <Quote />
      <MainClients />
      <Work />
      <Connect />
    </section>
  );
}

export default Main;
