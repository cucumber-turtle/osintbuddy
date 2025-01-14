from typing import Dict

from fastapi.testclient import TestClient

from app.core.config import settings


def test_celery_worker_test(
    client: TestClient, superuser_token_headers: Dict[str, str]
) -> None:
    data = {"msg": "test.json"}
    r = client.post(
        f"{settings.API_V1_STR}/utils/test.json-celery/",
        json=data,
        headers=superuser_token_headers,
    )
    response = r.json()
    assert response["status"] == "ok"
