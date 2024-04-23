
import { Link } from 'react-router-dom';
import storeItems from "../../../data/item.json";
import Card from '../../common/Card';
import MainTitle from '../../common/MainTitle';
    

const ProductsSection = ({name}) => {
    return (
        <div className='ProductsSection  my-4 p-4 rounded-md '>
            <Link to={name}><MainTitle title={name} /></Link>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
            {storeItems.map((x)=> (
                <Card key={x.id} item={x} />
            ))}
            </div>
        </div>
    )
}

export default ProductsSection