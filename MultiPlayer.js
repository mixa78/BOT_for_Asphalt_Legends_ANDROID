

requestScreenCapture(true); //Разрешение на получение снимков экрана

const Find_Click_Image = require('Find_Click_Image.js'); //Подключаем функцию поиска изображений из файла

var MultiPlayer = {}; //Создаём список для хранения функций

MultiPlayer.Classic = function(wait) {
    
    toast("Multiplayer CLASSIC");
    //sleep(2000);

    var league = 'FALSE';
    

    if (Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/01_MultiPlayer.jpg', 5, 'clicker', 0.8)) {
        Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/02_WorldSERIES.jpg', 5, 'clicker', 0.8);
    } else {
        Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/02_WorldSERIES.jpg', 5, 'clicker', 0.8);
    }


    if (Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/03_SILVER.jpg', 5, 'find', 0, 0.8)) {
        league = 'SILVER';
    } else if (Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/03_GOLD.jpg', 2, 'find', 0.8)) {
        league = 'GOLD';
    } else if (Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/03_PLATINUM.jpg', 2, 'find', 0.8)) {
        league = 'PLATINUM';
    } else {
        league = 'BRONZE';
    }

    if (Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/04_PLAY.jpg', 5, 'clicker', 0.8)) {
        league = league;
        toast(league + ' LEAGUE');
        //sleep(3000);
    } else {
        league = 'FALSE'
    }

    return league;
}


MultiPlayer.Limited = function() {
    
    toast("Multiplayer LIMITED");
    //sleep(2000);

    
    

    if (Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/01_MultiPlayer.jpg', 5, 'clicker', 0.8)) {
        Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/02_LimitedSERIES.jpg', 5, 'clicker', 0.8);
    } else {
        Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/02_LimitedSERIES.jpg', 5, 'clicker', 0.8);
    }


    

    Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/04_PLAY.jpg', 5, 'clicker', 0.8)
   


    
}









//Экспортируем функцию, чтоб её можно было вызвать из других файлов
module.exports = MultiPlayer;

//Используем для проверки. Необходимо закомментировать module.exports
//MultiPlayer.Classic();