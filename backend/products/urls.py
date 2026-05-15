from rest_framework.routers import DefaultRouter
from .views import ProductViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet) # Registra a rota de produtos

urlpatterns = router.urls
