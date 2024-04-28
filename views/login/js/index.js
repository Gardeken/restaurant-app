const inputUser = document.querySelector("#inputUser"),
  inputPassword = document.querySelector("#inputPassword"),
  btnSubmit = document.querySelector("#btn-submit");

function validarCampos() {
  const listadoInputs = [inputUser.value, inputPassword.value].some(
    (i) => i === ""
  );
  if (listadoInputs) {
    return alert("No puede dejar los campos vacios");
  }

  consultarBD();
}

async function consultarBD() {
  try {
    const user = await axios.get("/api/users", {
      params: {
        usuario: inputUser.value,
        contraseña: inputPassword.value,
      },
    });
    if (user.status === 202) {
      window.location.href = user.data.message;
    }
  } catch (error) {
    alert(error.response.data.message);
  }
}

btnSubmit.addEventListener("click", validarCampos);
