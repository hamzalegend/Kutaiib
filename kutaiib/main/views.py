from rest_framework import generics
from .serializers import ItemSerializer
from .models import *
# Create your views here.


class ItemView(generics.ListAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


# @api_view(["Get"])
# def index(response):
#     Book.objects
#     return Response()
