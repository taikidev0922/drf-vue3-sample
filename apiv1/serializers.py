from rest_framework import serializers
from shop.models import Book

class BookSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = ['id', 'title', 'price']

    extra_kwargs = {
        'title': {
            'error_messages': {
                'blank': 'Please enter a title'
            }
        },
        'price': {
            'error_messages': {
                'invalid': 'Please enter a valid price'
            }
        }
    }