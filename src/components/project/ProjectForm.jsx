import React, { useEffect, useState } from 'react';
import axios from 'axios';

import InputText from "../form/InputText";
import SubmitButton from "../form/SubmitButton";
import Select from "../form/Select";

import './ProjectForm.scss';

const ProjectForm = async ( { btnText } ) => {

	const [ dados, setDados ] = useState( null );

	useEffect( () => {
		const fetchData = async () => {
			try {
				const response = await axios.get( 'http://localhost:5000/categoria' );
				setDados( response.data );
				console.log( dados );
			} catch ( error ) {
				console.log( error.message);
			}
		};

		fetchData();
	});

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
			<Select text="Selecione a categoria" options={dados}></Select>
			<SubmitButton text={ btnText }></SubmitButton>
		</form>
	);
};

export default ProjectForm;
