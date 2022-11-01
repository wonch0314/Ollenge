FROM python:3.10
COPY . .
WORKDIR /
RUN pip install -r requirements.txt
EXPOSE 8090
CMD ["uvicorn", "authimg:app", "--host", "0.0.0.0", "--port", "8090"]