const products = [
    {id: "1", title: "Samsung S23", category:"Samsung", price: 500, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg", stock: 6, description:""},
    {id: "2", title: "producto 2", category:"Samsung", price: 800, img:"https://i.blogs.es/3339e4/img_1199/840_560.jpg" , stock: 4, description:""},
    {id: "3", title: "producto 3", category:"Iphone", price: 900, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg" , stock: 1, description:""},
    {id: "4", title: "producto 4", category:"Iphone", price: 1500, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg" , stock: 8, description:""},
    {id: "5", title: "producto 5", category:"Motorola", price: 900, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg" , stock: 3, description:""},
    {id: "6", title: "Iphone 14 Pro Max 128gb", category:"Iphone", price: 1500, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg" , stock: 2, description:"Descripcion del Iphone 14 Pro Max. Modelo 2023"}
];

export const myPromise = new Promise((resolve, rejected)=> {
    setTimeout(()=> {
        if (products) {
            resolve(products)
        } else {
            rejected("Algo salio re mal")
        }
    }, 2000)
})