import exemplu from '../exemplu.json'

export function Adauga(nume){
    exemplu.push({numegrup:"alt user "+nume})

    //console.log(exemplu)
    //console.log("asdf")
    return exemplu;
}

export function Afiseaza(){
    //console.log("asddff")
    return exemplu;
}
export default {Adauga,Afiseaza};
