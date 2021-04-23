//ПОИСК ИЗОБРАЖЕНИЯ НА ЭКРАНЕ

auto();
requestScreenCapture(true); //Разрешение на получение снимков экрана

var Find_Click_Image = {}; //Создаём список для хранения функций

//Поиск и клик по изображению
//Передаём: путь файла образца, время поиска, click
//Если clicker = 'clicker', то будет произведен клик по найденному изображению
//Если click = 'find', то будет только поиск изображения на экране
//quality - точность поиска от 0 до 1

Find_Click_Image.Find_Click_Image = function(path, wait, clicker, quality) {
       
    var result = false;
    
    var sample = images.read(path); //Считываем образец изображения
    
    //var imaGe = images.captureScreen(); //Загружаем скриншот в переменную
    //images.save(imaGe, "screen.png", "png", 100); //Сохраняем скриншот в файл для контроля

        
    var startTime = new Date(); //Получаем текущее время
    var stopTime = new Date(startTime); //Получаем текущее время
    stopTime.setSeconds(stopTime.getSeconds() + wait); // Увеличиваем время на несколько секунд

    
    var p = null;
    while (startTime < stopTime && !p) {
        //Поиск кнопки на экране
        p = findImage(images.captureScreen(), sample, {
            //region: [0, 50],
            threshold: quality
        });

        //Если кнопка найдена
        if (p) {

            result = true; //Если надо только найти изображение

            
            //Если надо кликнуть по кнопке
            if (clicker == 'clicker') {
                                
                result = click(p.x + (sample.getWidth()) / 2, p.y + sample.getHeight() / 2);
                sleep(2000); //пауза обязательно!
                    
                //На всякий случай один раз проверяем, что кнопка исчезла
                //Если не исчезла, то кликаем по ней снова
                p = findImage(images.captureScreen(), sample, {
                //region: [0, 50],
                threshold: quality
                });
                if (p){
                    click(p.x + (sample.getWidth()) / 2, p.y + sample.getHeight() / 2);    
                }
                
                



                
            }
           
        }
        startTime = new Date();
    }
   
    return result;
}

module.exports = Find_Click_Image;

//Используем для проверки. Необходимо закомментировать ЭКСПОРТ
//Find_Click_Image.Find_Click_Image('BUTTONS/sample.jpg',5,'clicker',1); 

//Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/C/07_DodgeChallenger.jpg', 5, 'clicker', 0.95);