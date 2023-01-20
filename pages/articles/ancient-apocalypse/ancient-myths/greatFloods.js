import Article from "../../../../components/articles/Article";
import { greatFloods } from "../../../../data/articles/greatFloods";

const greatFloodPage = () => {
	return (
		<>
			<Article data={greatFloods} />
		</>
	);
};

export default greatFloodPage;
