const products = [
    {id: "1", title: "producto 1", price: 500, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg", stock: 6, description:""},
    {id: "2", title: "producto 2", price: 800, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg" , stock: 4, description:""},
    {id: "3", title: "producto 3", price: 900, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg" , stock: 1, description:""},
    {id: "4", title: "producto 4", price: 1500, img:"https://cdn.vox-cdn.com/thumbor/cPeVH-m_b9pScRXzpCBW-nAHSfw=/0x0:2032x1355/1400x1400/filters:focal(1016x678:1017x679)/cdn.vox-cdn.com/uploads/chorus_asset/file/22863258/akrales_210917_4760_0175.jpg" , stock: 8, description:""}
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