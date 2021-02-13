/*Task 4

Solving problems using array functions on rest countries data.

• Get all the countries from Asia continent / "region" using Filter function

• Get all the countries with population of less than 2 lacs using Filter function

• Print the following details name, capital, flag using forEach function

• Print the total population of countries using reduce function 

• Print the country which uses US Dollars as currency*/

//Creating request variable
var request = new XMLHttpRequest();

//creating connection
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);

//sending the request
request.send();

//process and load the response
request.onload = function(){
    var data = JSON.parse(this.response);
    //console.log(data);

    //Get all the countries from Asia continent / "region" using Filter function
    console.log('Countries in Asia region are as follows:')
    var countriesInAsia = data.filter((country)=>(country.region == 'Asia'));
    console.log(countriesInAsia);

    //Get all the countries with population of less than 2 lacs using Filter function
    console.log('Countrie with population less than 2 lacs are as follows:')
    var countriesWithLessPopulation = data.filter((country)=>(country.population < 200000));
    console.log(countriesWithLessPopulation);

    //Print the following details name, capital, flag using forEach function
    data.forEach(country => {
        console.log(country.name + ', ' + country.capital + ', ' + country.flag);
    });

    //Print the total population of countries using reduce function.
    var totalPopulation = data.reduce((sum, country) => (sum += country.population), 0)
    console.log('Total population of 250 REST countries is: ' + totalPopulation);

    //Print the country which uses US Dollars as currency
    console.log('Countries using US Dollars are as follows:');
    data.forEach((country) =>{
        let currencyArray = country.currencies;
        let flag = false;
        currencyArray.forEach((item) => {
            if(item.code == 'USD')
                flag = true;
        });
        if(flag){
            console.log(country.name);
        }
    });
}