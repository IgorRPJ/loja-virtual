const API_URL = 'http://localhost:8000/api';

//buscar produtos do backend
export async function getProducts( ) {
  const response = await fetch(`${API_URL}/products/`);
  if (!response.ok) throw new Error('Erro ao buscar produtos');
  return response.json();
}
