import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";

const Index = () => {
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<section className="features">
					{/* Feature items: map an array of 3 elements with image + title + text */}
				</section>
			</main>
			{/* Footer */}
		</>
	);
};

export default Index;
