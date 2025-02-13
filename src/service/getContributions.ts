export async function getContributions() {
  const response = await fetch(
    'https://github-contributions-api.deno.dev/ronaldocreis.json'
  );
  const data = await response.json();
  return data;
}
