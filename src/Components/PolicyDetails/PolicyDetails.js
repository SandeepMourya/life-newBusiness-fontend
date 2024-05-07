import './PolicyDetails.css';
import ListItem from '../ListItem/ListItem';

const PolicyDetails = () => {

    const details = [
        {name: "Application Number", value : "GP12H3272M"}, 
        {name: "Product Name", value : "Insurance Medi"},
        {name: "Product Type", value : "Group"},
        {name: "Product Code", value : "GP"},
        {name: "Sum Assured", value : "200000"},
        {name: "Premium Frquency", value : "Quaterly"},
        {name: "Premium Mode", value : "Online"},
        {name: "Renewal Premium Mode", value : "Online"},
        {name: "Annual Premium", value : "300000"},
        {name: "Installment Premium", value : "50000"},
        {name: "Premium Paying Term", value : "Good term"},
        {name: "Policy Term", value : "Good Term"},
    ]

    return <div>
        <h1>This is Policy Details</h1>
        <div className='policyDetailsContainer'>
            
            {details.map(data => {
                return <ListItem key ={data.name} name={data.name} value={data.value}/>
            })}
        </div>

    </div>
};



export default PolicyDetails;