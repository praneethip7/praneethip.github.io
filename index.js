function getDetails(){

    var city = document.getElementById('city').value;
    var api = "&APPID=4e8fe55b900263c5f83603ed631e15ad";
    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q='+city+api,
        success: function(data){
            console.log(data);
            document.getElementById('name').innerHTML=JSON.stringify(data.weather);
        },
        error:function(error){
            console.log(error);
        }
        
    })
}