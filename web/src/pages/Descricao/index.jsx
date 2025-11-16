import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import style from "./descricao.module.css";

function Descricao() {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  async function ById() {
    try {
      const response = await axios.get(
        `https://proweb.leoproti.com.br/produtos/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      setInfo(response.data);
    } catch (error) {
      console.log("ERRO");
    }
  }
  useEffect(() => {
    ById();
  }, []);
  return (
    <div>
      <table className={style.table}>
        <thead className={style.bordar}>
          <tr>
            <th className={style.text}>Nome</th>
            <th className={style.text}>Valor</th>
          </tr>
        </thead>
        <tbody className={style.bordar}>
          <tr>
            <td className={style.text}>{info.nome}</td>
            <td className={style.text}>{info.preco}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Descricao;
