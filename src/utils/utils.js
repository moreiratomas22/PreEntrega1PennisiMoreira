const products = [
    {id: "4", title: "Iphone 13 Pro", category:"Iphone", price: 1500, img:"" , stock: 8, description:""},
    {id: "2", title: "Samsung Z Flip 5", category:"Samsung", price: 614999, img:"https://images.samsung.com/ar/smartphones/galaxy-z-flip5/images/galaxy-z-flip5-highlights-kv-a.jpg?imbypass=true" , stock: 4, description:""},
    {id: "7", title: "Motorola Razr 40 Ultra", category:"Motorola", price: 649999, img:"https://armoto.vtexassets.com/arquivos/ids/164681-800-auto?v=638241762208330000&width=800&height=auto&aspect=true" , stock: 2, description:'Diseño exclusivo con pantalla flexible de 6.9” y bisagra “gota” sin espacios entre sus lados.'},
    {id: "8", title: "Moto G72", category:"Motorola", price: 179999, img:"https://armoto.vtexassets.com/arquivos/ids/163878-800-auto?v=638082338261870000&width=800&height=auto&aspect=true" , stock: 2, description:'El Moto G72 es un nuevo móvil de gama media con conectividad 4G que incorpora mejoras importantes como la nueva pantalla OLED a 120 Hz o la cámara triple cuyo sensor principal es de 108 megapíxeles.'},
    {id: "6", title: "Iphone 14 Pro Max", category:"Iphone", price: 1500, img:"https://w7.pngwing.com/pngs/961/642/png-transparent-iphone-14-pro.png" , stock: 2, description:"Descripcion del Iphone 14 Pro Max de 128 gb. Modelo 2023"},
    {id: "1", title: "Samsung S23", category:"Samsung", price: 755999, img:"", stock: 6, description:""},
    {id: "5", title: "Iphone 12", category:"Iphone", price: 900, img:"" , stock: 3, description:""},
    {id: "9", title: "Moto E32", category:"Motorola", price: 67999, img:"https://armoto.vtexassets.com/arquivos/ids/162569-800-auto?v=638097504617530000&width=800&height=auto&aspect=true" , stock: 2, description:'Con un diseño elegante y resistente, el nuevo moto e32 te da el estilo que querés. Viví una experiencia visual fluida con la pantalla HD+ de 6.5" y 90 Hz. Potenciá tu creatividad usando el sistema de triple cámara con IA y enfoque rápido. Además, obtené un procesador potente y una batería duradera de 5000 mAh.'},
    {id: "3", title: "Samsung Z Fold 5", category:"Samsung", price: 1049999, img:"" , stock: 1, description:""},
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