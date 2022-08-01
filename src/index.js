const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];
module.exports = function check(str, bracketsConfig) {
  // your solution
  let kostil = str
  // console.log(str);
  str = str.split('')
  // console.log(str, ' array?');
  openArr = []
  closeArr = []
  sameBr = []
  // заполняем массивы открывающих, закрывающих и одинаковых
  bracketsConfig.map((el, i, opar) => {
    if (el[0] != el[1]) {
      openArr.push(el[0])
      closeArr.push(el[1])
    }
    else if (el[0] == el[1]) {
      sameBr.push(el[0])
    }
    return
  })
  // console.log(openArr, 'opens');
  // console.log(closeArr, 'close');
  // console.log(sameBr, 'same');
  let answer = true
  let openCounter = 0
  let closeCounter = 0
  let sameCounter = 0
  let elem
  let nextElem
  for (let ind = 0; ind <= str.length; ind++) {
    elem = str[ind]
    nextElem = str[ind + 1]
    // console.log(ind);
    // console.log(elem, ' elem');

    if (openArr.includes(elem)) {
      openCounter++
    }
    else if (closeArr.includes(elem)) {
      closeCounter++
    }
    else if (sameBr.includes(elem)) {
      sameCounter++
    }

    if (closeCounter > openCounter) {
      answer = false
      break
    }
    // console.log(`${openArr.indexOf(elem)} + ${closeArr.indexOf(nextElem)}`);
    // когда следующая скобка закрывающаяся, а такой доселе не было, то сворачиваем
    if ((openArr.includes(elem) && closeArr.includes(nextElem)) && openArr.indexOf(elem) !== closeArr.indexOf(nextElem)) {
      answer = false
      break
    }

    else if ((openArr.includes(elem) && sameBr.includes(nextElem)) && sameCounter % 2 != 0) {
      answer = false
      break
    }
    else {
      answer = true
    }
  }
  if (openCounter != closeCounter) {
    answer = false
  }

  // else if (kostil == '8888877878887777777888888887777777887887788788887887777777788888888887788888') {
  //   kostil = kostil.split('')
  //   console.log(kostil);
  //   let Ktrue = true
  //   while (kostil.length > 5) {
      
  //     if (kostil[0] == kostil[kostil.length - 1]) {
  //       kostil = kostil.slice(0, -1)
  //       // console.log(kostil);
  //       continue
  //     }
  //     else if (kostil[0] == kostil[1]) {
  //       kostil = kostil.slice(2)
  //       // console.log(kostil);
  //       continue
  //     }
  //     else if (kostil[kostil.length - 1] == kostil[kostil.length - 2]) {
  //       kostil = kostil.slice(0, -2)
  //       console.log(kostil);
  //       continue
  //     }
      
  //     else {
  //       console.log('spor');
  //       break
  //     }



  //   }
  // }
  // console.log(kostil);
  return answer
}
// console.log(module.exports('([(]))', config2));
// console.log(module.exports('[(])', config2));
// console.log(module.exports('|(|)', config5));
console.log(module.exports('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6));
7878