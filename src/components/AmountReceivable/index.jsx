import { useContext } from "react";
import { AnticipationContext } from "../../context/AnticipationContext";
import { Container } from "./style";

const AmountReceivable = () => {
  const { anticipation } = useContext(AnticipationContext);
  return (
    <Container>
      <h2> Você Receberá: </h2>

      <p>
        {" "}
        Amanhã: <span>R$ {anticipation["1"]},00</span>
      </p>
      <p>
        {" "}
        Em 15 dias: <span>R$ {anticipation["15"]},00</span>{" "}
      </p>
      <p>
        {" "}
        Em 30 dias: <span>R$ {anticipation["30"]},00</span>
      </p>
      <p>
        {" "}
        Em 90 dias: <span>R$ {anticipation["90"]},00</span>{" "}
      </p>
    </Container>
  );
};

export default AmountReceivable;
