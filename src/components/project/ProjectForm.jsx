import React, { useEffect, useState } from 'react';
import axios from 'axios';

import InputText from "../form/InputText";
import SubmitButton from "../form/SubmitButton";
import Select from "../form/Select";

import './ProjectForm.scss';

const ProjectForm = ( { btnText } ) => {

	const [erro, setErro] = useState(null);

  useEffect(() => {
    // Função para fazer a requisição GET à API
    const fetchData = async () => {
      try {
        // Faz a requisição GET à URL da API desejada
        const response = await axios.get('https://api.exemplo.com/dados');

        // Define os dados recebidos no estado
        setDados(response.data);
      } catch (error) {
        // Em caso de erro, define o erro no estado
        setErro(error);
      }
    };

    // Chama a função de busca de dados
    fetchData();
  }, [])

	return (
		<form>
			<InputText
				type="text"
				text="Nome do Projeto"
				name="name"
				placeholder="Insira o nome do projeto"
				handleOnChange=""
				value=""
			></InputText>
			<InputText
				type="number"
				text="Orçamento do projeto"
				name="budget"
				placeholder="Insira orçamento total"
				handleOnChange=""
			></InputText>
			<Select text="Selecione a categoria"></Select>
			<SubmitButton text={ btnText }></SubmitButton>
		</form>
	);
};

export default ProjectForm;
