import Article from '../../../components/articles/Article';
import { devestatingConsequences } from '../../../data/articles/devestatingConsequences';

const devestatingConsequencesPage = () => {
	return (
		<>
			<Article data={devestatingConsequences} />
		</>
	);
};

export default devestatingConsequencesPage;