import Article from '../components/articles/Article';
import { ancientApocolypseIntro } from '../data/articles/AncientApocolypseIntro';
import { articleCards } from '../data/articleCards/cards';
import ArticleCard from '../components/articles/ArticleCard';

export default function Home() {
	return (
		<>
		
			<div className='max-w-7xl mx-auto mb-16'>
				<div className="grid lg:grid-cols-2 gap-12 place-items-center">
					{articleCards.map((article, index) => (
						<div key={index}>
							<ArticleCard
								title={article.title}
								tease={article.tease}
								link={article.link}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
