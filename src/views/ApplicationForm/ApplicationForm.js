import './ApplicationForm.css';

import PersonalDetails from '../../Components/PersonalDetails/PersonalDetails'
import PolicyDetails from '../../Components/PolicyDetails/PolicyDetails'
import DocumentDetails from '../../Components/DocumentDetails/DocumentDetails'

const ApplicationForm = () => {
    return <div>
        <PersonalDetails />
        <PolicyDetails/>
        <DocumentDetails />
    </div>
};

export default ApplicationForm;