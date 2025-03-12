from fastapi import FastAPI
import random

app = FastAPI()

@app.get("/recommendations")
def get_recommendations():
    products = ["Laptop", "Phone", "Shoes", "Book", "Headphones"]
    return {"recommendations": random.sample(products, 3)}
