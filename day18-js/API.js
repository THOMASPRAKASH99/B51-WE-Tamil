let covidIndia = new Promise ((resolve,reject)=>{
    let covid = new XMLHttpRequest();
    covid.open("GET","https://data.covid19india.org/v4/min/timeseries.min.json");
    covid.send();
    covid.onload = function(){
        if(covid.status==200){
            let data = JSON.parse(covid.response)
         resolve(data)   
        }
        else{
            reject("error page not found")
        }
    }
})
covidIndia.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})