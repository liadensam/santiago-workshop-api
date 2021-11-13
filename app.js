
page = 1

async function get_items() {
  //connect to the API
  /*we do not need second argument in th fetch, method GET is by deault and we are not pasing any data*/

  //two ways how to do it when we add page
  // const conn = await fetch("https://ecuaguia.com/iceland/api-get-items?page=" + page)

  const conn = await fetch(`https://ecuaguia.com/iceland/api-get-items?page=${page}`)

  //get the data from the API
  const response = await conn.json()
  console.log(response)


  //const item = {"id":10, "name":"xxxxxx"}
  /*we do not need to use the hradcoded line above, just for better understanding*/

  //for each loop
  //for each item we created this div
  response.forEach( item => {
    let final_price = item.price + (item.price * 24.50)/100
    final_price = final_price.toFixed(2)
    let div_item = /*html*/
                `<div class="item">
                    <div>${item.id}</div>
                    <div>${item.name}</div>
                    <img src = "${`https://ecuaguia.com/iceland/images/${item.image}`}" alt = "blue lagoon" width = 300>
                    <div class = "final_price">${final_price}
                    </div> 
                  </div>`
      document.querySelector("#items").insertAdjacentHTML("beforeend", div_item)

  });
  //page = page + 1
  page++

}

get_items()

