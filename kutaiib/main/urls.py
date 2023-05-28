from django.urls import path

from . import views

urlpatterns = [
    path("", views.ItemView.as_view(), name="json View for Items"),
    path("books", views.BookView.as_view(), name="json View for Books"),
    path("bookmarks", views.BookMarkView.as_view(),
         name="json View for BookMarks"),
]
