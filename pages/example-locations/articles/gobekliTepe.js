import Article from '../../../components/articles/Article';
import { gobekliTepe } from '../../../data/articleContent/example-locations/GobekliTepe';

const gobekliTepePage = () => {
	return (
		<>
			<Article data={gobekliTepe} />
		</>
	);
};

export default gobekliTepePage;
