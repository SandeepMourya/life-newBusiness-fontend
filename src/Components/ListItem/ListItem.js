import "./ListItem.css"

const ListItem = ({name, value})=>{
    return(
        <>

                <div className='listContainerUnit'>
                    <div className='listContainerUnitLabel'>{name}</div>
                    <div>{value}</div>
                </div>
            
        </>
    )
}

export default ListItem;