from typing import List

from app.crud.base import CRUDBase, ModelType
from app.models.search import Cases
from app.schemas.search import CasesCreate, CasesUpdate
from sqlalchemy.orm import Session


class CRUDCases(CRUDBase[
    Cases,
    CasesCreate,
    CasesUpdate
]):
    def get_multi_by_user(
        self, db: Session, *, skip: int = 0, limit: int = 100, owner_id: int,
    ) -> List[ModelType]:
        return db.query(self.model).where(
            self.model.owner_id == owner_id
        ).offset(skip).limit(limit).all()


cases = CRUDCases(Cases)