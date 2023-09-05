import Results from "../components/Results/Results";
import Filter from "../components/Filter/Filter";
import { NavLink } from "react-router-dom";
import style from "./Home.module.css";
import nasa from "../assets/NASA.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <img src={nasa} alt="nasa-logo" />
        <h3>Prueba Técnica by Jorge Tolentino</h3>
        <div className={style.icon}>
          <NavLink
            activeClassName={style.active}
            to="https://github.com/jorhedev"
            target="_blank"
          >
            <AiFillGithub />
          </NavLink>
          <NavLink
            activeClassName={style.active}
            to="https://www.linkedin.com/in/hijorhe/"
            target="_blank"
          >
            <AiFillLinkedin />
          </NavLink>
        </div>
      </div>
      <Filter />
      <Results />
    </div>
  );
};

export default Home;
