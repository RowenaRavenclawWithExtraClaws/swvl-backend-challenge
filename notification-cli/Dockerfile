FROM python:3.8

ADD . /app

WORKDIR /app

RUN pip install requests python-decouple

ENTRYPOINT ["python", "./app.py"]