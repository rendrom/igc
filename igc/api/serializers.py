from rest_framework import serializers

from igc.models import Fellow, Publications


class FellowSerializer(serializers.ModelSerializer):
    # image = serializers.SerializerMethodField()
    publications = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Fellow
        fields = ['id', 'username', 'slug', 'first_name', "last_name", "middle_name", "post", "post_sci", "post_academy",
                  "publications"]

        # def get_image(self, obj):
        #     if obj.image2:
        #         return str(obj.image2.url)
        #     return static("ang/assets/images/nature/1.jpg")


class FellowDetailSerializer(serializers.ModelSerializer):
    publications = serializers.StringRelatedField(many=True, read_only=True)

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

        # def get_image(self, obj):
        #     if obj.image2:
        #         return str(obj.image2.url)
        #     return static("ang/assets/images/nature/1.jpg")


class PublicationDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publications
        fields = [
            'pk',
            'author',
            'bibliography',
        ]
