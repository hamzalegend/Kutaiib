from django.urls import path

from . import views

urlpatterns = [
    path("", views.ItemsView.as_view(), name="json View for Items"),
    path("books", views.BooksView.as_view(), name="json View for Books"),
    path("bookmarks", views.BookMarkView.as_view(), name="json View for BookMarks"),
    path("Item/<int:id>", views.ItemView.as_view(), name="json View for a single item"),
    path("Book/<int:id>", views.BookView.as_view(), name="json View for a single item"),


]
