import React from 'react'
import { Flex } from '@chakra-ui/react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { category } = useParams()

  const productos = [
    {id: 1, nombre: "Alimento balanceado Gatti", descripcion: "Alimento balanceado Gatti, calidad intermedia, bolsa de 5kg, sabor carne" , precio: 2500, stock: 1, img: "", category: "cat1"},
    {id: 2, nombre: "Alimento balanceado Nutribom", descripcion: "Alimento balanceado Nutribom, este alimento cuenta con proteinas, calidad alta, bolsa de 5kg" , precio: 3500, stock: 1, img: "", category: "cat1"},
    {id: 3, nombre: "Alimento balanceado Excellent", descripcion: "Alimento balanceado Excellent, este alimento cuenta con proteinas y grasas saturadas, calidad premium, bolsa de 5kg" , precio: 5000, stock: 1, img: "", category: "cat1"},
    {id: 4, nombre: "Rascador Gatti", descripcion: "Rascador Gatti, alta durabilidad, fabricado con material de alta calidad" , precio: 2500, stock: 1, img: "", category: "cat2"},
    {id: 5, nombre: "Rascador CatPro", descripcion: "Rascador CatPro, alta durabilidad, diseño llamativo y calidad premium, lindo esteticamente" , precio: 5000, stock: 1, img: "", category: "cat2"},
    {id: 6, nombre: "Colchon CatRelax", descripcion: "Colchon CatRelax, diseñado ergonomicamente para la comodidad de tu gato" , precio: 3500, stock: 1, img: "", category: "cat3"},
    {id: 7, nombre: "Raton con control Gatti", descripcion: "Raton con control Gatti, no incluye las baterias, material duradero" , precio: 5000, stock: 1, img: "", category: "cat4"},
    {id: 8, nombre: "TunelCat 4 salidas", descripcion: "TunelCat 4 salidas, muy atractivo para los gatos y muy lindo esteticamente" , precio: 13500, stock: 1, img: "", category: "cat4"},
    {id: 9, nombre: "Musculosa Mike Wazowsky", descripcion: "Musculosa Mike Wazowsky, se puede lavar normalmente, fabricado con tela" , precio: 1500, stock: 1, img: "", category: "cat5"},
    {id: 10, nombre: "Polar Camuflado", descripcion: "Polar camuflado, se puede lavar normalmente, ideal para el invierno" , precio: 2700, stock: 1, img: "", category: "cat5"},
    {id: 11, nombre: "Campera tejida", descripcion: "Campera tejida, se puede lavar normalmente con agua fria, muy llamativo" , precio: 3000, stock: 1, img: "", category: "cat5"}
  ]

  const obtenerProductos = new Promise((resolve,reject) => {
    if (productos.length > 0){
      setTimeout(() =>{
        resolve(productos)
      }, 2000)
    }else {
      reject(new Error("No se encontraron datos"))
    }
  })

  obtenerProductos
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })


    const filtrarProductos = productos.filter((producto) => producto.category === category)

    return (

      <Flex>
        <ItemList productos={filtrarProductos} />
      </Flex>

  )
}

export default ItemListContainer