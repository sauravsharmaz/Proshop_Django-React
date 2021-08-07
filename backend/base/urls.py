from django.urls import path
from base import views

urlpatterns = [
    path('all_products',views.all_products),
    path('product/<int:ID>',views.product),
]
