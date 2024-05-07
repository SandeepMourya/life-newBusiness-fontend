const checkEmpty = (parameter) => {
    if(parameter.value === '') {
        return { status : false, message : parameter.name + " cannot be null." };
    }
    return { status : true, message : "" };
}
 
export default checkEmpty;