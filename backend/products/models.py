from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100) # Nome do produto exibido na listagem
    description = models.TextField(blank=True) # Descrição curta do produto
    price = models.DecimalField(max_digits=10, decimal_places=2) # Preço com até 2 casas decimais
    image = models.ImageField(upload_to='products/', null=True, blank=True) # Imagem do produto

    def __str__(self):
        return self.name
