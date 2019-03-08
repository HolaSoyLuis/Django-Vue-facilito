from rest_framework import viewsets
from .models import book
from .serializer import book_serializer

class book_viewset(viewsets.ModelViewSet):
    queryset = book.objects.all()
    serializer_class = book_serializer