from rest_framework import serializers

from igc.models import Fellow, Publications


class PublicationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publications
        fields = [
            'pk',
            'author',
            'bibliography',
        ]


class FellowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fellow
        fields = [
            'id',
            'username',
            'slug',
            'first_name',
            "last_name",
            "middle_name",
            "post",
            "post_sci",
            "post_academy",
        ]


class FellowDetailSerializer(serializers.ModelSerializer):
    publications = PublicationDetailSerializer(many=True, read_only=True)

    class Meta:
        model = Fellow
        fields = [
            'id',
            'is_staff',
            'username',
            'post',
            'post_sci',
            'post_academy',
            'first_name',
            "last_name",
            "middle_name",
            'slug',
            'vita',
            'email',
            'phone',
            'publications'
        ]
