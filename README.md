# Swvl Backend Challenge

Code for Swvl backend challenge for technical interview 

## Contects

- [Installation](#installation)
- [Assumptions](#assumptions)
- [Flow of execution](#flow-of-excecution)
- [Schema](#schema)
- [Endpoint](#endpoint)
- [Technologies used](#technologies-used)
- [Downsides](#downside)

## Installation

- Clone the repo and run `docker-compose up`
- Open the `CLI` of the postgres container
- Create tables `users` and `notification`
- Add some users to the table
- Open the `CLI` of the `notification-cli` container and start entering notification data

## Assumptions

- `notification-cli` acts like the service that compose the notification
- Kind of notification (individual or group) gets determined by the length of the subscribers array in the notification table.

## Flow of execution

- Notification data should be entered in the `notification-cli` console window
- Notification wil be sent to the `notification-api`, store it in the database, and forward its id through the message queue
- `notification-service` will receive the notification id from the message queue
- `notification-service` then will fetch users from the database baased on the subscribers array
- `notification-service`finally will forward the notification to the publishing services

Here is an image to demonstrate the system design and execution flow

![swvl-notification-arch](https://github.com/RowenaRavenclawWithExtraClaws/swvl-backend-challenge/blob/main/assets/system-arch.png)

## Schema

- Notification table:
  - id (int, auto_increment)
  - title (charachter_varying(40))
  - body (text)
  - subscribers (numeric[])
  - types (text[])
  - date_create (text)
  - date_read (text) ?
  
- Users table:
  - id (int, auto_increment)
  - userdata (text)
  - prefered_lang (text)
  
## Endpoint

- url: `/notification`
- method: `POST`
- body: `{ title: "", body: "", subscribers: [], types: [] }`
- response: `"Notification is on the way"`

## Technologies used

- notification-cli:
  - Python `3.8`
  
- notification-api:
  - Node `15.5.1`
  - Express `4.17.1`
  - Prisma `2.28.0
  
- notification-service:
  - Node `15.5.1`
  
- message queue
  - RabbitMQ `3.9.1`

## Downsides

- This repo do not contain any tests
- There is no error handling
- The problem statement was pretty vague so, a lot of my understanding and implemention could turn out to be wrong

The first two downsides are because I didn't have enough time working on the code. It is not an execuse but it is what happend
