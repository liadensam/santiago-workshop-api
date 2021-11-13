async function update() {
  //get the form
  const form = event.target;

  //connect to the API
  //you are in your local machine pointing to my server that is in another machine. corse error
  const conn = await fetch(
    "https://coderspage.com/iceland/update-item",
    {
      method: "POST",

      //send data to the API (user_name, password)
      body: new FormData(form),

      // headers: {
      //   'Access-Control-Allow-Origin':'*'
      // } 
    }
  );

  //get the response back
  //const response = await conn.text();
  const response = await conn.json();
  console.log(response);

  // //check the response (ok or error)

  // if (!conn.ok) {
  //   //if the response is wrong, then show the user message
  //   alert("some problem with updating the item");
  //   return;
  // }
  // //if the response is ok, then show sth nice to the user
  // alert("item not updated");
}