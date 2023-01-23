import Article from "../../../components/articles/Article";
import {singleImpact} from '../../../data/articleContent/general/SingleImpact'

const singleImpactPage = () => {
    return ( <>
    <Article data={singleImpact}/>
    </> );
}
 
export default singleImpactPage;