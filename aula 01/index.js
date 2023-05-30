const minhaPrimeiraFuncao = (param1, param2) => {
    const arrayOfParams = [param1, param2];

    if (param1 === param2) {
        console.log('param1 é igual param2');
        return;
    }

    arrayOfParams.forEach(param => console.log(param));
}