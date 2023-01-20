import Article from '../../../components/articles/Article';
import { corsettisTheory } from '../../../data/articles/Corsettis-theory';

const corsettisTheoryPage = () => {
	return (
		<>
			<Article data={corsettisTheory} />
		</>
	);
};

export default corsettisTheoryPage;