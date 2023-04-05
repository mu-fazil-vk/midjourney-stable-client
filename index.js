import replicate from 'node-replicate'

const model = 'tstramer/midjourney-diffusion:436b051ebd8f68d23e83d22de5e198e0995357afef113768c20f0b6fcef23c8b';

export default async (prompt, parameters) => 
	await replicate.run(model, { prompt, ...parameters })