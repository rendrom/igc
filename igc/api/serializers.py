from rest_framework import serializers

from users.serializers import UserSerializer
from igc.models import Fellow, Publications, Community, CommunityMember


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = [
            "pk",
            "name",
            "long_name",
            "description",
            "is_public",
            "open_registration",
            "show_members",
            "slug"
        ]
        read_only_fields = ['slug']



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
            'slug',
        ]
        read_only_fields = ['slug']


class CommunityMemberSerializer(serializers.ModelSerializer):
    community = CommunitySerializer(many=False, read_only=True)
    member = FellowSerializer(many=False, read_only=True)
    member_id = serializers.IntegerField()
    community_id = serializers.IntegerField()

    class Meta:
        model = CommunityMember
        fields = [
            'pk',
            'is_staff',
            'is_active',
            'is_invited',
            'community',
            'community_id',
            'member_id',
            'member'
        ]
        read_only_fields = ['pk',]

    def create(self, validated_data):
        community = validated_data.pop('community_id')
        member = validated_data.pop('member_id')
        community_member = CommunityMember.objects.create(community_id=community, member_id=member, **validated_data)
        return community_member


class CommunityDetailSerializer(serializers.ModelSerializer):

    member = CommunityMemberSerializer(many=True, read_only=True)

    class Meta:
        model = Community
        fields = [
            "pk",
            "name",
            "long_name",
            "description",
            "is_public",
            "open_registration",
            "show_members",
            "slug",
            "member"
        ]
        read_only_fields = ['slug']


class FellowDetailSerializer(serializers.ModelSerializer):
    publications = PublicationDetailSerializer(many=True, read_only=True)
    user = UserSerializer()
    community_member = CommunityMemberSerializer(many=True, read_only=True)

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
            'slug',
            'community_member',
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
