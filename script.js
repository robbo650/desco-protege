function validarAgencia(campo) {
  campo.value = campo.value.replace(/\D/g, '');
  if (campo.value.length === 4) {
    document.getElementById("conta").focus();
  }
  if (campo.value.length > 4) {
    alert("⚠️ A agência deve ter apenas 4 números.");
    campo.value = campo.value.slice(0, 4);
  }
}

function formatarConta(campo) {
  let valor = campo.value.replace(/\D/g, '');

  if (valor.length <= 6) {
    campo.value = valor;
  }

  if (valor.length === 7) {
    campo.value = valor.slice(0, 6) + '-' + valor.slice(6);
  }

  if (valor.length > 7) {
    alert("⚠️ A conta deve ter 6 números + hífen + 1 número.");
    campo.value = valor.slice(0, 7);
  }
}

function validarEAvancar() {
  const agencia = document.getElementById("agencia").value.trim();
  const conta = document.getElementById("conta").value.trim();

  const agenciaValida = /^\d{4}$/.test(agencia);
  const contaValida = /^\d{6}-\d{1}$/.test(conta);

  if (!agenciaValida || !contaValida) {
    alert("⚠️ Preencha os campos corretamente.");
    return;
  }

  localStorage.setItem("agencia", agencia);
  localStorage.setItem("conta", conta);

  window.location.href = "senha.html";
}