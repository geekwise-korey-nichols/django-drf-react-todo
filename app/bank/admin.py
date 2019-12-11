from django.contrib import admin
from .models import Branch, Customer, Account, Product
# Register your models here.

admin.site.register(
    (Branch,
    Customer,
    Account,
    Product)
)