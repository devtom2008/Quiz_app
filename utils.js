/*Pour la reccuperation des valeur du localStorage en fonction de la clé*/
function getArrayFromLocalStorage(key) {
    return Array.isArray(JSON.parse(localStorage.getItem(key))) ? JSON.parse(localStorage.getItem(key)) : []
}