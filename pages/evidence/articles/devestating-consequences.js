import Article from '../../../components/articles/Article';
import { devestatingConsequences } from '../../../data/articleContent/evidence/devestatingConsequences';

const devestatingConsequencesPage = () => {
	return (
		<>
			<Article data={devestatingConsequences} />
		</>
	);
};

export default devestatingConsequencesPage;