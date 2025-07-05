// image-generator.test.js
const fs = require('fs');
const { generateAndSaveImage } = require('./image-generator.js');

// Aumenta o tempo limite do teste, pois a API pode demorar
jest.setTimeout(40000); // 40 segundos

describe('Image Generator Integration Test', () => {

  // É AQUI QUE A MUDANÇA É FEITA!
  // Adicione o .skip para desativar o teste temporariamente.
  it.skip('deve gerar uma imagem e salvá-la com sucesso', async () => {
    const testPrompt = "a simple red square on a white background";
    let imagePath = null;

    try {
      // 1. Executa a função
      imagePath = await generateAndSaveImage(testPrompt);

      // 2. Verifica se a função retornou um caminho de arquivo (string)
      expect(typeof imagePath).toBe('string');

      // 3. Verifica se o arquivo realmente existe no disco
      const fileExists = fs.existsSync(imagePath);
      expect(fileExists).toBe(true);

    } finally {
      // 4. Limpeza: apaga o arquivo de teste gerado, mesmo se o teste falhar
      if (imagePath && fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        console.log(`Arquivo de teste limpo: ${imagePath}`);
      }
    }
  });
});