import exemplu from '../exemplu.json'
let i=1
export function Adauga(){
    exemplu.push({numegrup:"alt grup "+i})
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
