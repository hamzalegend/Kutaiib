from rest_framework import generics
from .serializers import *
from .models import *
# Create your views here.


class ItemView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class BookView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookMarkView(generics.ListAPIView):
    queryset = BookMark.objects.all()
    serializer_class = BookMarkSerializer
