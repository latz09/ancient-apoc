import Article from "../../../components/articles/Article";
import {singleImpact} from '../../../data/articles/SingleImpact'

const singleImpactPage = () => {
    return ( <>
    <Article data={singleImpact}/>
    </> );
}
 
export default singleImpactPage;