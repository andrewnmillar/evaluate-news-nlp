/*async function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit entered");
    const m = await fetch('http://localhost:8081/test')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });
    console.log("handleSubmit done");
}
*/

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")

    fetch(`http://localhost:8081/api-data?input=${formText}`,
    {
        method: 'POST',
        body: JSON.stringify({formText}),
        headers: {"Content-Type": "aplication/json"}
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
    
}

export { handleSubmit }


      


