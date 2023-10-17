function fillData() {
    const ret = [];
    for (let i = 0; i < 10; i++) {
        ret.push(    
        {
            imgSrc: "/okk1.webp",
            newArrival: true,
            name: "Fat Napz Society Ok Karen Black",
            price: 24.99
        })
    }
    return ret;
}

const newestDrop = fillData();



export default newestDrop