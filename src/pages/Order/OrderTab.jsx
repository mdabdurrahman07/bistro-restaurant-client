/* eslint-disable react/prop-types */
import Card from '../Shared/Card/Card';

const OrderTab = ({values}) => {
    return (
        <div className='grid grid-cols-3 justify-items-center gap-5 my-10'> 
        {values.map(item => <Card key={item._id} item={item}></Card>)}
        </div>
    );
};

export default OrderTab;