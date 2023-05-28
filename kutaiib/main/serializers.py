from rest_framework import serializers

from main.models import *


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("id", "name", "price", "ogPrice")


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ("id", "name", "price", "ogPrice", "authorID", "numOfPages")


class BookMarkSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookMark
        fields = ("id", "name", "price", "ogPrice")
