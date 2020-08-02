import configs from '../config';

const URL_CATEGORIA = `${configs.URL_BACKEND}/categorias`

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIA}?_embed=videos`).then(async (response) => {
    if(response.ok){
      const res = await response.json();
      return res;
    }

    throw new Error ('Não foi possível recuperar os dados');
  });
}

function getAll() {
  return fetch(`${URL_CATEGORIA}`).then(async (response) => {
    if(response.ok){
      const res = await response.json();
      return res;
    }

    throw new Error ('Não foi possível recuperar os dados');
  });
}

function create(categoria) {
  return fetch(`${URL_CATEGORIA}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(categoria)
  })
  .then(async (response) => {
    if(response.ok){
      const res = await response.json();
      return res;
    }

    throw new Error ('Não foi possível cadastrar a categoria');
  });
}

export default {
  getAllWithVideos,
  getAll,
  create
};