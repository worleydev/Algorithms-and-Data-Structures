function dutyFree(normPrice, discount, hol){
    const afterDiscount = (normPrice * discount)/100
    const num = hol / afterDiscount
    return Math.floor(num)
    }