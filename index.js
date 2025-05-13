async function imc(height, weight) {
  if (typeof height !== "number" || typeof weight !== "number") {
    return Promise.reject(`The values need to be numbers.`);
  }
  console.log(`Calculando imc...`);
  return weight / height ** 2;
}

async function showImc(height, weight) {
  try {
    const result = await imc(height, weight);
    console.log(`Calculando o IMC de peso: ${weight} e altura: ${height}...`);
    if (result < 18.5) console.log("Situação: MAGREZA");
    else if (result < 25) console.log("Situação: NORMAL");
    else if (result < 30) console.log("Situação: SOBREPESO");
    else if (result < 40) console.log("Situação: OBESIDADE");
    else console.log("Situação: OBESIDADE GRAVE");
  } catch (err) {
    console.log(err);
  }
}

showImc(1.74, 71);
showImc(1.6, 48);
showImc("texto", 71);
showImc(1.72, 82);
showImc(1.8, 120);
