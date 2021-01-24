import json
import logging
import traceback
import subprocess

logger = logging.getLogger('django')

class RunCommand:
    def __init__(self):
        self.response = dict()

    def run(self, command) -> dict:
        try:
            result = subprocess.run(
                command.split(),
                stdout = subprocess.PIPE,
                stderr = subprocess.PIPE
            )
            self.response['result'] = result
            return self.response
        except Exception as e:
            raise e
