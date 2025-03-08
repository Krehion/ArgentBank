import Nav from "../../components/nav/Nav";
import Hero from "../../components/hero/Hero";
import FeatureItem from "../../components/featureItem/FeatureItem";
import Footer from "../../components/footer/Footer";

import IconChat from "../../assets/icon-chat.png";
import IconMoney from "../../assets/icon-money.png";
import IconSecurity from "../../assets/icon-security.png";

const Index = () => {
	const featureItemsContent = [
		{
			id: "1",
			image: IconChat,
			slogan: "You are our #1 priority",
			text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
		},
		{
			id: "2",
			image: IconMoney,
			slogan: "More savings means higher rates",
			text: "The more you save with us, the higher your interest rate will be!"
		},
		{
			id: "3",
			image: IconSecurity,
			slogan: "Security you can trust",
			text: "We use top of the line encryption to make sure your data and money is always safe."
		}
	];
	return (
		<>
			<Nav />
			<main>
				<Hero />
				<section className="feature">
					{featureItemsContent.map((data) => {
						return <FeatureItem key={data.id} image={data.image} slogan={data.slogan} text={data.text} />;
					})}
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Index;
