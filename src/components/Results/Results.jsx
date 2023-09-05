import { useSelector, useDispatch } from "react-redux";
import { getImagenes, setIndexPage } from "../../redux/actions";
import { useEffect } from "react";

import Card from "../Card/Card";
import style from "./Results.module.css";

const Results = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImagenes());
  }, [dispatch]);

  const handleClick = (event) => {
    let direction = event.target.value;
    let index = direction === "+" ? indexPage - 1 : indexPage + 1;
    dispatch(setIndexPage(index));
  };

  const updatedShowImages = useSelector((state) => state.updatedShowImages);
  const indexPage = useSelector((state) => state.indexPage);
  const quantityPages = useSelector((state) => state.quantityPages);

  console.log(updatedShowImages);

  return (
    <div className={style.container}>
      <div className={style.cards}>
        {updatedShowImages.length === 0 ? (
          <p>imagenes no disponibles</p>
        ) : (
          updatedShowImages.map((imagen) => (
            <Card
              key={imagen.date}
              title={imagen.title}
              image={imagen.hdurl}
              date={imagen.date}
            />
          ))
        )}
      </div>
      <div className={style.paginate}>
        <button onClick={handleClick} value={"+"} disabled={indexPage === 1}>
          Previus
        </button>
        <span>
          Page {indexPage} of {quantityPages || 1}
        </span>
        <button
          onClick={handleClick}
          value={"-"}
          disabled={indexPage >= quantityPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Results;
