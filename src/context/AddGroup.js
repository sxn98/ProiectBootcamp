import exemplu from '../exemplu.json'
export function Adauga(){
    exemplu.push({numegrup:"alt grup"})
    console.log(exemplu)
    console.log("asdf")
    return exemplu;
}

export function Afiseaza(){
    console.log("asddff")
    return exemplu;
}
export default {Adauga,Afiseaza};
