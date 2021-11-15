import DrinksCollection from './DrinksCollection'
import ForYouCollection from './ForYouCollection'
import NewInCollection from './NewInCollection'
import ShoesCollection from './ShoesCollection'

const Collections = () => {
    return (
        <div className="collections">
            <ShoesCollection />
            <DrinksCollection />
            <NewInCollection />
            WomenCollection
            MenCollection
            <ForYouCollection />
        </div>
    )
}

export default Collections
