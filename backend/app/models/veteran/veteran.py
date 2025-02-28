from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Veteran(Base):
    __tablename__ = 'veterans'

    id = Column(Integer, primary_key=True)
    first_name = Column(String)
    last_name = Column(String)
    birth_date = Column(Date)
    death_date = Column(Date)
    description = Column(String)
    volunteer_id = Column(Integer)
    awards = Column(String)

    def __repr__(self):
        return f'Veteran(id={self.id}, name={self.first_name} {self.last_name})'
    