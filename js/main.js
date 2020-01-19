let ArrayRoli = {1:"Городничий",2:"Квартальный",3:"Бобчинский"};
let ArrayActionGorodnichiy = ["Что, дрожки там стоят?","Ступай на улицу... или нет, постой! Ступай принеси... Да другие-то где? неужели ты только один? Ведь я приказывал, чтобы и Прохоров был здесь. Где Прохоров?", " Как так?", "Ах, Боже мой, Боже мой! Ступай скорее на улицу, или нет — беги прежде в комнату, слышь! и принеси оттуда шпагу и новую шляпу. Ну, Петр Иванович, поедем!","Нет, нет, Петр Иванович, нельзя, нельзя! Неловко, да и на дрожках не поместимся.","Беги сейчас возьми десятских, да пусть каждый из них возьмет... Эк шпага как исцарапалась! Проклятый купчишка Абдулин — видит, что у городничего старая шпага, не прислал новой. О, лукавый народ! А так, мошенники, я думаю, там уж просьбы из-под полы и готовят. Пусть каждый возьмет в руки по улице... черт возьми, по улице — по метле! и вымели бы всю улицу, что идет к трактиру, и вымели бы чисто... Слышишь! Да смотри: ты! ты! я знаю тебя: ты там кумаешься да крадешь в ботфорты серебряные ложечки, — смотри, у меня ухо востро!.. Что ты сделал с купцом Черняевым — а? Он тебе на мундир дал два аршина сукна, а ты стянул всю штуку. Смотри! не по чину берешь! Ступай!"];
let ArrayActionKvartalnuy = ["Стоят.","Прохоров в частном доме, да только к делу не может быть употреблен.", "Да так: привезли его поутру мертвецки. Вот уже два ушата воды вылили, до сих пор не протрезвился.", ""];
let ArrayBobchinskiy = [" И я, и я... позвольте и мне, Антон Антонович!","Ничего, ничего, я так: петушком, петушком побегу за дрожками. Мне бы только немножко в щелочку-та, в дверь этак посмотреть, как у него эти поступки..."];
let ResArray;

    ResArray = {1:ArrayActionGorodnichiy[0],2: ArrayActionKvartalnuy[0],3: ArrayActionGorodnichiy[1],4: ArrayActionKvartalnuy[1], 5: ArrayActionGorodnichiy[2], 6: ArrayActionKvartalnuy[2], 7: ArrayActionGorodnichiy[3],8: ArrayBobchinskiy[0],9:ArrayActionGorodnichiy[4], 10:ArrayBobchinskiy[1], 11:ArrayActionGorodnichiy[5]};




console.log(ArrayRoli[1]+": ");
console.log("   "+ResArray[1]);

console.log(ArrayRoli[2]+": ");
console.log("   "+ResArray[2]);


console.log(ArrayRoli[1]+": ");
console.log("   "+ResArray[3]);


console.log(ArrayRoli[2]+": ");
console.log("   "+ResArray[4]);

console.log(ArrayRoli[1]+": ");
console.log("   "+ResArray[5]);

console.log(ArrayRoli[2]+": ");
console.log("   "+ResArray[6]);

console.log(ArrayRoli[1]+": ");
console.log("   "+ResArray[7]);

console.log(ArrayRoli[3]+": ");
console.log("   "+ResArray[8]);

console.log(ArrayRoli[1]+": ");
console.log("   "+ResArray[9]);

console.log(ArrayRoli[3]+": ");
console.log("   "+ResArray[10]);

console.log(ArrayRoli[1]+": ");
console.log("   "+ResArray[11]);


    let ActorG_ = [ArrayRoli[1], ...ArrayActionGorodnichiy];
    let ActorK_ = [ArrayRoli[2], ...ArrayActionKvartalnuy];
    let ActorB_ = [ArrayRoli[3], ...ArrayBobchinskiy];

console.log("\n");

for(let item of ActorG_)
{
    console.log(item);
}
console.log("\n");
for(let item of ActorK_)
{
    console.log(item);
}
console.log("\n");
for(let item of ActorB_)
{
    console.log(item);
}




























