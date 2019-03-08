from rest_framework import routers
from .viewsets import book_viewset

router = routers.SimpleRouter()
router.register('book', book_viewset)

urlpatterns = router.urls