import exemplu from '../exempluwishlist.json'
let i=1
export function Adauga(){
    
    exemplu.push({numewish:"alt wishlist "+i})
    i++
    //console.log(exemplu)
    //console.log("asdf")
    return exemplu;
}

export function Afiseaza(){
    //console.log("asddff")
    return exemplu;
}
export default {Adauga,Afiseaza};
