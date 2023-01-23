import Article from '../../../components/articles/Article';
import { gobekliTepeCircles } from '../../../data/articleContent/example-locations/GobekliTepeCircles';

const gobekliTepeCirclesPage = () => {
	return (
		<>
			<Article data={gobekliTepeCircles} />
		</>
	);
};

export default gobekliTepeCirclesPage;
