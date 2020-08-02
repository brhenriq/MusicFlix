import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import TemplateBase from '../../../components/TemplateBase';
import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/categorias';


function CadastroCategoria() {
  const history = useHistory();
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: ''
  }

  const { handleValues, values }= useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : '';

    fetch(url).then(async (response) => {
      const res = await response.json();
      setCategorias([
        ...res,
      ]);
    });
  }, []);

  return (
    <TemplateBase>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        categoryRepository.create({
          titulo: values.titulo,
          cor: values.cor
        })
          .then(() => {
            history.push('/');
          });

      }}>
        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleValues}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleValues}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleValues}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 &&(
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria.titulo}${indice}`}>
              {categoria.titulo}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </TemplateBase>
  )
}

export default CadastroCategoria;