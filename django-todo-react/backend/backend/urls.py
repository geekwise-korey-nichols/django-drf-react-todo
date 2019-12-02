from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from todo import views as todo_views

router = routers.DefaultRouter()
router.register(r'todos', todo_views.TodoView, 'todo')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
