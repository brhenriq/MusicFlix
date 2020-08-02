import { useState } from 'react';

function useForm(valoresIniciais){
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor
    });
  }

  function handleValues(e) {
    setValue(
      e.target.getAttribute('name'),
      e.target.value
    );
  }

  function clarForm(){
    setValues(valoresIniciais);
  }

  return {
    values,
    handleValues,
    clarForm
  }
}

export default useForm;