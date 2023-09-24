import { Link } from "react-router-dom";

import "./Home.scss";

import saving from "../../assets/saving-money.png";
function Home () {
	return (
		<section className="home">
			<h1>Bem-vindo ao <span>Costs</span></h1>
			<p>Comece a gerenciar os seus projetos agora mesmo!</p>
			<img src={saving} alt="Costs" />
			<Link to="/new-project"><span className="link">Criar projeto</span></Link>
		</section>
	);
}
export default Home;