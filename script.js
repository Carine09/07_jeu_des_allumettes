/*On décrit le jeu des allumettes : au départ, il y a un tas de 50 allumettes, (ou tout autre objet : cailloux, jetons, . . .). Chacun à son tour, les deux joueurs ôtent obligatoirement entre 1 et 6 allumettes. Celui qui ôte la dernière allumette gagne.

Etape 1
Faire une fonction qui prend en paramètre le nombre d'allumettes à enlever du reste.

Pour rappel, une nom de fonction doit décrire clairement ce que fait celle-ci.

Étape 2
Demander a l'utilisateur combien d'allumettes il souhaite retirer tant qu’il y a des allumettes dans le tas. Pour rappel, on a 50 allumettes au départ.

Étape 3
Limiter le nombre d’allumettes à pouvoir être retirées de 1 à 6.

Ajouter a votre jeu la notion de victoire.

Étape 4
Rajouter un 2eme joueur à votre jeu.

Étape 5
Proposer un mode multi-joueur. Demander à l’utilisateur, combien il y a de joueur et gérer la partie en conséquence.*/

let matchesAvalaible = 50; // nombre d'allumettes à enlever du reste
const choiceNumberRemove1 = document.querySelector("#matchesRemove");
const sendButton1 = document.querySelector("#sendNumberMatches");

function askPlayer() {
    let howManyMatches = parseInt(window.prompt("Combien d'allumettes voulez-vous retirer?"));
    return howManyMatches;
}

function howManyMatchesAvailable(currentMatchesToPrint) {
    alert(`il reste ${currentMatchesToPrint}`);
}

function youWin() {
    alert("Tu as gagné");
}

function removeMatches(currentMatchesAvalaible) {
    while (currentMatchesAvalaible > 0) {
        let howManyMatchesRemove = askPlayer(); /* la variable enregistre un résultat alors que la fonction permet de générer un autre résultat*/
        currentMatchesAvalaible -= howManyMatchesRemove;
        console.log(currentMatchesAvalaible, howManyMatchesRemove)
        howManyMatchesAvailable(currentMatchesAvalaible);
        // howManyMatchesRemove = askPlayer(); /* générer un autre réponse, on réatribue une nouvelle valeur pour qu'elle boucle avec cette nouvelle valeur*/
    }
    youWin();
    return currentMatchesAvalaible;
}

matchesAvalaible = removeMatches(matchesAvalaible);
console.log();