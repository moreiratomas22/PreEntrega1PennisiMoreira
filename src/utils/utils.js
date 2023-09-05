/* const products = [
  {
    id: "4",
    title: "Iphone 13 Pro",
    category: "Iphone",
    price: 1500,
    img: "https://previews.dropbox.com/p/thumb/ACDLSD6OmtMFUphJYt2AcdwfQ7AKI02WfIAD5iZbOJxNPYZxR15sNNZxeXkGMIbvRB5cPuagq9re9naY-thU7Ha99bE5uUyKDLWxCE9t4V0j1-paQyEkhUffHm0cudd5uUbsf4_a_0r8MYDfFNRdY3XesSK8Olk9q6ANBfmt4MDr078R5hrWJvZ_XRJCSLo2loQl1_gyVnmFZnR9P3CkZAiQ2eSLRbDG7zxU9b5xwwx_yVZlSJzgH0tE-J75Lfmv5uPiwwr54dlVSBWJPWXgRD0FZE0VqyrfGYJeA8kLjbqVfrtoCWcoaWbwKX3cYRvDZFz7w9Flc7j7MeyXEk8hi2TC/p.jpeg",
    stock: 8,
    description:
      "La pantalla del iPhone 13 Pro tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono, y las esquinas se encuentran dentro de un rectángulo estándar. Si se mide en forma de rectángulo estándar, la pantalla tiene 6.06 pulgadas en diagonal (el área real de visualización es menor).",
  },
  {
    id: "2",
    title: "Samsung Z Flip 5",
    category: "Samsung",
    price: 614999,
    img: "https://previews.dropbox.com/p/thumb/ACDdkYIwnWHQvePm7EChQt-roDyIYt3iEkKytisfXsmMd8wLOKZ1JuqJMJVf8fC1ZjaRAsWopl-1FT7UwFtqeVGsWrfXn62Zh3luc5aghdHuAf0YE54qjPAkSD4E0J1RbdkDu2DWIN7K1gZoRaJHGBlDDyNSwIzY4PyKTZunSwksM9_UqAm0rMiG0-8MMl2LbI7ZW_nH5h_CCWNeZzjIHY0q4Q9pDWs4wEAS9PnjIJJ8Y-KWrgTBPx_9bhgPyaBDGwlxtqen9hyxvYEJlVjp7Ezb1EKQg33bRZWZbOd9KVwEckMN0cHuZ6Ci8PlkOCMzwasFS-trO6glNlgBG-S1SWsM/p.jpeg",
    stock: 4,
    description:
      "No te pierdas de un solo momento con el nuevo Samsung Galaxy Z Flip5. Con su cámara de 12+12 MP; sacá fotos nítidas y claras tanto de día como de noche. El Samsung Galaxy Z Flip5 posee un procesador Octa-Core (3.36GHz,2.8GHz,2GHz) para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 512 GB",
  },
  {
    id: "7",
    title: "Motorola Razr 40 Ultra",
    category: "Motorola",
    price: 649999,
    img: "https://previews.dropbox.com/p/thumb/ACDB-LxZ9uQrp7LyjvcILVApIgk3IjlcTLutr9wJNa2BhJv_xhyl6jSHPU8CpF1iDvR4yi1F3bkyQq1tCF3LU_gxYqkzxgX2Oace1shC1eHG8DkzdCektvgsIFjOK4csitzNGwtEKC2NCFz2ZRSdIHVZQK8Dqgw3sPSUNzSFvmzpIQcCHiO1fWYve0NqLYP15EaO1egRyKUZpgo9WmpZZcWDvTIdSFVMnw5jqCUdcXfLh8y52xOjfZ9Gzkf_qzJzbEjVU1-F_NmVrgL2v0ym6TxKYsG2cTzt7i-kHvB7lMjrZqSLOx8je5bXuYIPDPrB0tRRkQVxOhb8ar7JVMqxzhRe/p.jpeg",
    stock: 2,
    description:
      "Diseño exclusivo con pantalla flexible de 6.9” y bisagra “gota” sin espacios entre sus lados.",
  },
  {
    id: "8",
    title: "Moto G72",
    category: "Motorola",
    price: 179999,
    img: "https://previews.dropbox.com/p/thumb/ACDJ3psVNz8E0Rz_ijlB_1mmkqcW3QqOzLaskS5k4XxaNz55l0Hg_RqmPUQkmEXmXXlKxCDFELSZGC85MHlBpSJq_dtPaif3OCVWffFKkySy8D_WD8DAyi0t1_tTMluW7tbxCbTxkSaEd1VOJqTNuC0QRzkqsXSMFdbWJJWyHgKHwviIR-R8LmatQahOFGrsA6W-me5rSMYxbLzO6L5QbC45mjNyq_r1ovqMFqwQ61_4XFVsmGXk-11zrJnUQlNv0km5zU6Vyi2uIGgYcQpIMXjy6cnLyIcUhHu0b4XW_GzsH8P8Dp8AEkHX8nAIwyDIhIVwX1kOi36MgIdoXkZHQWx_/p.jpeg",
    stock: 2,
    description:
      "El Moto G72 es un nuevo móvil de gama media con conectividad 4G que incorpora mejoras importantes como la nueva pantalla OLED a 120 Hz o la cámara triple cuyo sensor principal es de 108 megapíxeles.",
  },
  {
    id: "6",
    title: "Iphone 14 Pro Max",
    category: "Iphone",
    price: 1500,
    img: "https://previews.dropbox.com/p/thumb/ACBf8y5GFhIS5Q0aDgHKv6anwXsC22f_ajmf7rYI9stS8h3IcphfDflBtnnxFu5FzP1ll2zvqIlfqTxqmOhRv56xgm6wt8mmT08_a71AHCW0C5NujBqkG2xJ76btn9_7D09INuJ1eOHcO42CiY_uCLOkMyQIhRPqWHsHUXLM9X3HHzv4yFqDGkf6dCxSLHrFwZK5mzu1kkAOFzmtrWYLUWT8m_zhUjPQM7Y2yhM8tfyBVKUc5sTTAM4eYcFx95bWRzrm7T686S-sEgINX73qMb7glVnmbE3wYk6J_zgx37SV4B8qYsF2d5D42YOKGkJEDN0mEvCVSOJP0nbm_FydXJU1/p.jpeg",
    stock: 2,
    description: "Descripcion del Iphone 14 Pro Max de 128 gb. Modelo 2023",
  },
  {
    id: "1",
    title: "Samsung S23",
    category: "Samsung",
    price: 755999,
    img: "https://previews.dropbox.com/p/thumb/ACCfl1TCJmocwb8MQX1Uya2n0q-c7icvWvckMmfgUdiczM0S-7dG5U63KnwE_Yl2zE0zLRo-C7Y_glIxa-9_bopp6xPKojizkhCs-Vf9LyFr31JwlLwcF9f-Su6xxv2xi52GTlnmaLyEB4lBpPGV2P_NUDhGtwpcetuywmtID83NF2rW3vSXwImruzDTUkOax4ZZafuHxDM5xDDCHkqesoTiSP2o_CXVC3RkXOBrbY1TYN1MpA8HKhlRU-xgNV0PQJT3vqKPgRX3z6AR039cXMJTK06FWYxmNByaBEezeg6UsF5FKydQhG4nfl9weDRk_okwAg4ku5lOUzAor_dogIfr/p.jpeg",
    stock: 6,
    description:
      "El Samsung Galaxy S23 llega con algunos cambios de diseño y upgrades incrementales sobre su predecesor. Con una pantalla Dynamic AMOLED 2X de 6.1 pulgadas con tasa de refresco de 120Hz, resolución FHD+ y vidrio Gorilla Glass Victus 2, el Galaxy S23 está potenciado por un procesador Snapdragon 8 Gen 2 for Galaxy, una variante del chip de Qualcomm que corre a 3.36GHz, junto con 8GB de RAM y hasta 512GB de almacenamiento interno.",
  },
  {
    id: "5",
    title: "Iphone 12",
    category: "Iphone",
    price: 900,
    img: "https://previews.dropbox.com/p/thumb/ACBuvooQJQNhS9yRDEawsQ1YYvVbwhuLAzwqqrKOajhWh9CD4hWtJJUUF8mfSko7w9Rg6IIjHcrGX4iDv7UcSLQTNTCew0KMVaiqZWjeC7oeAwsuKCalExsqsVTXaZH-UGI4IytFAIFRwI8QB8vST1ZHdWSoXHSO8Lelf63fnmpvbEk3so7S06sfBFBvW5oR3PKJ0vuaCt49jYOggDoEq96_WAbMqxS_6C16fuKxEuVFA7xlx5xxa4ds7y003aEtHavj5zZYIe1426I3EF_Ea8vmbHUQT2bsSWdsIPEQXSHAjWHyqa-tZilCBZpvCOjMy6SzNhskT56y_BrJ_7_AiUmY/p.jpeg",
    stock: 3,
    description:
      "El iPhone 12 tiene el chip A14 Bionic, el más rápido en un smartphone. Una pantalla OLED de borde a borde. Un nuevo frente de Ceramic Shield, cuatro veces más resistente a las caídas. Además, ahora el modo Noche viene en todas las cámaras. El iPhone 12 lo tiene todo. Y está disponible en dos tamaños perfectos.",
  },
  {
    id: "9",
    title: "Moto E32",
    category: "Motorola",
    price: 67999,
    img: "https://previews.dropbox.com/p/thumb/ACAigjWm2oe-tb4Bsz-ydcBnMgRJf2Hg-U8lHg4WRG14otQru1VW26HUHlABX6z2bApkGtcnfuWRmFATpeA26QLrr5kHcWiNKHaQ53Y9tAfoo6m83B04vc6gb3TwPFog73kVA2v_HMN415xYewQP2o0IzHSXmIvQ1zknlHJdxPZoj9EsuQnr2eSBru1kl4CyqbJQGtQMyHhbgVaEQwdwIQI9Yz_MmLj3fmeB2iViz9UDzACvOYsxoT_4oLhBv8QloGPve_Ak2nevrXhZPgTbUYZ916D_QHDTy2x9DpdzGxvtjBkFot9RXaWTffC0u_CrBTIy_oPcIrIAd-4kW2EtuDMw/p.jpeg",
    stock: 2,
    description:
      'Con un diseño elegante y resistente, el nuevo moto e32 te da el estilo que querés. Viví una experiencia visual fluida con la pantalla HD+ de 6.5" y 90 Hz. Potenciá tu creatividad usando el sistema de triple cámara con IA y enfoque rápido. Además, obtené un procesador potente y una batería duradera de 5000 mAh.',
  },
  {
    id: "3",
    title: "Samsung Z Fold 5",
    category: "Samsung",
    price: 1049999,
    img: "https://previews.dropbox.com/p/thumb/ACCZGxtN9QHs58kaJ8vhATzR9Ah-QI03cEvvCj4cWkGSlCy2vXLhC2PQoUAeFVTjs_r3V322q1MBSuxFsNLeovPSNOp69d0bwMXPqliNYXhgP45wYA-gPWF159hdHKjzcc9o74E4RLcJ5saY6uqfxaxSeYYovc7sxuM4QfRzUvQsLq1tkzwGsS9D6RiCRYp4jywS0STUm8Ta9vv0_NTsp0gR5l34OSJdN-oworTMyXac7i822xU1JoxMZ50soGy4_M8HDQFK9DnbA6PtiGeiSUBUhniOD5XDm40jePpqXhePYqh3Q8ezWveliSZlZDc2U44-dU6zDVG80pDrmeTO0AE4/p.jpeg",
    stock: 1,
    description:
      "El Samsung Galaxy Z Fold 5 es la quinta generación del smartphone plegable tipo tablet de Samsung, refinando sobre anteriores generaciones con un nuevo mecanismo de pliegue. El Galaxy Z Fold 5 cuenta con una pantalla interna AMOLED de 7.6 pulgadas con tasa de refresco variable de 120Hz, y una pantalla cover AMOLED de 6.2 pulgadas protegida por vidrio Gorilla Glass Victus 2",
  },
]; */

import { db } from "./firebase";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

const productosCollecion = collection(db, "productos");
export const getProducts = getDocs(productosCollecion);


export const getProduct = (id) => {
    const q = doc(db, "productos", id)
    const product = getDoc(q)
    return new Promise((res, rej) => {
        res(product)
        rej((err) => console.log(err))
    })
}


/* export const myPromise = new Promise((resolve, rejected) => {
  setTimeout(() => {
    if (products) {
      resolve(products);
    } else {
      rejected("Algo salio re mal");
    }
  }, 2000);
}); */
