let removeSpaces = (str) => {
    let formatedStr = str.replace(/\s+/g, '')
  
    return formatedStr
  }
  
  console.log(removeSpaces('teste de retirada do espaço'));
