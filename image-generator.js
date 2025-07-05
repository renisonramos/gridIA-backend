// image-generator.js
require('dotenv').config();
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const apiKey = process.env.STABILITY_API_KEY;
const apiUrl = 'https://api.stability.ai/v2beta/stable-image/generate/sd3';

if (!apiKey) {
  throw new Error("A chave da API da Stability AI não foi encontrada no .env");
}

/**
 * Gera uma imagem usando a API da Stability AI e a salva em um arquivo.
 * @param {string} prompt - A descrição da imagem a ser gerada.
 * @param {string} negativePrompt - (Opcional) O que você não quer ver na imagem.
 * @returns {Promise<string>} O caminho do arquivo da imagem salva.
 */
async function generateAndSaveImage(prompt, negativePrompt = '') {
  console.log(`Gerando imagem para o prompt: "${prompt}"`);

  const formData = new FormData();
  formData.append('prompt', prompt);
  if (negativePrompt) {
    formData.append('negative_prompt', negativePrompt);
  }
  formData.append('output_format', 'png');

  try {
    const response = await axios.post(apiUrl, formData, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'image/*',
      },
      responseType: 'arraybuffer', // Recebemos os dados da imagem diretamente
    });

    // Esta é a "validação da resposta" (tarefa 5). Se chegou aqui, a resposta é válida.
    const imageFileName = `output_${Date.now()}.png`;
    const imagePath = path.join(__dirname, 'outputs', imageFileName); // Salva em uma subpasta 'outputs'

    // Cria a pasta 'outputs' se ela não existir
    if (!fs.existsSync(path.join(__dirname, 'outputs'))){
        fs.mkdirSync(path.join(__dirname, 'outputs'));
    }

    fs.writeFileSync(imagePath, response.data);
    console.log(`Imagem salva com sucesso em: ${imagePath}`);
    
    return imagePath; // Retorna o caminho do arquivo

  } catch (error) {
    console.error('ERRO DETALHADO AO GERAR IMAGEM:');
    if (error.response) {
      console.error('Status:', error.response.status);
      const errorResponse = JSON.parse(Buffer.from(error.response.data).toString('utf-8'));
      console.error('Detalhes:', JSON.stringify(errorResponse, null, 2));
    } else {
      console.error('Erro na requisição:', error.message);
    }
    throw new Error('Falha ao gerar a imagem.'); // Lança um erro para quem chamou a função saber que falhou
  }
}

// Exportamos a função para que outros arquivos possam usá-la
module.exports = { generateAndSaveImage };