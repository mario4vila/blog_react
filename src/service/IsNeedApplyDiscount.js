

const IsNeedApplyDiscount = (precio) => {
    if(precio >= 500){
        return true;
    }
    return false;
}

export default IsNeedApplyDiscount;