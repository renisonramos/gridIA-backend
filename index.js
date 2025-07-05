// index.js
const { generateAndSaveImage } = require('./image-generator.js');

// Nossos prompts da Tarefa 3
const prompts = [
    {
        prompt: "A modern and clean office with a bull and bear statue on the desk, symbolizing the stock market. Professional, cinematic lighting, sharp focus, 8k, hyperrealistic.",
        negative_prompt: "people, cartoon, drawing, text"
    },
    {
        prompt: "A beautiful flat lay of a linen shirt, surrounded by green leaves and natural elements on a wooden background. Soft natural lighting, top-down view, highly detailed fabric texture, earthy tones.",
        negative_prompt: "model, person, plastic, messy"
    }
];

async function main() {
    console.log("Iniciando a geração de imagens de teste...");
    try {
        // Vamos gerar a primeira imagem da nossa lista
        const firstImage = prompts[0];
        await generateAndSaveImage(firstImage.prompt, firstImage.negative_prompt);

        // E a segunda
        const secondImage = prompts[1];
        await generateAndSaveImage(secondImage.prompt, secondImage.negative_prompt);

        console.log("Geração de imagens de teste concluída!");
    } catch (error) {
        console.error("O processo principal falhou:", error.message);
    }
}

main();