from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer

# View responsável pelos endpoints de produtos
class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    """
        Endpoint para listagem e detalhe de produtos.
        GET /api/products/
        GET /api/products/{id}/
    """

    queryset = Product.objects.all() # Busca todos os produtos do banco
    serializer_class = ProductSerializer # Serializer usado para transformar os dados em JSON
