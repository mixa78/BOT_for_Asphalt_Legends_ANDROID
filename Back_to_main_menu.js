auto();
requestScreenCapture(true); //Разрешение на получение снимков экрана

const Find_Click_Image = require('Find_Click_Image.js'); //Подключаем функцию поиска изображений из файла

var Back_to_main_menu = {}; //Создаём список для хранения функций

Back_to_main_menu.Back_to_main_menu = function(){

    //Нажимаем на смартфоне кнопку Back, пока не окажемся в главном меню
    
    wait=1;
    while (true){

                
        sleep(2000); //обязательно ставим паузу       

        app.launchApp("Asphalt 9"); // Запускаем игру, если она ещё не запущена


        //Если найдена кнопка, то выходим из цикла
        if (Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/01_MultiPlayer.jpg', wait, 'find', 0.9)){
            break;
        }
        
        //Если найдена кнопка, то выходим из цикла
        if (Find_Click_Image.Find_Click_Image('BUTTONS/NETWORK/00_MultiPlayer.jpg', wait, 'find', 0.9)){
            break;
        }

        Find_Click_Image.Find_Click_Image('BUTTONS/GameOver/MissOUT.jpg', wait, 'clicker', 0.9)

        Find_Click_Image.Find_Click_Image('BUTTONS/GameOver/CloseProgramm.png', wait, 'clicker', 0.9)

        back(); //Нажимаем на смартфоне кнопку Back
      
    }
   
}


module.exports = Back_to_main_menu;