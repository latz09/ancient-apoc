import { articleCards, sectionImages } from '../data/articleCards/cards';
import Header from '../components/layout/Header';
import Section from '../components/layout/Section';
import ArticleCard from '../components/articles/ArticleCard';
import FirstSection from '../components/layout/FirstSection';

export default function Home() {
	return (
		<div className='grid '>
			<Header image={sectionImages.general}/>
			<FirstSection allArticleCards={articleCards} category={'general'} />
			<Section
				allArticleCards={articleCards}
				category={'evidence'}
				title='Apocalyptic Evidence'
				subtitle='Uncovering the End of the Worlds Past through Scientific Discoveries'
				image={sectionImages.evidence}
			/>
			<Section
				allArticleCards={articleCards}
				category={'example locations'}
				title='Apocalyptic Archaeology'
				subtitle='Uncovering the End of the Worlds Past in Ancient Sites'
				image={sectionImages.exampleLocation}
			/>
			<Section
				allArticleCards={articleCards}
				category={'ancient stories'}
				title='Tales of Doomsday '
				subtitle='Uncovering the End of the Worlds Past in Ancient Narratives'
				image={sectionImages.ancientStory}
			/>
		</div>
	);
}
