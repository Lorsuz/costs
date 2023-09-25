import "./NewProject.scss"
import FormProject from "../project/ProjectForm";

function NewProject () {
	return (
		<section className="new_project">
			<h1>Criar novo Projeto</h1>
			<p>Crie seu projeto para depois adicionar os serviços</p>

			<FormProject btnText="Criar Projeto"></FormProject>

		</section>
	);
}
export default NewProject;