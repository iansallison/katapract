function add(n) {

  const func = x => add(n + x)

  func.valueOf = () => n


  return func

}

document.getElementById("demo").innerHTML = add(1)(2)(3);