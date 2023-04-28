import replicate from 'node-replicate'

const model = 'ai-forever/kandinsky-2:601eea49d49003e6ea75a11527209c4f510a93e2112c969d548fbb45b9c4f19f';

export default async (prompt, parameters) => 
	await replicate.run(model, { prompt, ...parameters })