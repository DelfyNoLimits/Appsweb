<template>

  <div>
    <div v-for="product in products" :key="product.id" class="product-container">
      <h2 class="product-card">{{ product.name }}<br>s/.{{ product.price }}<br>
      <button class="add-button" >Agregar</button>
      </h2>

      <p class="product-card">{{ product.description }}</p>
      <img :src="product.imageUrl" :alt="product.name" class="product-card"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

          products: [
              {
                  "id": "1",
                  "name": "Samsung S22",
                  "price": "2999.99",
                  "description": "Pantalla 6.8 Quad HD+ Amoled (120hz). Memoria interna 256GB. Memoria RAM 12GB. Cámara trasera cuadruple 108+12+10+10MP con IOS (estabilizacion optica). Cámara frontal 40MP",
                  "imageUrl": "https://realplaza.vtexassets.com/arquivos/ids/31152340-1200-auto?v=638060430332370000&width=1200&height=auto&aspect=true"
              },
              {
                  "id": "2",
                  "name": "Samsung S21 Ultra",
                  "price": "2499.99",
                  "description": "256GB de Memoria Interna. 12GB de RAM. Pantalla 6.8 pulgadas. Batería de 5000mAh. Cámara Trasera 108+10+10+12MPx. Cámara Frontal 40 mpx.",
                  "imageUrl": "https://realplaza.vtexassets.com/arquivos/ids/31036480-1200-auto?v=638048171142630000&width=1200&height=auto&aspect=true"
              },
              {
                  "id": "3",
                  "name": "Samsung Galaxy A73",
                  "price": "1999.90",
                  "description": "Pantalla Super AMOLED de 6.7 pulgadas con tasa de refresco de 120Hz y potenciado por un procesador Snapdragon 778G con 8 GB de RAM y 256GB de almacenamiento.",
                  "imageUrl": "https://realplaza.vtexassets.com/arquivos/ids/32237154-1200-auto?v=638140665691370000&width=1200&height=auto&aspect=true"
              },
              {
                  "id": "4",
                  "name": "iPhone 11 64GB ",
                  "price": "2199.90",
                  "description": "Un iPhone que buscará de nuevo convertirse en el más interesante para quienes busquen la experiencia de iOS a un precio de partida más asumible con su pantalla de 6,1 pulgadas",
                  "imageUrl": "https://realplaza.vtexassets.com/arquivos/ids/22772395-1200-auto?v=637860103115000000&width=1200&height=auto&aspect=true"
              },
              {
                  "id": "5",
                  "name": "Laptop Acer Aspire 15.6",
                  "price": "1499.90",
                  "description": "Laptop marca Acer Aspire de 15.6 pulgadas Intel Core i3 1005G1 con 8GB RAM DDR4 y 512GB SSD, esto agilizara tus tareas diarias y te permitirá almacenar todo lo que necesites.",
                  "imageUrl": "https://realplaza.vtexassets.com/arquivos/ids/31277110-1200-auto?v=638073295359770000&width=1200&height=auto&aspect=true"
              },
              {
                  "id": "6",
                  "name": "Laptop Gamer Acer Nitro 5",
                  "price": "2899.90",
                  "description": "Laptop Gamer Acer Nitro 5 15.6\" Intel Core i5 11400H 8GB RAM 1TB HDD + 256GB SSD GTX 1650 4GB Video, esto agilizara tus trabajos y en los videojuegos te dará una experiencia única.",
                  "imageUrl": "https://realplaza.vtexassets.com/arquivos/ids/29913647-1200-auto?v=637957478142600000&width=1200&height=auto&aspect=true"
              }
          ],

    };
  },

};
</script>
<style>

.product-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: black;
  background-color: #fff;
  border-bottom: 2px solid black;
}
.add-button {
  position: absolute;
  bottom: 10px;
  padding: 10px;
  width:75%;
  background-color: #673ab7;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
}
.product-card {

  width: 300px;
  margin: 10px;
  color: black;
}
.product-container:last-of-type {
  border-bottom: none;
}

</style>