console.log('Інструкція з використання');
console.log('   Позначення         Що означає');
console.log('leg                   катет');
console.log('hypotenuse            гіпотенуза');
console.log('adjacent angle        прилеглий до катета кут');
console.log('opposite angle        протилежний до катета кут');
console.log('angle                 один з двох гострих кутів(коли задана гіпотенуза)');

var myTriangle = {
    firstleg: 0,
    secondleg: 0,
    hypotenuse: 0,
    adjacent_angle: 0,
    opposite_angle: 0

};

function  triangle(first, first1, second, second1){
    let haveHipotenuse = false;
    if(validationByParams(first, first1, second, second1)){
        haveHipotenuse = getHipotenuseStatus(first, first1, second, second1);
        fillExistParams(first, first1, second, second1);
        console.log("ВАЛІДАЦІЯ ПО ВВОДУ ПРОЙШЛА УСПІШНО");
        if(validationByMath(myTriangle)){
            if(haveHipotenuse){
                getDataWithHypotenuse(myTriangle);
            }
            if(!haveHipotenuse){
                getDataWithoutHipotenuse(myTriangle);

            }

        }
        else{
            console.log("Некорректні дані трикутника, він не є прямокутним")
        }

    }
    myTriangle.firstleg = 0;
    myTriangle.opposite_angle = 0;
    myTriangle.adjacent_angle = 0;
    myTriangle.hypotenuse = 0;
    myTriangle.secondleg = 0;
}


//Валідація по вводу
function validationByParams(first, first1, second, second1){
    if(isParametersCorrect(first, first1, second, second1)){

    }
    else {
        console.log("Параметри введені не в правильному порядку")
        console.log("failed")
        return false;
    }

    if(isSrtingExists(first, first1, second, second1)){

    }
    else{
        console.log("Перевірте чи введені параметри корректні")
        return  false;
    }
    return true;
}
function isParametersCorrect(first, first1, second, second1){
    if(typeof(first) == "number" && typeof (first1) == "string"&& typeof (second) == "number" && typeof(second1) == "string"){
        return true;
    }
    if(typeof(first) == "string" && typeof (first1) == "number"&& typeof (second) == "string" && typeof(second1) == "number"){
        return true;
    }
    return false;
}
function isSrtingExists(first, first1, second, second1){
    let existParams = ["leg","hypotenuse","adjacent angle","opposite angle","angle"];

    let firstParamCorrect = false;
    let secondParamCorrect = false;

    if(typeof(first) == "string"){
        for(let i =0; i<5; i++){
            if(first === existParams[i]){
                firstParamCorrect = true;
            }
            if(second == existParams[i]){
                secondParamCorrect = true;
            }
        }
    }
    else{
        for(let i =0; i<5; i++){
            if(first1 === existParams[i]){
                firstParamCorrect = true;
            }
            if(second1 == existParams[i]){
                secondParamCorrect = true;
            }
        }
    }

    if(firstParamCorrect && secondParamCorrect){
        return true;
    }
    else{
        return  false;
    }

}

function fillExistParams(first, first1, second, second1){
    if(typeof(first) == "string"){
        if(first === "leg"){
            myTriangle.firstleg = first1;
        }
        if(first === "hypotenuse"){
            myTriangle.hypotenuse = first1;
        }
        if(first === "adjacent angle"){
            myTriangle.adjacent_angle = first1;
        }
        if(first === "opposite angle" || first1 === "angle"){
            myTriangle.opposite_angle = first1;
        }
        if(second === "leg"){
            myTriangle.firstleg = second1;
        }
        if(second === "hypotenuse"){
            myTriangle.hypotenuse = second1;
        }
        if(second === "adjacent_angle"){
            myTriangle.adjacent_angle = second1;
        }
        if(second === "opposite angle"|| first1 === "angle"){
            myTriangle.opposite_angle = second1;
        }
    }
    else{
        if(first1 === "leg"){
            myTriangle.firstleg = first;
        }
        if(first1 === "hypotenuse"){
            myTriangle.hypotenuse = first;
        }
        if(first1 === "adjacent angle"){
            myTriangle.adjacent_angle = first;
        }
        if(first1 === "opposite angle"|| first1 === "angle"){
            myTriangle.opposite_angle = first;
        }
        if(second1 === "leg"){
            myTriangle.firstleg = second;
        }
        if(second1 === "hypotenuse"){
            myTriangle.hypotenuse = second;
        }
        if(second1 === "adjacent angle"){
            myTriangle.adjacent_angle = second;
        }
        if(second1 === "opposite angle"|| first1 === "angle"){
            myTriangle.opposite_angle = second;
        }
    }

}
////////


//Перевірка на гіпотенузу
function getHipotenuseStatus(first, first1, second, second1){
    let params = [first, first1, second,second1];
    for(var i = 0; i <4; i++){
        if(params[i] === 'hypotenuse') {
            return true;
        }
    }
    return  false;
}

//Конвертить радіани в градуси
function getGradus(radian){
    return radian * 180/Math.PI;
}
function getRadian(gradus){
    return (gradus * Math.PI)/180;
}



function validationByMath(myTriangle){
    let hipotenuse = myTriangle.hypotenuse;

    if(myTriangle.firstleg > hipotenuse && myTriangle.hypotenuse != 0){
        return false;
    }
    if(getGradus(myTriangle.adjacent_angle) > 90 || getGradus(myTriangle.opposite_angle) > 90){
        return  false;
    }
    if(((getGradus(myTriangle.adjacent_angle) + getGradus(myTriangle.opposite_angle)) != 90) && (getGradus(myTriangle.adjacent_angle) != 0 && getGradus(myTriangle.adjacent_angle) != 0)){
        return false;
    }
    if(getGradus(myTriangle.adjacent_angle) <0 || getGradus(myTriangle.opposite_angle) < 0 || myTriangle.hypotenuse <0 || myTriangle.firstleg <0 || myTriangle.secondleg < 0){
        return false;
    }
    return true;
}





//firstleg - протилежний катет від гіпотенузи
//secondleg - прилеглий катет

//opposite - протилежний від катета кут
//adjansed - прилеглий до катета кут
function getDataWithHypotenuse(triangle)
{
    if(triangle.firstleg != 0){
        triangle.secondleg = Math.sqrt((triangle.hypotenuse * triangle.hypotenuse) - (triangle.firstleg * triangle.firstleg));
       triangle.adjacent_angle = Math.atan(triangle.secondleg/triangle.firstleg);
       triangle.opposite_angle =  Math.atan(triangle.firstleg/triangle.secondleg);
       show(triangle);
        return;
    }
    if(triangle.opposite_angle != 0){
        triangle.adjacent_angle = 90 - getGradus(myTriangle.opposite_angle);
        triangle.firstleg = triangle.hypotenuse * Math.sin(myTriangle.opposite_angle);
        triangle.secondleg = triangle.hypotenuse * Math.sin(getRadian(myTriangle.adjacent_angle));
        show(triangle);
        return;
    }
}
function  getDataWithoutHipotenuse(triangle){
    if(triangle.firstleg != 0 && triangle.secondleg != 0){
        triangle.hypotenuse = Math.sqrt((triangle.firstleg * triangle.firstleg)+(triangle.secondleg * triangle.secondleg));
        triangle.adjacent_angle = Math.atan(triangle.secondleg/triangle.firstleg);
        triangle.opposite_angle =  Math.atan(triangle.firstleg/triangle.secondleg);
        show(triangle);
        return;
    }
    if(triangle.adjacent_angle != 0 && triangle.firstleg != 0){
        triangle.hypotenuse = triangle.firstleg / Math.cos(triangle.adjacent_angle);
        triangle.secondleg = triangle.firstleg * Math.tan(triangle.adjacent_angle);
        triangle.opposite_angle = 90 - getGradus(myTriangle.adjacent_angle);
        show(triangle);
        return;
    }
    if(triangle.opposite_angle != 0 && triangle.firstleg != 0){
        triangle.hypotenuse = triangle.firstleg/Math.sin(triangle.opposite_angle);
        triangle.adjacent_angle = 90 - getGradus(myTriangle.opposite_angle);
        triangle.secondleg = triangle.firstleg * Math.tan(getRadian(myTriangle.adjacent_angle));
        show(triangle);
        return;
    }

}
function show(triangle){
    console.log("Результат:");
    console.log("Гіпотенуза " + triangle.hypotenuse);
    console.log("Протилежний катет" + triangle.firstleg);
    console.log("Прилеглий катет " + triangle.secondleg);
    if(triangle.opposite_angle > 10){
        console.log("Протилежний від катета кут "+ triangle.opposite_angle);
    }
    else{
        console.log("Протилежний від катета кут "+ getGradus(myTriangle.opposite_angle));
    }
    if(triangle.adjacent_angle>10){
        console.log("Прилеглий до катета кут " + triangle.adjacent_angle);
    }
    else{
        console.log("Прилеглий до катета кут " + getGradus(myTriangle.adjacent_angle));
    }

}