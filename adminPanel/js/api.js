const url = 'http://localhost:3000/menu'

// consultar todo
export async function consultarBD(){
    try{
    const consultar = await fetch(url)
    const respuesta = await consultar.json()
    return respuesta
    }catch(err){
        console.log(err);
    }

    
}

// agregar

export async function agregarBD(producto){
    try{
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto),
        })
    }catch(err){
        console.log(err)
    }
}

//eliminar

export async function eliminardelaBD(id){
    try{
        await fetch(`${url}/${id}`, {
            method: "DELETE"
        })
    }catch(err){
        console.log(err)
    }
}

//actualizar

export async function editarBD(producto){
    try{
        await fetch(`${url}/${producto.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto),
        })
    }catch(err){
        console.log(err)
    }
}

//consultar por id

export async function consultaIDBD(id){
    try{
    const consulta = await fetch(`${url}/${id}`)
    const producto = await consulta.json()

    return producto
    
    }catch(err){
        return 404
    }

    
}