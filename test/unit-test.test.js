const assert = require('chai').assert;


function addValue(a,b) {
    return a + b;
}

describe("Suite de prueba para curso", ()=>{
    //Aqui los test
    // Funcion: IT
    // Se da una indicación de lo que se espera
    it("should return 4", ()=>{
        let va = addValue(2,2);
        assert.equal(va, 4)
    })
})