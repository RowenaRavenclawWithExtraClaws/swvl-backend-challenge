import requests
from decouple import config


def send_notification_data(notification_info):
    response = requests.post(
        config('API_URL'), json=notification_info)
    print(response.text)


def str_to_int(str): return int(str)


def split_str(str): return str.split(" ")


def make_list(str): return list(map(str_to_int, split_str(str)))


def construct_body(title, body, subscribers, types):
    return {'title': title,
            'body': body,
            'subscribers': subscribers,
            'types': types}
