import Article from "../../../components/articles/Article";
import { ancientMythOverview } from "../../../data/articleContent/ancient-stories/AncientMythOverview";

const ancientMythTheoryPage = () => {
	return (
		<>
			<Article data={ancientMythOverview} />
		</>
	);
};

export default ancientMythTheoryPage;
