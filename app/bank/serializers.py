from rest_framework import serializers
from .models import Branch, Customer, Account, Product

class Branch_Serializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Branch
        fields = [
            location_name,
            location
        ]

class Customer_Serializer( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Customer
        fields = [
            customer_name,
            customer_email
        ]

class Account_Serializers( serializers.HyperlinkedModelSerializer ):
    class Meta:
        model = Account
        fields = [
            account_id
        ]

class Product_Serializer( serializer.HyperlinkedModelSerializer ):
    class Meta:
        model = Product
        fields = [
            amount,
            product_type
        ]

        