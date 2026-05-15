from rest_framework import serializers
from .models import Product


# Serializer responsável por converter Product em JSON
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'image']
