type stringTransformer = (text: string) => string;

const toUpperCase: stringTransformer = (text) => text.toUpperCase();
const toLowerCase: stringTransformer = (text) => text.toLowerCase();
const trim: stringTransformer = (text) => text.trim();
const addBrackets: stringTransformer = (text) => `[${text}]`;

function transform(text: string, fn: stringTransformer): string {
  return fn(text);
}

const input = " Hello, TypeScript ";

console.log(transform(input, toLowerCase));
console.log(transform(input, toUpperCase));
console.log(transform(input, trim));
console.log(transform(input, addBrackets));

const transformers: stringTransformer[] = [trim, toUpperCase, addBrackets];
const result = transformers.reduce((text, fn) => transform(text, fn), input);
console.log(result);
