
auto();
requestScreenCapture(true); //Разрешение на получение снимков экрана

const Find_Click_Image = require('Find_Click_Image.js'); //Подключаем функцию поиска изображений из файла

var CarSelect = {}; //Создаём список для хранения функций

CarSelect.Car_Select_World_Series = function(league, prevLeague){

    // Обязательная пауза, чтобы автомобили успели выравняться
    sleep(2000);      

    //Функция поиска на экране любого автомобиля по изображениям из указанной папки
    var result = false;   
    function findCarDir(pathDIR){

        var fil = files.listDir(pathDIR);
        var fff = '';
        for (let i = 0; i < fil.length; i++) {
            fff = pathDIR+'/'+fil[i];
            
            if (Find_Click_Image.Find_Click_Image(fff, 1, 'clicker', 0.98)){
                result = true;
                toast('SELECT '+ fil[i]);
                sleep(2000); 
                break;
            }else{
                result = false;
            }
        }
        return result;
    }

    

    if (league=='PLATINUM'){
       
        //Если предыдущая лига была другой
        if (prevLeague!='PLATINUM'){
            //Нажимаем на значок PLATINUM и двигаемся в прямом направлении
            if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/PLATINUM.jpg', 3, 'clicker', 0.8)){
                toast('CAR SELECT PLATINUM...');
                sleep(3000);
            }
        }

        //Поиск автомобилей
        if (findCarDir('BUTTONS/CARSELECT/CLASSIC/A')){
            result = true;
        }else{
            //Если не нашли автомобиль, то нажимаем на значок ЛИГИ и пытаемся найти сначала
            
            if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/PLATINUM.jpg', 3, 'clicker', 0.8)){
                toast('CAR SELECT PLATINUM...');
                sleep(3000);
            }

            //Ищем автомобиль по изображениям из папки
            result = findCarDir('BUTTONS/CARSELECT/CLASSIC/A');           
        }
        
        if (result){
            league='PLATINUM';
            prevLeague='PLATINUM';
            
        } else{
            league='GOLD';
            prevLeague='PLATINUM';           
        }
    }

    if (league=='GOLD'){

        //Если предыдущая лига была другой
        if (prevLeague!='GOLD'){
            //Нажимаем на значок PLATINUM и двигаемся в прямом направлении
            if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/GOLD.jpg', 3, 'clicker', 0.8)){
                toast('CAR SELECT GOLD...');
                sleep(3000);
            }
        }

        //Поиск автомобилей
        if (findCarDir('BUTTONS/CARSELECT/CLASSIC/B')){
            result = true;
        }else{
            //Если не нашли автомобиль, то нажимаем на значок ЛИГИ и пытаемся найти сначала
            
            if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/GOLD.jpg', 3, 'clicker', 0.8)){
                toast('CAR SELECT GOLD...');
                sleep(3000);
            }

            //Ищем автомобиль по изображениям из папки
            result = findCarDir('BUTTONS/CARSELECT/CLASSIC/B');           
        }
        
        if (result){
            league='GOLD';
            prevLeague='GOLD';
            
        } else{
            league='SILVER';
            prevLeague='GOLD';           
        }
    }


    if (league=='SILVER'){

        //Если предыдущая лига была другой
        if (prevLeague!='SILVER'){
            //Нажимаем на значок PLATINUM и двигаемся в прямом направлении
            if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/SILVER.jpg', 3, 'clicker', 0.8)){
                toast('CAR SELECT SILVER...');
                sleep(3000);
            }
        }

        //Поиск автомобилей
        if (findCarDir('BUTTONS/CARSELECT/CLASSIC/C')){
            result = true;
        }else{
            //Если не нашли автомобиль, то нажимаем на значок ЛИГИ и пытаемся найти сначала
            
            if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/SILVER.jpg', 3, 'clicker', 0.8)){
                toast('CAR SELECT SILVER...');
                sleep(3000);
            }

            //Ищем автомобиль по изображениям из папки
            result = findCarDir('BUTTONS/CARSELECT/CLASSIC/C');   
            
            toast('РЕЗУЛЬТАТ ФИНАЛЬНЫЙ='+result);
            sleep(3000);
        }
        
        if (result){
            league='SILVER';
            prevLeague='SILVER';
            
        } else{
            league='BRONZE';
            prevLeague='SILVER';           
        }
    }  



    if (league=='BRONZE'){

        //Если предыдущая лига была другой
        if (prevLeague!='BRONZE'){
            //Нажимаем на значок Bronze и двигаемся в прямом направлении
            if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/BRONZE.jpg', 3, 'clicker', 0.8)){
                toast('CAR SELECT BRONZE...');
                sleep(3000);
            }
        }

        //Поиск автомобилей
        if (findCarDir('BUTTONS/CARSELECT/CLASSIC/D')){
            result = true;
        }else{
            //Если не нашли автомобиль, то нажимаем на значок ЛИГИ и пытаемся найти сначала
            
            if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/BRONZE.jpg', 3, 'clicker', 0.8)){
                toast('CAR SELECT BRONZE...');
                sleep(3000);
            }

            //Ищем автомобиль по изображениям из папки
            result = findCarDir('BUTTONS/CARSELECT/CLASSIC/D');           
        }
        
        if (result){
            league='BRONZE';
            prevLeague='BRONZE';
            
        } else{
            league='FALSE';
            prevLeague='BRONZE';           
        }
    }    


//toast("CAR_SELSECT "+result);
sleep(1000);

return result;
}



CarSelect.Car_Select_Limited = function(){

    // Обязательная пауза, чтобы автомобили успели выравняться
    sleep(2000);      

    //Функция поиска на экране любого автомобиля по изображениям из указанной папки
    var result = false;   
    function findCarDir(pathDIR){

        var fil = files.listDir(pathDIR);
        var fff = '';
        for (let i = 0; i < fil.length; i++) {
            fff = pathDIR+'/'+fil[i];
            
            if (Find_Click_Image.Find_Click_Image(fff, 1, 'clicker', 0.98)){
                result = true;
                toast('SELECT '+ fil[i]);
                sleep(2000); 
                break;
            }else{
                result = false;
            }
        }
        return result;
    }
    
    //Поиск автомобилей
    if (findCarDir('BUTTONS/CARSELECT/LIMITED')){
        result = true;
    }else{

        //Если не нашли автомобиль, то нажимаем на значок ЛИГИ и пытаемся найти сначала
        if (Find_Click_Image.Find_Click_Image('BUTTONS/CARSELECT/LEAGUE/NOVICE.jpg', 3, 'clicker', 0.8)){
            toast('CAR SELECT NOVICE...');
            sleep(3000);
        }

        //Ищем автомобиль по изображениям из папки
        result = findCarDir('BUTTONS/CARSELECT/LIMITED');           
    }

sleep(1000);

return result;
}






//Экспортируем функцию, чтоб её можно было вызвать из других файлов
module.exports = CarSelect;

//Используем для проверки. Необходимо закомментировать module.exports
//CarSelect.CarSelect("BRONZE","BRONZE");