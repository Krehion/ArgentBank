import "../../style/components/_feature-item.scss";

export default function FeatureItem({ image, slogan, text }) {
	return (
		<div className="feature--item">
			<img className="feature--icon" src={image} />
			<h3 className="feature--slogan">{slogan}</h3>
			<p className="feature--text">{text}</p>
		</div>
	);
}
