
function getDayName(dayNumber)
{
    let dayNames = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    if (dayNumber >= 1 && dayNumber <= 7) 
    {
        return dayNames[dayNumber - 1];
    }
    else
    {
        return "Неверный номер недели!";
    }
}
let dayNumber = 3;
let dayName = getDayName(dayNumber);
console.log(dayName); //Среда