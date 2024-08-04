
export const items = [
    { id: 1,
        nombre:" remeras",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722793947/reme_bygv9x.jpg",
        precio:8000,
        stock: 20,
        categoria:"remeras"
        
    },

    { id: 2,
        nombre:" pantalones",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722792369/pantalon_seqnoh.jpg",
        precio:15000,
        stock: 25,
        categoria:"pantalones"
    },
    { id: 3,
        nombre:" sacos",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722793236/saco_zy6hrk.jpg",
        precio:20000,
        stock: 10,
        categoria:"sacos"
    },
    { id: 4,
        nombre:" sweters",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722793372/sweter_huzmje.jpg",
        precio:18000,
        stock: 22,
        categoria:"sweters"
    },
    { id: 5,
        nombre:" vestidos",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722793534/vestido_lgko20.jpg",
        precio:22000,
        stock: 30,
        categoria:"vestidos"
    },
    { id: 6,
        nombre:" musculosa",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722792169/musculosa_eebffx.avif ",
        precio:22000,
        stock: 30,
        
        categoria:"remeras"
    },
    { id: 7,
        nombre:" tapado",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722793657/tapado_xmgfyr.jpg",
        precio:22000,
        stock: 30,
        categoria:"sacos"
    }, 
    { id: 8,
        nombre:" short",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722793732/short_vslyzy.jpg",
        precio:22000,
        stock: 30,
        categoria:"pantalones"
    },
    { id: 9,
        nombre:" solera",
        imagen:"https://res.cloudinary.com/dwuq7ctzp/image/upload/v1722793878/solera1_xwyxeg.jpg",
        precio:22000,
        stock: 30,
        categoria:"vestidos"
    },
]
export const getProducts = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items)            
        }, 2000);
    })
}

export const getProductById = (id) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id === id*1))            
        }, 1500);
    })
}