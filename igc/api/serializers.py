from rest_framework import serializers

from emailauth.serializers import UserSerializer
from igc.models import Fellow, Publications


class PublicationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publications
        fields = [
            'pk',
            'author',
            'bibliography',
        ]
        read_only_fields = ['pk']


class FellowSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Fellow
        fields = [
            'user',
            "post",
            "post_sci",
            "post_academy",
            'slug'
        ]
        read_only_fields = ['slug']


class FellowDetailSerializer(serializers.ModelSerializer):
    publications = PublicationDetailSerializer(many=True, read_only=True)
    user = UserSerializer()

    class Meta:
        model = Fellow
        fields = [
            'user',
            'post',
            'post_sci',
            'post_academy',
            'vita',
            'phone',
            'publications',
            'slug'
        ]
        read_only_fields = ['slug']



    def update(self, instance, validated_data):
        # Handle related objects

        # Validated data will show the nested structure
        data = validated_data.pop('user')
        related_instance = getattr(instance, 'user')

        # Same as default update implementation
        for attr_name, value in data.items():
            setattr(related_instance, attr_name, value)
        related_instance.save()
        return super(FellowDetailSerializer, self).update(instance, validated_data)
