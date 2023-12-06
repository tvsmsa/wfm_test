from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
UserModel = get_user_model()

def custom_validation(data):
    username = data['username'].strip()
    password = data['password'].strip()
    first_name = data['first_name'].strip()
    last_name = data['last_name'].strip()
    ##
    if not username or UserModel.objects.filter(username = username).exists():
        raise ValidationError('choose another username')
    ##
    if not first_name:
        raise ValidationError('a first name is needed')
    if not last_name:
        raise ValidationError('a last name is needed')
    if not password or len(password) < 8:
        raise ValidationError('choose another password, min 8 characters')
    ##
    return data


def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError('a username is needed')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('a password is needed')
    return True

def validate_first_name(data):
    first_name = data['first_name'].strip()
    if not first_name:
        raise ValidationError('a first name is needed')
    return True  

def validate_last_name(data):
    last_name = data['last_name'].strip()
    if not last_name:
        raise ValidationError('a last name is needed')
    return True