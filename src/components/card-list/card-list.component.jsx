import { Component} from 'react';
import '../card/card.style.css';
import './card-list.styles.css';
import Card from '../card/card.component';

class CardList extends Component {

    render() {
        const {monsters} = this.props;
        

        return (
 
            <div className='card-list'>
{monsters.map((monster) => {


return (
    <div >
<Card className='card' monster={monster} />
    </div>
)




}
   

    
        )}
            </div>

    

        );}}
            

      
        

export default CardList;