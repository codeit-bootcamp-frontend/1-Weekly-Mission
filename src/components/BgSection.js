const BgSection = ({ bgColor, children }) => {
	const backgroundClass = `background-${bgColor}`;
	return <section className={backgroundClass}>{children}</section>;
};

export default BgSection;
