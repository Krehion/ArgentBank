import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";

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
			<Footer />
		</>
	);
};

export default Index;
