//ТЕСТОВАЯ ФУНКЦИЯ ДЛЯ ПРОВЕРКИ РАБОТОСПОСОБНОСТИ ПРОГРАММЫ Auto.js

//ПОИСК ИЗОБРАЖЕНИЯ НА ЭКРАНЕ

auto(); //Проверка, что включены все необходимые разрешения для auto.js

//Поиск и клик по изображению
//Передаём: путь файла образца, время поиска, click
//Если clicker = 'clicker', то будет произведен клик по найденному изображению
//Если click = 'find', то будет только поиск изображения на экране
//quality - точность поиска от 0 до 1

var Find_Click_Image = {}; //Создаём список для хранения функций

Find_Click_Image.Find_Click_Image = function(path, wait, clicker, quality) {
       
    var result = false; //возвращает результат поиска изображения
    
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
                                
                result = click(p.x + sample.getWidth() / 2, p.y + sample.getHeight() / 2);
                sleep(2000); //пауза обязательно!
                    
                //На всякий случай один раз проверяем, что кнопка исчезла
                //Если не исчезла, то кликаем по ней снова
                p = findImage(images.captureScreen(), sample, {
                //region: [0, 50],
                threshold: quality
                });
                if (p){
                    click(p.x + sample.getWidth() / 2, p.y + sample.getHeight() / 2);    
                }
                
                



                
            }
           
        }
        startTime = new Date();
    }
   
    return result;
}






var options = ["Вертикальный", "Горизонтальный"]
var i = dialogs.select("Выберите ориентацию экрана", options);

sleep(1000); //Пауза

if(i >= 0){
    if (options[i]=="Вертикальный"){
        requestScreenCapture(true); //Разрешение на получение снимков вертикального экрана
    }
    if (options[i]=="Горизонтальный"){
        requestScreenCapture(false); //Разрешение на получение снимков горизонтального экрана
    }
}else{
    toast("Вы ничего не выбрали! Ориентация горизонтальная!");
    requestScreenCapture(false); //Разрешение на получение снимков горизонтального экрана
}




result = Find_Click_Image.Find_Click_Image('sample.jpg',5,'clicker',0.9); 

if (result){
    alert("Изображение найдено !");
}else{
    alert("Изображение не найдено !");
}