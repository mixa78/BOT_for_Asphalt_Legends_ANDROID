// Это главный файл программы
// Отсюда запускаем бота!

auto(); //Проверка, что включены все необходимые разрешения для auto.js

requestScreenCapture(true); //Разрешение на получение снимков экрана 

const Find_Click_Image = require('Find_Click_Image.js'); //Подключаем функцию поиска изображений из файла

const MultiPlayer = require('MultiPlayer.js'); //Подключаем функцию запуска сетевой игры

const CarSelect = require('CarSelect.js'); //Подключаем функцию выбора автомобиля

const Run = require('RunGame.js'); //Подключаем функцию запуска гонки

const Back_to_main_menu = require('Back_to_main_menu.js'); //Подключаем функцию "Вернуться в главное меню"


var GAME_number = 1;
var wait = 5;
var StartTime = new Date(); //Получаем текущее время
var ErrorsRUN = 0;
var prevLeague = "FALSE";
var league = "BRONZE";
var Multi_PLAYER = 'World Series'; //Мировая серия - сетевая игра (верхняя сетка)




/* 
---------------  Диалог с выбором сетевой игры  ---------------------------------

Выбраем следующие варианты:

"WORLD SERIES" - Катаем только в верхней сетке "WORLD SERIES"

"LIMITED SERIES and WORLD SERIES" - Сначала катаем в нижней сетке до тех пор, 
пока не закончится заправка у машин.
А затем переходим в верхнюю сетку и катаем в ней до упора.
*/


var options = ["WORLD SERIES", "LIMITED SERIES and WORLD SERIES"]
var i = dialogs.select("Please select an option", options);
if(i >= 0){
    if (options[i]=="WORLD SERIES"){
        Multi_PLAYER = 'World Series';//Классическая сетевая игра
        toast('World Series')
    }
    if (options[i]=="LIMITED SERIES and WORLD SERIES"){
        Multi_PLAYER = 'Limited'; //Ограниченная сетевая игра и Классическая сетевая игра
        toast('LIMITED SERIES and WORLD SERIES')
    }
}else{
    toast("Вы ничего не выбрали! Катаем в верхней сетке");
    Multi_PLAYER = 'World Series';
}

//-------------------------------------------------------------------------------



app.launchApp("Asphalt 9"); // Запускаем игру, если она ещё не запущена

var Menu = 'Back_to_main_menu'; //С этого меню всегда начинаем игру

while (true){

    //Закрываем рекламные окна и переходим в главное меню игры
    if (Menu == 'Back_to_main_menu'){

        /*Если гонка не началась два раза подряд, то включаем звуковую сигнализацию
        Гонка может не начаться два раза подряд по разным причинам, 
        в том числе из-за окончания заправки машин при катании в нижней сетке.
        После сигнализации пробуем катать только в верхней сетке.
        */
        if (ErrorsRUN>1){
            
            toast('ТРЕВОГА!!!');

            //Воспроизведение музыки
            //media.playMusic('alarm.mp3');
            //sleep(media.getMusicDuration());

            Multi_PLAYER = 'World Series'
            
        }
                
        Back_to_main_menu.Back_to_main_menu();
        
        wait=1;
        Menu = Multi_PLAYER;
    }


    //-------------------------------------------------------------------------------
    
    //Классическая сетевая игра
    if (Menu == 'World Series'){

        league = MultiPlayer.Classic(wait);

        if (league != 'FALSE'){
            Menu = 'Car_Select_World_Series';
        }else {
            Menu = 'Back_to_main_menu';
            ErrorsRUN = ErrorsRUN+1;
        }

    }
    
    //Выбор АВТО для сетевой игры Мировая серия
    if (Menu == 'Car_Select_World_Series'){

        if (CarSelect.Car_Select_World_Series(league, prevLeague)){
            
            prevLeague = league; 
            Menu = 'Run';
            ErrorsRUN = 0;
        }else {
            Menu = 'Back_to_main_menu';
            ErrorsRUN = ErrorsRUN+1;
            prevLeague = 'FALSE';
        }

    }


    //-------------------------------------------------------------------------------

    //Ограниченная сетевая игра
    if (Menu == 'Limited'){

        MultiPlayer.Limited();
        
        Menu = 'Car_Select_Limited';

    }


    if (Menu == 'Car_Select_Limited'){

        if (CarSelect.Car_Select_Limited()){
            
            Menu = 'Run';
            ErrorsRUN = 0;
        }else {
            Menu = 'Back_to_main_menu';
            ErrorsRUN = ErrorsRUN+1;
        }

    }

    //-------------------------------------------------------------------------------
    
    
    if (Menu == 'Run'){

        if (Run.Run(GAME_number,StartTime )){
            GAME_number=GAME_number+1;
        }

        toast('GameOver')

        Menu = 'Back_to_main_menu';
   

        if (Run.Run(GAME_number,StartTime )){
            GAME_number=GAME_number+1;
        }

        toast('GameOver')

        Menu = 'Back_to_main_menu';
   }
}
