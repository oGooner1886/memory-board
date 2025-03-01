from pydantic import BaseModel
from typing import Optional




class Veteran(BaseModel):
    id: int
    first_name: str
    last_name: str
    middle_name: str
    birth_date: str
    death_date: Optional[str]
    description: Optional[str]
    volunteer_id: str
    awards: Optional[str]

    class Config:
        orm_mode = True
        