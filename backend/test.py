import unittest
from unittest.mock import patch
from app import *

class Test(unittest.TestCase):
    def test_breaking(self):
        with patch('app.requests.get') as mocked_get:
            mocked_get.return_value.status_code == 200
            mocked_get.return_value.text = 'success'

            response = breaking()
            mocked_get.assert_called_with(f'https://gnews.io/api/v4/top-headlines?token={api_key}&lang=en')
        # t = breaking().test_client(self)
        # response - t.get('/')
        # assert response.status_code == 200


if __name__ == '__main__':
    unittest.main()