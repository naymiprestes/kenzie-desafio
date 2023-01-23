import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AmountReceivable from "../AmountReceivable";
import { Div, Form } from "./style";
import { useContext } from "react";
import { AnticipationContext } from "../../context/AnticipationContext";

const formAdvanceValue = yup.object().shape({
  amount: yup.number().typeError("campo obrigatório"),
  installments: yup.number().typeError("máximo de 12 parcelas"),
  mdr: yup.number().typeError("campo obrigatório"),
});

const AdvanceValue = () => {
  const { createAnticipation } = useContext(AnticipationContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formAdvanceValue),
  });

  return (
    <Div>
      <Form onSubmit={handleSubmit(createAnticipation)}>
        <h2>Simule sua Antecipação</h2>
        <label htmlFor="amount">Informe o valor da venda</label>
        <input
          type="text"
          id="amount"
          name="amount"
          {...register("amount", { required: true })}
        />
        <p>{errors.amount?.message}</p>

        <label htmlFor="installments">Em quantas parcelas</label>
        <input type="text" id="installments" {...register("installments")} />
        <p>{errors.installments?.message}</p>

        <label htmlFor="mdr">Informe o percentual de MDR</label>
        <input type="text" id="mdr" {...register("mdr")} />
        <p>{errors.mdr?.message}</p>
        <button type="submit">simular</button>
      </Form>
      <AmountReceivable />
    </Div>
  );
};

export default AdvanceValue;
