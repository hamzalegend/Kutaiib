from rest_framework import generics
from .serializers import *
from .models import *


from rest_framework.response import Response
from rest_framework import status


from django.http import HttpResponse
# Create your views here.

from rest_framework.views import APIView


class ItemsView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class BooksView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


class BookMarkView(generics.ListAPIView):
    queryset = BookMark.objects.all()

class ItemView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, id, *args, **kwargs):
    
        item = Item.objects.get(id = id)
        if not item:
            return Response(
                {"res": "Object with Item id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = ItemSerializer(item)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

class BookView(APIView):
    # add permission to check if user is authenticated
    # permission_classes = [permissions.IsAuthenticated]

    def get(self, request, id, *args, **kwargs):
    
        book = Book.objects.get(id = id)
        if not book:
            return Response(
                {"res": "Object with Book id does not exists"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = BookSerializer(book)
        return Response(serializer.data, status=status.HTTP_200_OK)