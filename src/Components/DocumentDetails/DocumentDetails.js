import './DocumentDetails.css';
import ListItem from '../ListItem/ListItem';

const DocumentDetails = () => {
    const details = [
        {name: "Application Number", value:"GP12H3272M"},
        {name: "Identity Proof", value:"Aadhar"},
        {name: "Age Proof", value:"Birth Certificate"},
        {name: "Address Proof", value:"Aadhar"},
        {name: "Income Proof", value:"Income Certificate"},

    ]
    return <div>
        <h1>This is Document Details</h1>
        <div className='documentdetailsContainer'>
            
            {details.map(data => {
                return <ListItem key ={data.name} name={data.name} value={data.value}/>
            })}
        </div>
    </div>
};

export default DocumentDetails;