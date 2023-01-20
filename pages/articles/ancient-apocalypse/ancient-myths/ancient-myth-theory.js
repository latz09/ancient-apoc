import Article from "../../../../components/articles/Article";
import { ancientMythOverview } from "../../../../data/articles/AncientMythOverview";

const ancientMythTheoryPage = () => {
	return (
		<>
			<Article data={ancientMythOverview} />
		</>
	);
};

export default ancientMythTheoryPage;
