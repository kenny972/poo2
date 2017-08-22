var perso1 = {

    name: "Monster",

    attack: 30,

    health: 71,

    // ceci est la méthode
    méthodFight:  function()
     {alert (this.attack);},


};
alert(perso1.name + " : He has " + perso1.attack + " " + "attack points, " + " "+
perso1.health +
" in health")



var perso2 = {

    name: "FurieHeadbutt",

    attack: 40,

    health: 54,


};
alert(perso2.name + " : He has " + perso2.attack + " " + "attack points, " + " "+
perso2.health +
" in health")


alert(perso2.name+" "+" is attacking Monster")

alert(perso1.health = perso1.health - 40 + ": It's a blow to monster");

alert(perso1.name +" He's furious ! It launches its power attack: "+ perso1.attack);

alert(perso1.name+perso2.name+"they look at each other")





// Créez un constructeur qui permet de créer un guerrier.
// Ce constructeur initialisera un objet avec les caractéristiques suivantes :
// - Un nom (string) -
//  Une valeur d'attack (number) -
//   Une valeur de défense (number) -
//    Une valeur de santé (number) -
//     Une méthode combat qui permet de réduire la vie de la cible
 // selon la valeur de l'attaque du combattant



