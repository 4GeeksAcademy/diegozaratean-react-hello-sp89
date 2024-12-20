import React from "react";

// 4. importar componente
import Nav from "./nav";
import Jumbotron from "./jumbotron";
import Button from "./button";
import Card from "./card";
// 5. utilizar componente

const Home = () => {
	return (
		<>
			<Nav/>
			<Jumbotron />
			<h1 className="text-center mt-5">Hola Bienvenidos a React 123 :)</h1>
			<p>Lorem ipsum dolor sit amet.</p>
			<Button />
			<Card name='jose' description='mira los ultimos hongos que he capturado' likes='111'/>
			<Card name='jhosep' description='aqui viendo a mi equipo favorito #goal' likes='453'/>
			<Card name='michael' description='amaneciendo frente a la montaña #blessed' likes='98'/>
			<h2>footer</h2>
		</>
	);
};

export default Home;