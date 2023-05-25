from rest_framework import serializers

from main.models import *


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ("id", "name", "price", "ogPrice")
