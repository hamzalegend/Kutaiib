from rest_framework import generics
from .serializers import *
from .models import *


from rest_framework.response import Response
from rest_framework import status


from django.http import HttpResponse
# Create your views here.


class ItemsView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class BooksView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookMarkView(generics.ListAPIView):
    queryset = BookMark.objects.all()
    serializer_class = BookMarkSerializer

def ItemView(response, id):
    i = Book.objects.get(id=id)
    serializer = BookSerializer(i, many=False)
    print(serializer.data)
    # return HttpResponse(f"hello {serializer.data['id']}")
    return Response(serializer.data, status=status.HTTP_200_OK)