//ТЕСТОВАЯ ФУНКЦИЯ ДЛЯ ПРОВЕРКИ РАБОТОСПОСОБНОСТИ ПРОГРАММЫ Auto.js
//ДЕЛАЕТ СКРИНШОТ ЭКРАНА И СОХРАНЯЕТ ЕГО В ФАЙЛ screen.png

auto(); //Проверка, что включены все необходимые разрешения для auto.js

var options = ["Вертикальный", "Горизонтальный"]
var i = dialogs.select("Выберите ориентацию экрана", options);

sleep(1000); //Пауза

if(i >= 0){
    if (options[i]=="Вертикальный"){
        requestScreenCapture(true); //Разрешение на получение снимков вертикального экрана

        images.save(captureScreen(),'screen.png', 'png', 100);
        alert('Был успешно сделан скриншот screen.png')
    }
    if (options[i]=="LIMITED SERIES and WORLD SERIES"){
        requestScreenCapture(false); //Разрешение на получение снимков горизонтального экрана

        images.save(captureScreen(),'screen.png', 'png', 100);
        alert('Был успешно сделан скриншот screen.png')
    }
}else{
    toast("Вы ничего не выбрали! Программа завершена!");
}