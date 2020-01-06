from rest_framework import viewsets
from .serializers import Branch_Serializer, Customer_Serializer, Account_Serializers, Product_Serializer
from .models import Branch, Customer, Account, Product

class Branch_Viewset(viewsets.ModelViewSet):
    queryset = Branch.objects.all().order_by('id')
    serializer_class = Branch_Serializer

class Customer_Viewset(viewsets.ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = Customer_Serializer

class Account_Viewset(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = Account_Serializers

class Product_Viewset(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = Product_Serializer