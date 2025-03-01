from pydantic import BaseModel
from typing import Optional



class Region(BaseModel):
    id: int
    name: str

    class Config:
        orm_mode = True    


class Volunteer(BaseModel):
    id: int
    name: str
    email: str
    phone: str
    region: Region

    class Config:
        orm_mode = True
        