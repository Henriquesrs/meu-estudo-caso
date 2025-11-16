import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function Descricao() {
  const route = useRoute();
  const { id } = route.params;

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
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          flexDirection: "row",
          width: 350,
          borderWidth: 1,
          borderColor: "black",
          borderRadius: 5,
          justifyContent: "space-between",
          padding: 10,
          alignItems: "center",
        }}
      >
        <Text>{info.nome}</Text>
        <Text>R$ {info.preco}</Text>
      </View>
    </View>
  );
}
