import style from './Filter.module.css'

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { orderDate, setIndexPage } from "../../redux/actions";


const Filter = () => {
    const dispatch = useDispatch();
    const indexPage = useSelector((state) => state.indexPage);


  const [orderA, setOrderA] = useState("");


  const handleReset = () => {
    setOrderA("");
    dispatch(setIndexPage(indexPage));

  };

  const handleOrderDate = (event) => {
    event.preventDefault();
    const value = event.target.value;
    dispatch(orderDate(value));
    dispatch(orderDate(value));
    setOrderA(value);
  };




  return (
      <div className={style.filter}>
        <h3>FILTRO</h3>
        <select
          className={style.buttons}
          value={orderA}
          onChange={handleOrderDate}
          name="orderA"
        >
          <option value="" disabled>
            FECHA ORDEN
          </option>
          <option value="newest-first">Mas reciente</option>
          <option value="oldest-first">Menos reciente</option>
        </select>
        
        <button className={style.buttons} onClick={handleReset}>
          RESET
        </button>
      </div>
  );
};

export default Filter;
