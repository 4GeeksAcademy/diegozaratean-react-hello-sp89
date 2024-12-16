import React from "react";

// 4. importar componente
import Nav from "./nav";
// 5. utilizar componente

const Home = () => {
	return (
		<>
			<Nav/>
			<h1 className="text-center mt-5">Hola Bienvenidos a React 123 :)</h1>
			<p>Lorem ipsum dolor sit amet.</p>
			<h2>footer</h2>
		</>
	);
};

export default Home;