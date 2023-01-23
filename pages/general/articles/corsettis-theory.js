import Article from '../../../components/articles/Article';
import { corsettisTheory } from '../../../data/articleContent/general/Corsettis-theory';

const corsettisTheoryPage = () => {
	return (
		<>
			<Article data={corsettisTheory} />
		</>
	);
};

export default corsettisTheoryPage;