const format = (date) => {
    let dateTime = date.map((item)=>{
        item = String(item);
        if(item.length === 1){
             item = '0' + item;
             return item; 
        }
        return item;
    });
    return dateTime;
};

exports.format = format; 