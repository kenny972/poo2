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

// FurieHeadbutt attaque Monster
alert(perso2.name+" "+" is attacking Monster")

// Monster subit l'attaque et perd des points
alert(perso1.health = perso1.health - 40 + ": It's a blow to monster");

// Monster est furieux et il contre-attaque
alert(perso1.name +" He's furious ! It launches its power attack: "+ perso1.attack);

// FurieHeadbutt esquive l'attaque et concerve ses points
alert(perso2.name + " He dodges the attack and keeps its health: "+ perso2.health);

// Monster abandonne le combat
alert(perso1.name +" is afraid of " + perso2.name + " . He abandons the fight");

// FurieHeadbutt remporte le combat
alert(perso2.name+ " he's the winner");






// Créez un constructeur qui permet de créer un guerrier.
// Ce constructeur initialisera un objet avec les caractéristiques suivantes :
// - Un nom (string) -
//  Une valeur d'attack (number) -
//   Une valeur de défense (number) -
//    Une valeur de santé (number) -
//     Une méthode combat qui permet de réduire la vie de la cible
 // selon la valeur de l'attaque du combattant



