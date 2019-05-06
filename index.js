function getDetails(){
    console.log('Im here');
    
    var city = document.getElementById('city').value;
    console.log('Im here' + city);

    $.ajax({
        url:'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=4e8fe55b900263c5f83603ed631e15ad',
        success: function(data){
            console.log(data);
            document.getElementById('name').innerHTML=JSON.stringify(data);
        },
        error:function(error){
            console.log(error);
        }
        
    })
}