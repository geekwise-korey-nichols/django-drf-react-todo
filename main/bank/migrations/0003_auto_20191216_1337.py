# Generated by Django 2.2.7 on 2019-12-16 21:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('bank', '0002_product_amount'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='product_types',
            new_name='product_type',
        ),
    ]