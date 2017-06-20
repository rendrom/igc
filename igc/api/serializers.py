from django.contrib.staticfiles.templatetags.staticfiles import static
from rest_framework import serializers

from igc.models import Fellow


class FellowSerializer(serializers.ModelSerializer):
    # image = serializers.SerializerMethodField()
    class Meta:
        model = Fellow
        fields = ['id', 'username', 'slug', 'first_name', "last_name"]

    # def get_image(self, obj):
    #     if obj.image2:
    #         return str(obj.image2.url)
    #     return static("ang/assets/images/nature/1.jpg")


class FellowDetailSerializer(serializers.ModelSerializer):
    # image       = serializers.SerializerMethodField()

    class Meta:
        model = Fellow
        fields = [
            'id',
            'is_staff',
            'username',
            'first_name',
            "last_name",
            'slug',
            'biography',
            'email',
            'phone'
        ]

    # def get_image(self, obj):
    #     if obj.image2:
    #         return str(obj.image2.url)
    #     return static("ang/assets/images/nature/1.jpg")

