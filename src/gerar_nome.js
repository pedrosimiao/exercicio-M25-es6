export async function gerarNome() {
    try {
        const genero = Math.random() < 0.5 ? 'male' : 'female';
        const response = await fetch(`https://www.randomlists.com/data/names-${genero}.json`);
        
        if (!response.ok) {
            throw new Error('Falha na resposta da rede');
        }
        
        const nomes = await response.json();
        const nome = nomes.data[Math.floor(Math.random() * nomes.data.length)];
        
        return nome;
    } catch(error) {
        console.error('Não foi possível gerar nome:', error);
        throw error;
    }
}


// async function buscarDados(url) {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error('Falha na resposta da rede');
//       }
//       return response.json();
//     } catch (error) {
//       console.error('Erro ao buscar dados:', error);
//     }
// }
  
// function buscarNomes(nameType) {
//     return buscarDados(`https://www.randomlists.com/data/names-${nameType}.json`);
// }
  
// function pickRandom(list) {
//     return list[Math.floor(Math.random() * list.length)];
// }
  
// async function gerarNome(gen) {
//     try {
//       const response = await buscarNomes(gen || pickRandom(['male', 'female']));
//       const nomes = response;  
//       const nome = pickRandom(nomes.data);  
//       return `${nome}`;
//     } catch(error) {
//       console.error('Não foi possível gerar nome:', error);
//     }
// }


