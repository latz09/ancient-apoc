import Article from '../../../components/articles/Article';
import { gobekliTepe } from '../../../data/articles/GobekliTepe';

const gobekliTepePage = () => {
	return (
		<>
			<Article data={gobekliTepe} />
		</>
	);
};

export default gobekliTepePage;
