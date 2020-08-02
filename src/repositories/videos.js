import configs from '../config';

const URL_VIDEOS = `${configs.URL_BACKEND}/videos`

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video)
  })
  .then(async (response) => {
    if(response.ok){
      const res = await response.json();
      return res;
    }

    throw new Error ('Não foi possível cadastrar o vídeo');
  });
}

export default {
  create
};