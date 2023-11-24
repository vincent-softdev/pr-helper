from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .app.api.rounter import api_router

app = FastAPI()

# Define a list of allowed origins (e.g., websites)
origins = [
    "http://localhost:5000",
    "http://localhost:8000",
]

# Add the CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # List of allowed origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)

@app.get("/")
async def main():
    return {"message": "Hello World"}

app.include_router(api_router)