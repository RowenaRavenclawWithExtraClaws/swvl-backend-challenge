import helpers

print('Enter notification information\n')
print('Title: ')

title = input()

print('Body: ')

body = input()

print('Subscribers IDs (enter number with separated by a space): ')

subscribers = helpers.make_list(input())

print('Notification type (app, email, and/or sms separated by a space): ')

types = helpers.split_str(input())

notification_info = helpers.construct_body(title, body, subscribers, types)

helpers.send_notification_data(notification_info)
