requestScreenCapture(true); //Разрешение на получение снимков экрана

const Find_Click_Image = require('Find_Click_Image.js'); //Подключаем функцию поиска изображений из файла

var Run = {}; //Создаём список для хранения функций

Run.Run = function(number, StartTime){

    var result = false;
    var time = 5;

    //Нажимаем на кнопку TouchON
    if (Find_Click_Image.Find_Click_Image('BUTTONS/RUN/TouchON.jpg', time, 'clicker', 0.8)) {
        toast('TouchON');
        time = 5;
    } else {
        time = 2;
    }

    //Нажимаем на кнопку PLAY
    if (Find_Click_Image.Find_Click_Image('BUTTONS/RUN/Play.jpg', time, 'clicker', 0.8)) {
        toast('PLAY GAME');
        result = true;


        //ЖДЁМ ПОЯВЛЕНИЯ СМАЙЛИКА В ТЕЧЕНИЕ 80 секунд
        if (Find_Click_Image.Find_Click_Image('BUTTONS/RUN/Smail.jpg', 80, 'find', 0.8)){

            var startTime = new Date(); //Получаем текущее время
            var stopTime = new Date(); //Получаем текущее время
            stopTime.setSeconds(stopTime.getSeconds()+150); // Максимальное время гонки 150 секунд
        
            //Идёт игра
            while (startTime<stopTime && Find_Click_Image.Find_Click_Image('BUTTONS/RUN/Smail.jpg', 10, 'find', 0.8)){
                toast('GAME № ' + number);
                
                //Свайп вправо
                swipe(1500,400,1800,400,300);

                //Двойное нитро
                click(1800,400);
                click(1800,400);
                
                //Пауза
                sleep(2700);

                //Время в игре
                var duration = new Date() - StartTime;
                
                var seconds = Math.floor((duration / 1000) % 60),
                    minutes = Math.floor((duration / (1000 * 60)) % 60),
                    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

                hours = (hours < 10) ? "0" + hours : hours;
                minutes = (minutes < 10) ? "0" + minutes : minutes;
                seconds = (seconds < 10) ? "0" + seconds : seconds;
                  
                toast('GAME TIME: '+hours + " hours " + minutes + " minutes");
                





                //Тормоз
               press(100,400,800);

                //Свайп влево
                swipe(1800,400,1500,400,300);

                //Двойное нитро
                click(1800,400);
                click(1800,400);
                
                //Пауза
                sleep(2700);

                //Тормоз
                press(100,400,800);

                startTime = new Date();
            }

      
        } 

    } else { //Если не получилось нажать на кнопку PLAY
        result = false;
    }

    return result;
}


//Экспортируем функцию, чтоб её можно было вызвать из других файлов
module.exports = Run;

//Используем для проверки. Необходимо закомментировать module.exports
//Run.Run(1);