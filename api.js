async function getdata(params) {
    const response = await fetch ("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_dm4Y4uy3EHPi8qHCkB1ZvVMnyE896vvK7jHadaC1",{
        method : "GET"}
    )
    //the methods must be inside the js object 
    // common methods of api : get , post , put , delete 
    // get : to get the data from the url 
    // put : to update the existing data 
    // post : upload the new data 
    // delete : delete the existing data  

    // other important options are  : headers , body (AAHILE CHAINDAINA COMPLEX CHHA HALAKA AUTHENTICATION LAUDA SHIT HARU CHHA YESMA YO PACHI HERAMLA PROJECT BANAUDA)


    const result = await response.json()
    console.log(result)
    const authe = result?.data?.USD??"Data Not available" // optional chaining to get the value 
    console.log(authe)
}
getdata()