from django.db import models

# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    ogPrice = models.FloatField()

    def __str__(self):
        return self.name


class Book(Item):
    author = models.CharField(max_length=50)
    numOfPages = models.IntegerField()


class BookMark(Item):
    pass


# ============================================================================
# ============================================================================
# ============================================================================
orders = []
restocks = []
