from django.db import models
# Create your models here.


class Item(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    ogPrice = models.FloatField()

    def __str__(self):
        return self.name


class Book(Item):
    authorID = models.IntegerField(default=-1)
    numOfPages = models.IntegerField()


class BookMark(Item):
    pass


class Author(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


# ============================================================================
# ============================================================================
# ============================================================================
